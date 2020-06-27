import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Badges from '../components/Badges'
import { useTranslation } from 'react-i18next';
import CustomProgressBar from '../components/CustomProgressBar'
import { survey } from '../survey/TraditionalSurveyQuestions'
import ExitSurvey from '../components/ExitSurvey';


const GamifiedSurvey = () => {
  const { t } = useTranslation()
  return (
    <div className="container">
      <Header children={<ExitSurvey />} />
      <div className="main-body">
        <Badges />
        <CustomProgressBar />
        {survey}
      </div>

      <Footer />
    </div>
  );
};

export default GamifiedSurvey;
