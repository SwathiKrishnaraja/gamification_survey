import React, { useState, useEffect } from 'react'
import * as Survey from 'survey-react'
import { useHistory } from 'react-router-dom'
import badgeProvider from '../BadgeRules/BadgeRules';
import { useDispatch } from 'react-redux';
import json from './GamifiedSurveyJSON'

export const model = new Survey.Model(json);
type AnswerStore = {
    id: string,
    isAnswered: boolean
}
const SurveyQuestions = () => {
    const dispatch = useDispatch()
    const provideBadge = badgeProvider(dispatch)

    const history = useHistory()
    const [answerStore, setAnswerStore] = useState<Array<AnswerStore>>([{ id: '0', isAnswered: true }])
    const [count, setCount] = useState(0)

    const handleSurveyAnswer = (sender: Survey.SurveyModel, options: any): any => {
        const { question } = options
        if (!(answerStore.find(element => element.id === question.id))) {
            setAnswerStore([
                ...answerStore,
                {
                    id: question.id,
                    isAnswered: question.isAnswered
                }
            ])
            if (question.isAnswered) {
                setCount(count + 1)
            }
        }
    }
    useEffect(() => {
        switch (count) {
            case 9:
                provideBadge.badge.thirtyThreeBadge()
                break
            case 17:
                provideBadge.badge.sixtySixBadge()
                break
            default:
                console.log(count)
        }
    })


    return (
        <Survey.Survey model={model} onValueChanged={handleSurveyAnswer} onComplete={() => history.push('/Dashboard')} />
    )
}
export default SurveyQuestions 