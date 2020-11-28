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

const TourContinueElement: React.FC = () => {
    return (
        <div>
            <h2>Congratulations !</h2>
            <hr style={{ width: '98%' }} />
            <br />
            <h4>
                You have finished the Guided tour.
            </h4>

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
            return '/ChooseGamifiedVersion'
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
    const user = createABarGraphElement('You', 850, 85, 'blue')
    const listOfComponents: Array<React.ReactElement> = [zeus, ron, han, jonas, user]

    const handleJoyrideCallbackForTour1 = (data: CallBackProps) => {
        const { index, status } = data
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
                        arrowColor: '#f5f5f5',
                        backgroundColor: '#f5f5f5',
                        zIndex: 1000,
                    }
                }}
                continuous={true} />
            <Header children={<ExitSurvey />} />
            <div className="main-body">
                <h2>Here is a guided tour for the survey</h2>
                <button className='continue-button' onClick={handleStartTour}>Start Tour</button>
                {
                    showTour
                        ? <div className='guided-tour-div'>
                            <CustomProgressBar progress={70} />
                            <div className='leaderBoard-body'>
                                <div className='survey-body'>
                                    <SurveyQuestions />
                                </div>
                                <LeaderboardComponent points={850} listOfComponents={listOfComponents} />
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
