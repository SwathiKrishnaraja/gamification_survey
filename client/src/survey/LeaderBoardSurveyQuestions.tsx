import React, { useState, Fragment, useEffect } from 'react'
import * as Survey from 'survey-react'
import LeaderboardSurveyJson from './json/LeaderBoardSurveyJSON'
import { useHistory } from 'react-router-dom'
import GuidedTourModal from '../components/GuidedTour/GuidedTourModal'
import ThanksText from '../components/ThanksText'
import { SurveyModel } from 'survey-react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import getCharacterCount from '../helpers/getCharacterCount'
import filterOpenQuestions from '../helpers/filterOpenQuestions'
import submitSurveyData from '../api/submitSurveyData'
import postSurveyMode from '../api/postSurveyMode'
import getAverageTime from '../helpers/getAverageTime'
import { RootState } from '../reducer/reducer';

type AnswerStore = {
    name: string,
    id: string,
    isAnswered: boolean
}

type Props = {
    progress: number,
    handleProgress: () => void
    handleMascot: () => void
}

const SurveyQuestions = ({ progress, handleProgress, handleMascot }: Props) => {
    const surveyJson = LeaderboardSurveyJson()
    const history = useHistory()
    const [showModal, setShowModal] = useState(false)
    const [answerStore, setAnswerStore] = useState<Array<AnswerStore>>([{ name: '', id: '0', isAnswered: true }])
    const [count, setCount] = useState(0)
    const listOfLastPageQuestions = ['q28', 'q29', 'q30']
    const dispatch = useDispatch()
    const [isTactician, setIsTactician] = useState(0)
    const store = useStore()
    const survey_mode = useSelector((state: RootState) => state.entryPointReducer.mode)
    const points = useSelector((state: RootState) => state.addPointsReducer)


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
        sender.stopTimer()
        sender.startTimer()
        const timeSpentOnPreviousPage = oldCurrentPage?.timeSpent
        if (timeSpentOnPreviousPage > 120000) {
            setIsTactician(isTactician + 1)
        }

        // below is the check to provide badge if the user has reached the last page of the survey
        if (newCurrentPage.name === 'page8') {
            dispatch({ type: 'ADD_POINTS', payload: 100 })
        }
        if (sender.currentPageNo === 4) {
            handleMascot()
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

        switch (count) {
            case 10:
                dispatch({ type: 'ADD_POINTS', payload: 100 })
                break
            case 20:
                dispatch({ type: 'ADD_POINTS', payload: 100 })
                break
            case 30:
                dispatch({ type: 'ADD_POINTS', payload: 100 })
                const currentStore = store.getState()
                if (Object.keys(currentStore).length === 9) {
                    dispatch({ type: 'ADD_POINTS', payload: 100 })
                }
                break
            default:
                console.log(count)
        }
    }

    // below check is to provide the badge if all the questions in the last page is answered
    useEffect(() => {
        if (isTactician === 8) {
            setIsTactician(0)
            dispatch({ type: 'ADD_POINTS', payload: 100 })
        }
    }, [answerStore, dispatch, isTactician, listOfLastPageQuestions])


    const handleSurveyCompletion = (sender: SurveyModel, options: any) => {
        if (answerStore
            .filter(element => listOfLastPageQuestions.includes(element.name))
            .length === 3) {
            dispatch({ type: 'ADD_POINTS', payload: 100 })
        }
        dispatch({ type: 'ADD_POINTS', payload: 100 })


        let listOfSurveyQuestions = []
        try {
            const { timeSpent: time_taken, data } = sender
            listOfSurveyQuestions.push(data)
            const average_time = Math.round(getAverageTime(time_taken))
            const char_count = getCharacterCount(filterOpenQuestions(listOfSurveyQuestions))
            const result = data
            submitSurveyData({ survey_mode, char_count, time_taken, average_time, result, points })
            postSurveyMode({ mode: survey_mode })

        } catch (error) {
            throw (error)
        }


        history.push('/Dashboard')
    }



    return (
        <Fragment>
            <Survey.Survey json={surveyJson}
                onValueChanged={handleSurveyAnswer}
                onComplete={handleSurveyCompletion}
                onCurrentPageChanged={handlePageChange} />
            <GuidedTourModal showModal={showModal} handleClick={handleProceedButton} children={<ThanksText />} styleClass='thank-you-modal' modalWindowButton='Proceed' buttonClass='exit-survey-button' />
        </Fragment>
    )
}
export default SurveyQuestions 