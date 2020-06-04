import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomProgressBar from '../components/CustomProgressBar';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PreSurvey = () => {
  const history = useHistory()
  const { t } = useTranslation()
  return (
    <div className="container">
      <Header />
      <div className="main-body">
        <h2>Pre-Survey Questionnaire</h2>
        <CustomProgressBar />
      </div>
      <button className="continue-button" onClick={() => history.push('/ChooseVersion')}>{t('homeContent.button')}</button>

      <Footer />
    </div>
  );
};

export default PreSurvey;
