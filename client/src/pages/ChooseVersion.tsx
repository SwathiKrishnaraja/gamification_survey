import React, { useState, Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import TSPage from '../content/TS.png'
import GSPage from '../content/GS.png'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../reducer/reducer';

const ChooseVersion = () => {
    const history = useHistory()
    const { t } = useTranslation()

    // const surveyMode = useSelector((state: RootState) => state.entryPointReducer.mode) //uncomment this for prod
    const surveyMode = useSelector((state: RootState) => state.optionsProviderReducer)

    const getVersionBasedOnSurveyMode = (surveyMode: string) => {
        switch (surveyMode) {
            case 'TRADITIONAL_GAMIFIED_1':

                return {
                    firstVersion: <div className='choose-version-blocks'>
                        <h3> First version</h3>
                        <img alt='TSPage' src={TSPage} />
                        <button className='choose-version-button' onClick={() => history.push('/TraditionalSurvey')}>Choose first version</button>
                    </div>,
                    secondVersion: <div className='choose-version-blocks'>
                        <h3> Second version</h3>
                        <img alt='GSPage' src={GSPage} />
                        <button className='choose-version-button' onClick={() => history.push('/GamifiedSurvey')}>Choose second version</button>
                    </div>
                }

            case 'TRADITIONAL_GAMIFIED_2':
                return {
                    firstVersion: <div className='choose-version-blocks'>
                        <h3> First version</h3>
                        <img alt='GSPage' src={GSPage} />
                        <button className='choose-version-button' onClick={() => history.push('/GamifiedSurvey')}>Choose first version</button>
                    </div>,
                    secondVersion: <div className='choose-version-blocks'>
                        <h3> Second version</h3>
                        <img alt='TSPage' src={TSPage} />
                        <button className='choose-version-button' onClick={() => history.push('/TraditionalSurvey')}>Choose second version</button>
                    </div>
                }

            default:
                break;
        }
    }


    return (
        <div className="container">
            <Header children={<Fragment />} />
            <div className="main-body">
                <h2>Choose your Survey version</h2>
                <p>Here the two versions of survey are provided. Please use the try it button to try the two versions of survey. </p>
                <p>Choose your preferred version.</p>
                <p><b> As soon as you choose, the survey starts.</b></p>
                <div className='choose-version-div'>
                    {getVersionBasedOnSurveyMode(surveyMode)?.firstVersion}
                    {getVersionBasedOnSurveyMode(surveyMode)?.secondVersion}
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default ChooseVersion;
