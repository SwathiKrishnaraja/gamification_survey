import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import { GenericSurveyQuestions, BadgesSurveyQuestions, LeaderboardSurveyQuestions, TraditionalGamifiedQuestions, GamifiedChoiceQuestions } from '../survey/PostSurveyQuestions'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducer/reducer';
import * as Survey from 'survey-react'
import { SurveyModel } from 'survey-react';
import submitSurveyData from '../api/submitSurveyData'
import { SurveyDataType } from '../types/types'
import { useHistory } from 'react-router';
import styled from 'styled-components'
import useLocalStorage from '../common/useLocalStorage'

const DebriefText = styled.p`
    font-size: medium;
    font-weight: 400;
`

const DebriefHeading = styled.h3`
    text-align:left;
    margin:5px;
`

const PostSurvey = () => {
    const surveyMode: string = useSelector((state: RootState) => state.entryPointReducer.mode)
    const history = useHistory()
    const [storeUserVisit, hasUserVisited] = useLocalStorage()

    const getSurveyQuestions = (surveyMode: string) => {
        switch (surveyMode) {
            case 'TRADITIONAL':
                return GenericSurveyQuestions
            case 'GAMIFIED':
                return BadgesSurveyQuestions
            case 'TRADITIONAL_GAMIFIED_1':
                return TraditionalGamifiedQuestions
            case 'TRADITIONAL_GAMIFIED_2':
                return TraditionalGamifiedQuestions
            case 'GAMIFIED_WITH_BADGES':
                return BadgesSurveyQuestions
            case 'GAMIFIED_WITH_POINTS':
                return LeaderboardSurveyQuestions
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
        storeUserVisit()
        history.push('/Thanks')



    }
    return (
        <div className="container">
            <Header children={<Fragment />} />
            <div className="main-body">
                <DebriefHeading>
                    Debriefing
                </DebriefHeading>
                <DebriefText>Thank you for taking your time to complete the survey. Our research is directed towards understanding your thoughts and perspectives about your experience with the survey version that you experienced. Participants of the survey were presented with different versions of the survey itself. </DebriefText>
                <DebriefText>Therefore, here, we ask you to answer a few debriefing questions to understand your experience with the survey. Your responses will be very valuable for our research and hence contribute to our analyses of the survey versions and suggest new lines of approach for customizing a survey.</DebriefText>
                <DebriefText><b>Please take a few minutes and provide us with your honest opinion.</b></DebriefText>
                <Survey.Survey json={getSurveyQuestions(surveyMode)()} onComplete={handleSurveyCompletion} />
            </div>
            <Footer />
        </div>
    );
};

export default PostSurvey;
