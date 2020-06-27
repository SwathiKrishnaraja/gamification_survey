import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomProgressBar from '../components/CustomProgressBar'
import { useTranslation } from 'react-i18next';
import { survey } from '../survey/TraditionalSurveyQuestions'
import ExitSurvey from '../components/ExitSurvey';

const TraditionalSurvey = () => {
  const { t } = useTranslation()
  return (
    <div className="container">
      <Header children={<ExitSurvey />} />
      <div className="main-body">
        <CustomProgressBar />
        {survey}
      </div>


      <Footer />
    </div>
  );
};

export default TraditionalSurvey;
