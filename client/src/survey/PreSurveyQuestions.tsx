import React, { useState } from 'react'
import * as Survey from 'survey-react'
import JSON from './json/PreSurveyJSON'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../reducer/reducer'
import { SurveyModel } from 'survey-react'


/**
 * 
 * @param surveyMode string
 * @returns the navigation path that the user is redirected based on survey mode
 */
const getNavigationPath = (surveyMode: string): string => {
    switch (surveyMode) {
        case 'TRADITIONAL':
            return '/GuidedTourTraditional'
        case 'GAMIFIED':
            return '/GuidedTourGamified'
        case 'TRADITIONAL_GAMIFIED_1':
            return '/GuidedTourTraditional'
        case 'TRADITIONAL_GAMIFIED_2':
            return '/GuidedTourGamified'
        case 'GAMIFIED_WITH_BADGES':
            return '/GuidedTourGamified'
        case 'GAMIFIED_WITH_POINTS':
            return '/GuidedTourLeaderboard'
        case 'GAMIFIED_CHOICE_1':
            return '/GuidedTourGamified'
        case 'GAMIFIED_CHOICE_2':
            return '/GuidedTourGamified'
        default:
            return '/GuidedTourTraditional'
    }
}

const SurveyQuestions: React.FC = () => {
    // Testing-setup for thesis
    // const surveyMode: string = useSelector((state: RootState) => state.entryPointReducer.mode) //uncomment this for prod
    const surveyMode: string = useSelector((state: RootState) => state.optionsProviderReducer)

    // Testing-setup for thesis



    const history = useHistory()
    const path = getNavigationPath(surveyMode)
    const surveyJSON = JSON()

    const dispatch = useDispatch()

    const handleSurveyCompletion = (sender: SurveyModel, options: any) => {

        const { data: presurvey } = sender
        dispatch({ type: 'STORE_SURVEY', payload: { presurvey } })
        history.push(path)
    }
    return (
        <Survey.Survey json={surveyJSON} onComplete={handleSurveyCompletion} />
    )
}
export default SurveyQuestions 