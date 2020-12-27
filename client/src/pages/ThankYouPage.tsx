import React, { Fragment, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header';
import styled from 'styled-components'
import { SurveyDataType } from '../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../reducer/reducer';
import submitSurveyData from '../api/submitSurveyData'
import MailTo from '../components/MailTo'
import udsLogo from '../content/sic.png'


const Thanks = styled.p`
    font-weight:400;
    text-align: left;
`
const Greeting = styled.p`
    font-weight:400;
    text-align: left;
    margin-bottom: -10px;
`
const Persona = styled.p`
    font-weight:400;
    text-align: left;
    margin-bottom: -10px;
    font-style: italic;
`

const MainBody = styled.div`
  height: 80vh;
  margin: auto;
  width: 88%;
  overflow-y: hidden;
  overflow-x: hidden;
  font-size: medium;
`

const Logo = styled.div`
    margin-top: 25px;
    display: flex;

`
const LogoImg = styled.img`
  height: 50px;

`

const ThankYouPage = () => {
    const surveyResult: SurveyDataType = useSelector((state: RootState) => state.storeSurveyReducer)


    useEffect(() => {
        submitSurveyData(surveyResult)
    }, [])

    return (
        <div className="container">
            <Header children={<Fragment />} />
            <MainBody>
                <Thanks> Your feedback was submitted successfully. </Thanks>
                <Thanks> We truly value the information you have provided.</Thanks>
                <Thanks>If you have any comments on the survey or the project, or if you would like to know
                more about the project and the results of the project, please send a message to
                <MailTo email="s8swkris@stud.uni-saarland.de">
                        s8swkris@stud.uni-saarland.de
                    </MailTo>
                .</Thanks>
                <Thanks>Once again, we are extremely grateful to you for contributing your valuable time, your
                honest information, and your thoughtful suggestions.</Thanks>
                <Greeting>Many thanks,</Greeting>
                <Persona>Swathi Krishnaraja </Persona>
                <Persona>Saarland Informatics Campus</Persona>
                <Logo>
                    <LogoImg alt='uds' src={udsLogo} />
                </Logo>
            </MainBody>
            <Footer />
        </div >
    )
}


export default ThankYouPage
