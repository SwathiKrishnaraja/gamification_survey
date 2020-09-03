import React from 'react'
import * as Survey from 'survey-react'
import json from './json/PreSurveyJSON'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Mode, AddModeActionType } from '../reducer/entryPointReducer'
import { Dispatch } from 'redux'
import { RootState } from '../reducer/reducer'


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
        case 'TRADITIONAL_GAMIFIED':
            return '/GuidedTourTraditional'
        default:
            return '/GuidedTourTraditional'
    }
}

const SurveyQuestions: React.FC = () => {
    const surveyMode: string = useSelector((state: RootState) => state.entryPointReducer.mode)
    const dispatch: Dispatch<AddModeActionType> = useDispatch()
    const history = useHistory()
    const path = getNavigationPath(surveyMode)


    return (
        <Survey.Survey json={json} onComplete={() => history.push(path)} />
    )
}
export default SurveyQuestions 