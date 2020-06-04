import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomProgressBar from '../components/CustomProgressBar'
import { useTranslation } from 'react-i18next';

const TraditionalSurvey = () => {
  const { t } = useTranslation()
  return (
    <div className="container">
      <Header />
      <div className="main-body">
        <CustomProgressBar />
      </div>
      <button className="continue-button">{t('gamifiedSurvey.submit')}</button>

      <Footer />
    </div>
  );
};

export default TraditionalSurvey;
