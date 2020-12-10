import React, { Fragment, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header';
import styled from 'styled-components'
import { SurveyDataType } from '../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../reducer/reducer';
import submitSurveyData from '../api/submitSurveyData';


const Thanks = styled.p`
    font-size:20px;
    font-weight:800;
    text-align: center;
`


const ThankYouPage = () => {
    const surveyResult: SurveyDataType = useSelector((state: RootState) => state.storeSurveyReducer)


    useEffect(() => {
        submitSurveyData(surveyResult)
    }, [])

    return (
        <div className="container">
            <Header children={<Fragment />} />
            <div className='main-body'>
                <Thanks>Thank you for completing the survey</Thanks>
            </div>
            <Footer />
        </div>
    )
}


export default ThankYouPage
