import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import TSPage from '../content/TSPage.png'
import GSPage from '../content/GSPage.png'
import ImprintModal from '../components/ImprintModal'
import { GamifiedSurveyMock, TraditionalSurveyMock } from '../components/MockSurveyPage'
import { useHistory } from 'react-router-dom';



const ChooseVersion = () => {
    const history = useHistory()
    const [showTraditional, setShowTraditional] = useState<boolean>(false)
    const [showGamified, setShowGamified] = useState<boolean>(false)
    const { t } = useTranslation()
    const handleTraditionalModal = () => {
        setShowTraditional(showTraditional ? false : true)
    }
    const handleGamifiedModal = () => {
        setShowGamified(showGamified ? false : true)
    }
    return (
        <div className="container">
            <Header />
            <div className="main-body">
                <h2>Choose your Survey version</h2>
                <p>Here the two versions of survey are provided. Please use the try it button to try the two versions of survey. </p>
                <p>Choose your preferred version.</p>
                <p><b> As soon as you choose, the survey starts.</b></p>
                <div className='choose-version-div'>
                    <div className='choose-version-blocks'>
                        <h3> Traditional Survey</h3>
                        <img alt='TSPage' src={TSPage} />
                        <button onClick={handleTraditionalModal}>Try it</button>
                        <ImprintModal showModal={showTraditional} handleClick={handleTraditionalModal} children={<TraditionalSurveyMock />} />
                        <button className='choose-version-button' onClick={() => history.push('/TraditionalSurvey')}>Choose Traditional</button>
                    </div>
                    <div className='choose-version-blocks'>
                        <h3> Gamified Survey</h3>
                        <img alt='GSPage' src={GSPage} />
                        <button onClick={handleGamifiedModal}>Try it</button>
                        <ImprintModal showModal={showGamified} handleClick={handleGamifiedModal} children={<GamifiedSurveyMock />} />
                        <button className='choose-version-button' onClick={() => history.push('/GamifiedSurvey')}>Choose Gamified</button>
                    </div>

                </div>
            </div>

            <hr style={{ width: '98%' }} />
            <Footer />
        </div>
    );
};

export default ChooseVersion;
