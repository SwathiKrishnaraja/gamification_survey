import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import CustomProgressBar from '../components/CustomProgressBar'
import First from '../badges/First.png'
import Second from '../badges/Second.png'
import Third from '../badges/Third.png'
import Fourth from '../badges/Fourth.png'
import Fifth from '../badges/Fifth.png'
import Sixth from '../badges/Sixth.png'
import Seventh from '../badges/Seventh.png'
import Eight from '../badges/Eight.png'
import Ninth from '../badges/Ninth.png'
import Tenth from '../badges/Tenth.png'


const Badges = () => {
    const { t } = useTranslation()
    return (
        <Fragment>
            <div className='Badges-div-mock'>
                <h2>{t('badges.title')}</h2>
                <img alt='letsGo' src={First} />
                <img alt='letsGo' src={Second} />
                <img alt='letsGo' src={Third} />
                <img alt='letsGo' src={Fourth} />
                <img alt='letsGo' src={Fifth} />
                <img alt='letsGo' src={Sixth} />
                <img alt='letsGo' src={Seventh} />
                <img alt='letsGo' src={Eight} />
                <img alt='letsGo' src={Ninth} />
                <img alt='letsGo' src={Tenth} />
            </div>
            <hr style={{ width: '100%' }} />
        </Fragment>
    )
}


export const GamifiedSurveyMock = () => {
    const { t } = useTranslation()
    return (
        <div className="mock-container">
            <Header />
            <div className="main-body">
                <Badges />
                <CustomProgressBar />
            </div>
        </div>
    );
};


export const TraditionalSurveyMock = () => {
    const { t } = useTranslation()
    return (
        <div className="mock-container">
            <Header />
            <div className="main-body">
                <CustomProgressBar />
            </div>

        </div>
    );
};

