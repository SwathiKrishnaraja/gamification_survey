import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomProgressBar from '../components/CustomProgressBar'
import { useTranslation } from 'react-i18next';
import { survey } from '../survey/MockSurveyQuestions'
import Joyride from 'react-joyride';
import { Button } from 'react-bootstrap';

const GuidedTourTraditional = () => {
    const steps = [
        {
            target: '.continue-button',
            content: "Let's start the tour",
        },
        {
            target: '.progress-bar-div',
            content: 'Your progress is shown here.'
        },
        {
            target: '.sv_row:nth-child(1)',
            content: 'Few questions are in presented in the radiogroup format. Please choose one option'
        },
        {
            target: '.sv_row:nth-child(2)',
            content: 'Few questions are presented in matrix format. Please choose one option.'
        },
        {
            target: '.sv_row:nth-child(3)',
            content: 'Few questions are presented with checkboxes. Please feel free to choose multiple options if necessary.'
        },
        {
            target: '.sv_row:nth-child(4)',
            content: 'Few questions are presented with text area. Please provide your input in the provided text area.'
        },
        {
            target: '.sv_complete_btn',
            content: 'Once all the questions in the survey is completed, kindly submit using the submit button.'
        }
    ]
    const { t } = useTranslation()
    return (
        <div className="container">
            <Joyride
                steps={steps}
                showProgress={true}
                showSkipButton={true}
                continuous={true} />
            <Header children={<Fragment />} />
            <div className="main-body">
                <h2>Here is a guided tour for the first version of the survey</h2>
                <button className='continue-button'>Start Tour</button>
                <CustomProgressBar />
                {survey}
            </div>
            <Footer />
        </div >
    );
};

export default GuidedTourTraditional;
