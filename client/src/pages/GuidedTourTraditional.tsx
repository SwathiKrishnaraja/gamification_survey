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
import styled from 'styled-components'

const StyledText = styled.h4`
    font-weight: 400;
    padding: 2px;

`

const getModalText = (mode: string): string => {
    switch (mode) {
        case 'TRADITIONAL_GAMIFIED_1':
            return `You have now completed the guided tour of the survey. Now you will be redirected to the guided tour of the next version.`
        case 'TRADITIONAL_GAMIFIED_2':
            return `You have now completed the guided tour of the survey. Now you will be redirected to next page to choose your survey version. Please do not click Back or Refresh in the browser while taking the survey to not lose progress. Click ‘Continue’ to proceed.`
        case 'TRADITIONAL':
            return `You have now completed the guided tour of the survey. Now you will be redirected to the actual survey. Please do not click Back or Refresh in the browser while taking the survey to not lose progress. Click ‘Continue’ to begin the survey.`
        default:
            return `You have now completed the guided tour of the survey. Please do not click Back or Refresh in the browser while taking the survey to not lose progress. Click ‘Continue’ to proceed.`
    }

}
type TourProps = {
    surveyMode: string
}

export const TourContinueElement: React.FC<TourProps> = ({ surveyMode }) => {
    return (
        <Fragment>
            <h2>Congratulations !</h2>
            <hr style={{ width: '98%' }} />
            <StyledText>
                {getModalText(surveyMode)}
            </StyledText>
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
            return '/ChooseVersion'
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

    const surveyMode = useSelector((state: RootState) => state.entryPointReducer.mode) //uncomment this for prod

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
                            ? <GuidedTourModal showModal={showModal} handleClick={handleTourProceed} children={<TourContinueElement surveyMode={surveyMode} />} modalWindowButton='Continue' styleClass='guided-modal-main' buttonClass='continue-button' />
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
