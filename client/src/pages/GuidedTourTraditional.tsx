import React, { Fragment, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CustomProgressBar from '../components/CustomProgressBar'
import { useTranslation } from 'react-i18next'
import { model } from '../survey/json/MockQuestionsTraditional'
import * as Survey from 'survey-react'
import Joyride, { CallBackProps } from 'react-joyride'
import GuidedTourModal from '../components/GuidedTour/GuidedTourModal'
import { useHistory } from 'react-router-dom'
import { stepsForTraditionalTour } from '../components/GuidedTour/TourSteps'
import ExitSurvey from '../components/ExitSurvey'
import { useSelector } from 'react-redux'
import { RootState } from '../reducer/reducer'


export const TourContinueElement: React.FC = () => {
    return (
        <Fragment>
            <h2>Congratulations !</h2>
            <hr style={{ width: '98%' }} />
            <h4>
                <br />
            You have finished the Guided tour.
            </h4>
        </Fragment>
    )
}
type SurveyQuestionsProps = {
    callback: () => void
}
export const SurveyQuestions = ({ callback }: SurveyQuestionsProps) => {
    return (
        <Survey.Survey model={model}
            onComplete={callback}
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
        case 'TRADITIONAL':
            return '/TraditionalSurvey'
        case 'GAMIFIED':
            return '/GamifiedSurvey'
        case 'TRADITIONAL_GAMIFIED_1':
            return '/GuidedTourGamified'
        case 'TRADITIONAL_GAMIFIED_2':
            return '/GuidedTourGamified'
        default:
            return '/GuidedTourTraditional'
    }
}
const GuidedTourTraditional = () => {
    const history = useHistory()
    const { t } = useTranslation()
    const [run, setRun] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showTour, setShowTour] = useState(false)

    // Testing-setup for thesis
    // const surveyMode = useSelector((state: RootState) => state.entryPointReducer.mode) //uncomment this for prod
    const surveyMode = useSelector((state: RootState) => state.optionsProviderReducer)
    // Testing-setup for thesis

    const handleSurveyCallback = () => {
        setShowModal(true)

    }
    const handleStartTour = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setRun(true)
        setShowTour(true)
    }

    const handleTourProceed = () => {
        const path = getNavigationPath(surveyMode)
        history.push(path)
    }


    return (
        <div className="container">
            <Joyride
                steps={stepsForTraditionalTour}
                run={run}
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

                {showTour
                    ? <div className='guided-tour-div'>
                        <CustomProgressBar progress={70} />
                        <SurveyQuestions
                            callback={handleSurveyCallback}
                        />
                        {showModal
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

export default GuidedTourTraditional;
