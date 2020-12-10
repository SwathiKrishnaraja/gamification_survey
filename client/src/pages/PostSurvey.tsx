import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import { GenericSurveyQuestions, GamifiedSurveyQuestions, TraditionalGamifiedQuestions, GamifiedChoiceQuestions } from '../survey/PostSurveyQuestions'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducer/reducer';
import * as Survey from 'survey-react'
import { SurveyModel } from 'survey-react';
import submitSurveyData from '../api/submitSurveyData'
import { SurveyDataType } from '../types/types'
import { useHistory } from 'react-router';

const PostSurvey = () => {
    const surveyMode: string = useSelector((state: RootState) => state.entryPointReducer.mode)
    const history = useHistory()

    const getSurveyQuestions = (surveyMode: string) => {
        switch (surveyMode) {
            case 'TRADITIONAL':
                return GenericSurveyQuestions
            case 'GAMIFIED':
                return GamifiedSurveyQuestions
            case 'TRADITIONAL_GAMIFIED_1':
                return TraditionalGamifiedQuestions
            case 'TRADITIONAL_GAMIFIED_2':
                return TraditionalGamifiedQuestions
            case 'GAMIFIED_WITH_BADGES':
                return GamifiedSurveyQuestions
            case 'GAMIFIED_WITH_POINTS':
                return GamifiedSurveyQuestions
            case 'GAMIFIED_CHOICE_1':
                return GamifiedChoiceQuestions
            case 'GAMIFIED_CHOICE_2':
                return GamifiedChoiceQuestions
            default:
                return GenericSurveyQuestions
        }
    }

    const { t } = useTranslation()
    const dispatch = useDispatch()

    const handleSurveyCompletion = (sender: SurveyModel, options: any) => {
        const { data: postsurvey } = sender
        dispatch({ type: 'STORE_SURVEY', payload: { postsurvey } })
        history.push('/Thanks')

    }
    return (
        <div className="container">
            <Header children={<Fragment />} />
            <div className="main-body">
                <Survey.Survey json={getSurveyQuestions(surveyMode)()} onComplete={handleSurveyCompletion} />
            </div>
            <Footer />
        </div>
    );
};

export default PostSurvey;
