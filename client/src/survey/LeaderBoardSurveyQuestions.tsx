import React, { useState, Fragment, useEffect } from 'react'
import * as Survey from 'survey-react'
import json from './json/LeaderBoardSurveyJSON'
import { useHistory } from 'react-router-dom'
import GuidedTourModal from '../components/GuidedTour/GuidedTourModal'
import ThanksText from '../components/ThanksText'
import { SurveyModel } from 'survey-react'
import { useDispatch, useStore } from 'react-redux'

export const model = new Survey.Model(json);
type AnswerStore = {
    name: string,
    id: string,
    isAnswered: boolean
}

type Props = {
    progress: number,
    handleProgress: () => void
}

const SurveyQuestions = ({ progress, handleProgress }: Props) => {
    const history = useHistory()
    const [showModal, setShowModal] = useState(false)
    const [answerStore, setAnswerStore] = useState<Array<AnswerStore>>([{ name: '', id: '0', isAnswered: true }])
    const [count, setCount] = useState(0)
    const listOfLastPageQuestions = ['q25', 'q26']
    const dispatch = useDispatch()
    const [isTactician, setIsTactician] = useState(0)
    const store = useStore()
    /**
     * 
     * @param sender 
     * @param options
     * @event calls submitSurveyData to store the details to the database 
     * @event calls postSurveyMode to post the survey mode to postgres
     */


    const handleProceedButton = () => {
        history.push('/PostSurvey')
    }

    const handlePageChange = (sender: SurveyModel, options: any) => {
        handleProgress()
        const { newCurrentPage, oldCurrentPage } = options
        // stops the time of previous page and starts the new timer
        model.stopTimer()
        model.startTimer()
        const timeSpentOnPreviousPage = oldCurrentPage?.timeSpent
        if (timeSpentOnPreviousPage > 1) {
            setIsTactician(isTactician + 1)
        }

        // below is the check to provide badge if the user has reached the last page of the survey
        if (newCurrentPage.name === 'page8') {
            dispatch({ type: 'ADD_POINTS', payload: 100 })
        }
    }

    const handleSurveyAnswer = (sender: Survey.SurveyModel, options: any): any => {
        const { question } = options
        if (!(answerStore.find(element => element.id === question.id))) {
            setAnswerStore([
                ...answerStore,
                {
                    name: question.name,
                    id: question.id,
                    isAnswered: question.isAnswered
                }
            ])
            if (question.isAnswered) {
                setCount(count + 1)
            }
        }
    }

    // below check is to provide the badge if all the questions in the last page is answered
    useEffect(() => {
        if (isTactician === 8) {
            setIsTactician(0)
            dispatch({ type: 'ADD_POINTS', payload: 100 })
        }
    }, [answerStore, dispatch, isTactician, listOfLastPageQuestions])

    useEffect(() => {
        switch (count) {
            case 9:
                dispatch({ type: 'ADD_POINTS', payload: 100 })
                break
            case 17:
                dispatch({ type: 'ADD_POINTS', payload: 100 })
                break
            case 26:
                dispatch({ type: 'ADD_POINTS', payload: 100 })
                const currentStore = store.getState()
                if (Object.keys(currentStore).length === 9) {
                    dispatch({ type: 'ADD_POINTS', payload: 100 })
                }
                break
            default:
                console.log(count)
        }
        return () => {
        }
    }, [count, dispatch, store])

    const handleSurveyCompletion = () => {
        if (answerStore
            .filter(element => listOfLastPageQuestions.includes(element.name))
            .length === 2) {
            dispatch({ type: 'ADD_POINTS', payload: 100 })
        }
        dispatch({ type: 'ADD_POINTS', payload: 100 })
        history.push('/Dashboard')
    }



    return (
        <Fragment>
            <Survey.Survey model={model}
                onValueChanged={handleSurveyAnswer}
                onComplete={handleSurveyCompletion}
                onCurrentPageChanged={handlePageChange} />
            <GuidedTourModal showModal={showModal} handleClick={handleProceedButton} children={<ThanksText />} styleClass='thank-you-modal' modalWindowButton='Proceed' buttonClass='exit-survey-button' />
        </Fragment>
    )
}
export default SurveyQuestions 