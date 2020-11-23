import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import { GenericSurveyQuestions, GamifiedSurveyQuestions, TraditionalGamifiedQuestions, GamifiedChoiceQuestions } from '../survey/PostSurveyQuestions'
import { useSelector } from 'react-redux';
import { RootState } from '../reducer/reducer';
import * as Survey from 'survey-react'

const PostSurvey = () => {
    const surveyMode: string = useSelector((state: RootState) => state.entryPointReducer.mode)

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
    return (
        <div className="container">
            <Header children={<Fragment />} />
            <div className="main-body">
                <Survey.Survey json={getSurveyQuestions(surveyMode)()} />
            </div>
            <Footer />
        </div>
    );
};

export default PostSurvey;
