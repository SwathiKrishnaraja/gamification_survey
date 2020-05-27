import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Badges from '../components/Badges'
import { useTranslation } from 'react-i18next';
import CustomProgressBar from '../components/CustomProgressBar'

const GamifiedSurvey = () => {
  const { t } = useTranslation()
  return (
    <div className="container">
      <Header />
      <div className="main-body">
        <Badges />
        <CustomProgressBar />
      </div>
      <button className="continue-button">{t('gamifiedSurvey.submit')}</button>
      <hr style={{ width: '98%' }} />
      <Footer />
    </div>
  );
};

export default GamifiedSurvey;
