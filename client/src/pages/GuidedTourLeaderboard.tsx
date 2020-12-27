import React, { Fragment, useState, useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomProgressBar from '../components/CustomProgressBar'
import { useTranslation } from 'react-i18next';
import { model } from '../survey/json/MockQuestionsLeaderboard'
import * as Survey from 'survey-react'
import GuidedTourModal from '../components/GuidedTour/GuidedTourModal'
import { useHistory } from 'react-router-dom';
import Joyride, { CallBackProps } from 'react-joyride';
import GuidedTourBadges from '../components/GuidedTour/GuidedTourBadges'
import { stepsForLeaderboardTour } from '../components/GuidedTour/TourSteps'
import { listOfMockImages } from '../badges/BadgeList'
import { useDispatch, useSelector } from 'react-redux'
import ExitSurvey from '../components/ExitSurvey'
import { RootState } from '../reducer/reducer'
import createABarGraphElement, { barGraphElements } from '../helpers/createLeaderboardElements'
import LeaderboardComponent from '../components/LeaderboardComponent';
import styled from 'styled-components';
import { renderSortedComponents } from '../components/LeaderboardComponent'
import { Points } from '../types/types';

const StyledText = styled.h4`
    font-weight: 400;
    padding: 2px;

`
const TourContinueElement: React.FC = () => {
    return (
        <div>
            <h2>Congratulations !</h2>
            <hr style={{ width: '98%' }} />
            <br />
            <StyledText>
                You have now completed the guided tour of the survey. Now you
                will be redirected to the actual survey. Click ‘Continue’ to begin the survey.
            </StyledText>

        </div>
    )
}

export const SurveyQuestions = () => {
    return (
        <Survey.Survey model={model}
        />
    )
}

/**
 * 
 * @param surveyMode
 * @returns the navigation path as a string
 */
const getNavigationPath = (surveyMode: string): string => {
    switch (surveyMode) {
        case 'GAMIFIED_WITH_POINTS':
            return '/LeaderBoardSurvey'
        case 'GAMIFIED_CHOICE_1':
            return '/ChooseGamifiedVersion'
        case 'GAMIFIED_CHOICE_2':
            return '/GuidedTourGamified'
        default:
            return '/LeaderBoardSurvey'
    }
}

const GuidedTourLeaderboard = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const history = useHistory()
    const [runTour1, setRunTour1] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showTour, setShowTour] = useState(false)

    // Testing-setup for thesis
    // const surveyMode = useSelector((state: RootState) => state.entryPointReducer.mode) //uncomment this for prod
    const surveyMode = useSelector((state: RootState) => state.optionsProviderReducer)
    // Testing-setup for thesis

    const { zeus, ron, han, jonas } = barGraphElements

    const points: Points = useSelector((state: RootState) => state.addPointsReducer)
    const user = createABarGraphElement('You', points.points, (points.points / 10), 'blue')
    const listOfComponents: Array<React.ReactElement> = [zeus, ron, han, jonas, user]

    const handleJoyrideCallbackForTour1 = (data: CallBackProps) => {
        const { index, status } = data
        if (status === 'ready') {
            setShowModal(true)
        }
        if (index === 6 && status === 'running') {
            dispatch({ type: 'ADD_POINTS', payload: listOfMockImages[0] })
        }
        console.log(index, status)
        console.log('state', points)
        if (status === 'ready') {
            setShowModal(true)
        }

    }
    const handleStartTour = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setRunTour1(true)
        setShowTour(true)
    }

    const handleTourProceed = () => {
        dispatch({ type: 'REMOVE_POINTS', payload: listOfMockImages[0] })
        const path = getNavigationPath(surveyMode)
        history.push(path)
    }

    return (
        <div className="container">
            <Joyride
                callback={handleJoyrideCallbackForTour1}
                steps={stepsForLeaderboardTour}
                run={runTour1}
                spotlightClicks={true}
                hideBackButton={true}
                styles={{
                    options: {
                        arrowColor: '#b1cee9',
                        backgroundColor: '#b1cee9',
                        overlayColor: 'rgba(79, 26, 0, 0.4)',
                        primaryColor: '#000',
                        textColor: '#004a14',
                        width: 500,
                        zIndex: 1000,
                    }
                }}
                continuous={true} />
            <Header children={<ExitSurvey />} />
            <div className="main-body">
                <h2>Here is a guided tour for the survey</h2>
                <p>In this version of survey, you will be presented with game elements such as <b>Points and Leaderboard</b>. In order to understand how the respective gamification works, please click on the button <b>‘Start Tour’</b>, and have a guided walkthrough of the different functionalities that are available within the survey.</p>
                {showTour ? null : <button className='continue-button' onClick={handleStartTour}>Start Tour</button>}
                {
                    showTour
                        ? <div className='guided-tour-div'>
                            <CustomProgressBar progress={70} />
                            <div className='leaderBoard-body'>
                                <div className='survey-body'>
                                    <SurveyQuestions />
                                </div>
                                <LeaderboardComponent points={points.points} listOfComponents={renderSortedComponents(listOfComponents)} />
                            </div>
                            {
                                showModal
                                    ? <GuidedTourModal showModal={showModal} handleClick={handleTourProceed} children={<TourContinueElement />} modalWindowButton='Continue' styleClass='guided-modal-main' buttonClass='continue-button' />
                                    : <Fragment />}
                        </div>
                        : <Fragment />
                }
            </div>
            <Footer />
        </div >
    );
};

export default GuidedTourLeaderboard;
