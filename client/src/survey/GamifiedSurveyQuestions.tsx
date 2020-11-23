import React, { useState, useEffect, useMemo } from 'react'
import * as Survey from 'survey-react'
import { useHistory } from 'react-router-dom'
import badgeProvider from '../BadgeRules/BadgeRules';
import { useDispatch, useSelector, useStore } from 'react-redux';
import GamifiedSurveyJSON from './json/GamifiedSurveyJSON'
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
    showMascot: boolean,
    handleProgress: () => void
    handleMascot: () => void
}

const SurveyQuestions = ({ handleProgress, handleMascot, showMascot }: Props) => {
    const surveyJson = GamifiedSurveyJSON()
    const dispatch = useDispatch()
    const provideBadge = badgeProvider(dispatch)
    const store = useStore()
    const [isTactician, setIsTactician] = useState(0)
    const survey_mode = useSelector((state: RootState) => state.entryPointReducer.mode)
    const achievedBadges = useSelector((state: RootState) => state.addBadgeReducer)

    const history = useHistory()
    const [answerStore, setAnswerStore] = useState<Array<AnswerStore>>([{ name: '', id: '0', isAnswered: true }])
    const [count, setCount] = useState(0)
    const listOfLastPageQuestions = ['q28', 'q29', 'q30']

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
                provideBadge.badge.thirtyThreeBadge()
                break
            case 20:
                provideBadge.badge.sixtySixBadge()
                break
            case 30:
                provideBadge.badge.fullPoints()
                const currentStore = store.getState()
                if (Object.keys(currentStore).length === 9) {
                    provideBadge.badge.medalCollector()
                }
                break
            default:
                console.log(count)
        }
    }

    const handlePageChange = (sender: Survey.SurveyModel, options: any): any => {
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
            provideBadge.badge.fastAchiever()
        }

        if (sender.currentPageNo === 4) {
            handleMascot()
        }

        if (sender.currentPageNo === 5 && showMascot) {
            handleMascot()
        }
    }


    const handleSurveyCompletion = (sender: Survey.SurveyModel, options: any) => {
        if (answerStore
            .filter(element => listOfLastPageQuestions.includes(element.name))
            .length === 3) {
            provideBadge.badge.masterOfInterview()
        }
        if (isTactician === 8) {
            setIsTactician(0)
            provideBadge.badge.tactician()
        }
        // provide the winner badge
        provideBadge.badge.winner()

        const badges = achievedBadges.length

        let listOfSurveyQuestions = []
        try {
            const { timeSpent: time_taken, data } = sender
            listOfSurveyQuestions.push(data)
            const average_time = Math.round(getAverageTime(time_taken))
            const char_count = getCharacterCount(filterOpenQuestions(listOfSurveyQuestions))
            const result = data
            submitSurveyData({ survey_mode, char_count, time_taken, average_time, result, badges })
            postSurveyMode({ mode: survey_mode })

        } catch (error) {
            throw (error)
        }
        history.push('/Dashboard')
    }

    return (
        <Survey.Survey json={surveyJson}
            onValueChanged={handleSurveyAnswer}
            onComplete={handleSurveyCompletion}
            onCurrentPageChanged={handlePageChange}
        />
    )
}
export default SurveyQuestions 