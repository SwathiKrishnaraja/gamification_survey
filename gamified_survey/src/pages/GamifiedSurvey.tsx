import React, { Fragment, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Badges from '../components/Badges'
import { useTranslation } from 'react-i18next';
import CustomProgressBar from '../components/CustomProgressBar'
import SurveyQuestions from '../survey/GamifiedSurveyQuestions'
import ExitSurvey from '../components/ExitSurvey';
import badgeProvider from '../BadgeRules/BadgeRules';
import { useDispatch } from 'react-redux';
import { model } from '../survey/GamifiedSurveyQuestions'


const GamifiedSurvey = () => {
  const dispatch = useDispatch()
  const provideBadge = badgeProvider(dispatch)

  useEffect(() => {
    provideBadge.badge.letsGoBadge()
  })

  console.log(model.progressText)




  const { t } = useTranslation()
  return (
    <div className="container">
      <Header children={<ExitSurvey />} />
      <div className="main-body">
        <Badges />
        <CustomProgressBar />
        <SurveyQuestions />
      </div>

      <Footer />
    </div>
  );
};

export default GamifiedSurvey;
