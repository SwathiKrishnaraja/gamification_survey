import React, { Fragment, useState, useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomProgressBar from '../components/CustomProgressBar'
import { useTranslation } from 'react-i18next';
import { model } from '../survey/json/MockQuestionsGamified'
import * as Survey from 'survey-react'
import GuidedTourModal from '../components/GuidedTour/GuidedTourModal'
import { useHistory } from 'react-router-dom';
import Joyride, { CallBackProps } from 'react-joyride';
import GuidedTourBadges from '../components/GuidedTour/GuidedTourBadges'
import { stepsForTour1 } from '../components/GuidedTour/TourSteps'
import { listOfMockImages } from '../badges/BadgeList'
import { useDispatch, useSelector } from 'react-redux'
import ExitSurvey from '../components/ExitSurvey'
import { RootState } from '../reducer/reducer';

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
        case 'GAMIFIED':
            return '/GamifiedSurvey'
        case 'TRADITIONAL_GAMIFIED_1':
            return '/ChooseVersion'
        case 'TRADITIONAL_GAMIFIED_2':
            return '/ChooseVersion'
        case 'GAMIFIED_WITH_BADGES':
            return '/GamifiedSurvey'
        case 'GAMIFIED_CHOICE_1':
            return '/GuidedTourLeaderboard'
        case 'GAMIFIED_CHOICE_2':
            return '/GuidedTourLeaderboard'
        default:
            return '/GamifiedSurvey'
    }
}

const GuidedTourGamified = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const history = useHistory()
    const [runTour1, setRunTour1] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showTour, setShowTour] = useState(false)
    // Testing-setup for thesis
    // const surveyMode = useSelector((state: RootState) => state.entryPointReducer.mode) //uncomment this for prod
    const surveyMode = useSelector((state: RootState) => state.optionsProviderReducer)
    // Testing-setup for thesis)

    const handleJoyrideCallbackForTour1 = (data: CallBackProps) => {
        const { index, status } = data
        if (index === 4 && status === 'running') {
            dispatch({ type: 'ADD_BADGE', payload: listOfMockImages[0] })
        }
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
        dispatch({ type: 'REMOVE_BADGE', payload: listOfMockImages[0] })
        const path = getNavigationPath(surveyMode)
        history.push(path)
    }

    return (
        <div className="container">
            <Joyride
                callback={handleJoyrideCallbackForTour1}
                steps={stepsForTour1}
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
                {showTour ? null : <button className='continue-button' onClick={handleStartTour}>Start Tour</button>}

                {
                    showTour
                        ? <div className='guided-tour-div'>
                            <GuidedTourBadges />
                            <CustomProgressBar progress={70} />
                            <SurveyQuestions />
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

export default GuidedTourGamified;