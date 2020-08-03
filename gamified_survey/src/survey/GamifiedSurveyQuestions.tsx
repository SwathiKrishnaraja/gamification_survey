import React, { useState, useEffect } from 'react'
import * as Survey from 'survey-react'
import { useHistory } from 'react-router-dom'
import badgeProvider from '../BadgeRules/BadgeRules';
import { useDispatch, useSelector, useStore, shallowEqual } from 'react-redux';
import json from './GamifiedSurveyJSON'

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

const SurveyQuestions = ({ handleProgress }: Props) => {
    const dispatch = useDispatch()
    const provideBadge = badgeProvider(dispatch)
    const store = useStore()
    const [isTactician, setIsTactician] = useState(0)

    const history = useHistory()
    const [answerStore, setAnswerStore] = useState<Array<AnswerStore>>([{ name: '', id: '0', isAnswered: true }])
    const [count, setCount] = useState(0)
    const listOfLastPageQuestions = ['q25', 'q26']

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
    const handlePageChange = (sender: Survey.SurveyModel, options: any): any => {
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
            provideBadge.badge.fastAchiever()
        }
    }

    // below check is to provide the badge if all the questions in the last page is answered
    useEffect(() => {
        if (answerStore
            .filter(element => listOfLastPageQuestions.includes(element.name))
            .length === 2) {
            provideBadge.badge.masterOfInterview()
        }
        if (isTactician === 8) {
            setIsTactician(0)
            provideBadge.badge.tactician()
        }
    }, [answerStore, isTactician, listOfLastPageQuestions, provideBadge.badge])




    useEffect(() => {
        switch (count) {
            case 9:
                provideBadge.badge.thirtyThreeBadge()
                break
            case 17:
                provideBadge.badge.sixtySixBadge()
                break
            case 26:
                provideBadge.badge.fullPoints()
                const currentStore = store.getState()
                if (Object.keys(currentStore).length === 9) {
                    provideBadge.badge.medalCollector()
                }
                break
            default:
                console.log(count)
        }
        return () => {
        }
    }, [count, provideBadge.badge, store])

    const handleSurveyCompletion = () => {
        provideBadge.badge.winner()
        history.push('/Dashboard')
    }

    return (
        <Survey.Survey model={model}
            onValueChanged={handleSurveyAnswer}
            onComplete={handleSurveyCompletion}
            onCurrentPageChanged={handlePageChange}
        />
    )
}
export default SurveyQuestions 