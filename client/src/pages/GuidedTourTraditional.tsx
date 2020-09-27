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
            You have finished the Guided tour of first version.
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
        case 'TRADITIONAL_GAMIFIED1':
            return '/GuidedTourGamified'
        case 'TRADITIONAL_GAMIFIED2':
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
    const surveyMode = useSelector((state: RootState) => state.entryPointReducer.mode)


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
                        arrowColor: '#f5f5f5',
                        backgroundColor: '#f5f5f5',
                        zIndex: 1000,
                    }
                }}
                continuous={true} />
            <Header children={<ExitSurvey />} />
            <div className="main-body">
                <h2>Here is a guided tour for the first version of the survey</h2>
                <button className='continue-button' onClick={handleStartTour}>Start Tour</button>
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
