import React, { useState, Fragment } from 'react'
import * as Survey from 'survey-react'
import json from './json/TraditionalSurveyJSON'
import { useHistory } from 'react-router-dom'
import GuidedTourModal from '../components/GuidedTour/GuidedTourModal'
import ThanksText from '../components/ThanksText'
import { SurveyModel } from 'survey-react'


type Props = {
    progress: number,
    handleProgress: () => void
}

const SurveyQuestions = ({ handleProgress }: Props) => {
    const history = useHistory()
    const [showModal, setShowModal] = useState(false)


    const handleSurveyCompletion = (sender: SurveyModel, options: any) => {
        const { timeSpent } = sender
        setShowModal(showModal ? false : true)
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