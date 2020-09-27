import React, { useState, Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import LSPage from '../content/LS.png'
import GSPage from '../content/GS.png'
import { useHistory } from 'react-router-dom';



const ChooseGamifiedVersion = () => {
    const history = useHistory()
    const { t } = useTranslation()

    return (
        <div className="container">
            <Header children={<Fragment />} />
            <div className="main-body">
                <h2>Choose your Survey version</h2>
                <p>Here the two versions of survey are provided. Please use the try it button to try the two versions of survey. </p>
                <p>Choose your preferred version.</p>
                <p><b> As soon as you choose, the survey starts.</b></p>
                <div className='choose-version-div'>
                    <div className='choose-version-blocks'>
                        <h3> First version</h3>
                        <img alt='TSPage' src={GSPage} />
                        <button className='choose-version-button' onClick={() => history.push('/GamifiedSurvey')}>Choose first version</button>
                    </div>
                    <div className='choose-version-blocks'>
                        <h3> Second version</h3>
                        <img alt='LSPage' src={LSPage} />
                        <button className='choose-version-button' onClick={() => history.push('/LeaderBoardSurvey')}>Choose second version</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default ChooseGamifiedVersion;
