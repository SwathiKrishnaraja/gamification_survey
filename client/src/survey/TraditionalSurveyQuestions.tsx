import React, { useState, Fragment } from 'react'
import * as Survey from 'survey-react'
import json from './json/TraditionalSurveyJSON'
import { useHistory } from 'react-router-dom'
import GuidedTourModal from '../components/GuidedTour/GuidedTourModal'
import ThanksText from '../components/ThanksText'
import { SurveyModel } from 'survey-react'
import getCharacterCount from '../helpers/getCharacterCount'
import filterOpenQuestions from '../helpers/filterOpenQuestions'
import submitSurveyData from '../api/submitSurveyData'
import getAverageTime from '../helpers/getAverageTime'
import { useSelector } from 'react-redux'
import { RootState } from '../reducer/reducer'


type Props = {
    progress: number,
    handleProgress: () => void
}

const SurveyQuestions = ({ handleProgress }: Props) => {
    const history = useHistory()
    const [showModal, setShowModal] = useState(false)
    const survey_mode = useSelector((state:RootState) => state.entryPointReducer.mode)

    /**
     * 
     * @param sender 
     * @param options
     * @event calls submitSurveyData to store the details to the database 
     */

    const handleSurveyCompletion = (sender: SurveyModel, options: any) => {
        let listOfSurveyQuestions = []
        setShowModal(showModal ? false : true)
        try {
            const { timeSpent:time_taken, data } = sender
            listOfSurveyQuestions.push(data)
            const average_time = Math.round(getAverageTime(time_taken))
            const char_count = getCharacterCount(filterOpenQuestions(listOfSurveyQuestions)) 
            const result =  data
            submitSurveyData({survey_mode,char_count,time_taken,average_time, result})
            
        } catch (error) {
            throw(error)
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
            <Survey.Survey json={json} onComplete={handleSurveyCompletion} onCurrentPageChanged={handlePageChange} />
            <GuidedTourModal showModal={showModal} handleClick={handleProceedButton} children={<ThanksText />} styleClass='thank-you-modal' modalWindowButton='Proceed' buttonClass='exit-survey-button' />
        </Fragment>
    )
}
export default SurveyQuestions 