import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Survey from '../survey/PreSurveyQuestions'
const PreSurvey = () => {
  const history = useHistory()
  const { t } = useTranslation()
  return (
    <div className="container">
      <Header children={<Fragment />} />
      <div className="main-body">
        <h3>Please answer the following questions about yourself before entering the survey</h3>
        <Survey />
      </div>

      <Footer />
    </div>
  );
};

export default PreSurvey;
