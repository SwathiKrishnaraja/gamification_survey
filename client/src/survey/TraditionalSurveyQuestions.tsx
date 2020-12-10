import React, { useState, Fragment } from 'react'
import * as Survey from 'survey-react'
import TraditionalSurveyJSON from './json/TraditionalSurveyJSON'
import { useHistory } from 'react-router-dom'
import GuidedTourModal from '../components/GuidedTour/GuidedTourModal'
import ThanksText from '../components/ThanksText'
import { SurveyModel } from 'survey-react'
import getCharacterCount from '../helpers/getCharacterCount'
import filterOpenQuestions from '../helpers/filterOpenQuestions'
import postSurveyMode from '../api/postSurveyMode'
import getAverageTime from '../helpers/getAverageTime'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../reducer/reducer'


type Props = {
    progress: number,
    handleProgress: () => void
}

const SurveyQuestions = ({ handleProgress }: Props) => {
    const history = useHistory()
    const [showModal, setShowModal] = useState(false)
    const survey_mode = useSelector((state: RootState) => state.entryPointReducer.mode)
    const surveyJson = TraditionalSurveyJSON()
    const dispatch = useDispatch()

    /**
     * 
     * @param sender 
     * @param options
     * @event calls submitSurveyData to store the details to the database 
     * @event calls postSurveyMode to post the survey mode to postgres
     */

    const handleSurveyCompletion = (sender: SurveyModel, options: any) => {
        let listOfSurveyQuestions = []
        setShowModal(showModal ? false : true)
        try {
            const { timeSpent: time_taken, data } = sender
            listOfSurveyQuestions.push(data)
            const average_time = Math.round(getAverageTime(time_taken))
            const char_count = getCharacterCount(filterOpenQuestions(listOfSurveyQuestions))
            const mainSurvey = data
            const browser = window.navigator.userAgent
            dispatch({
                type: 'STORE_SURVEY',
                payload: {
                    survey_mode, char_count, time_taken, average_time, mainSurvey, browser
                }
            })
            postSurveyMode({ mode: survey_mode })


        } catch (error) {
            throw (error)
        }
    }
    const handleProceedButton = () => {
        history.push('/PostSurvey')
    }

    const handlePageChange = (sender: SurveyModel, options: any) => {
        handleProgress()
        const { currentPageNo } = sender
        if (currentPageNo === 1) {
            sender.startTimer()
        }
    }


    return (
        <Fragment>
            <Survey.Survey json={surveyJson} onComplete={handleSurveyCompletion} onCurrentPageChanged={handlePageChange} />
            <GuidedTourModal showModal={showModal} handleClick={handleProceedButton} children={<ThanksText />} styleClass='thank-you-modal' modalWindowButton='Proceed' buttonClass='exit-survey-button' />
        </Fragment>
    )
}
export default SurveyQuestions 