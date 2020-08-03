import React, { Fragment, useEffect, useState, useMemo, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Badges from '../components/Badges'
import { useTranslation } from 'react-i18next';
import CustomProgressBar from '../components/CustomProgressBar'
import SurveyQuestions from '../survey/GamifiedSurveyQuestions'
import ExitSurvey from '../components/ExitSurvey';
import badgeProvider from '../BadgeRules/BadgeRules';
import { useDispatch } from 'react-redux';

const GamifiedSurvey = () => {
  const dispatch = useDispatch()
  const provideBadge = badgeProvider(dispatch)
  const [progress, setProgress] = useState<number>(0)

  const handleProgress = () => {
    if (progress === 88) {
      setProgress(100)
    } else {
      setProgress(progress + 11)
    }
  }


  useEffect(() => {
    provideBadge.badge.letsGoBadge()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { t } = useTranslation()
  return (
    <div className="container">
      <Header children={<ExitSurvey />} />
      <div className="main-body">
        <Badges />
        <CustomProgressBar progress={progress} />
        <SurveyQuestions progress={progress} handleProgress={handleProgress} />
      </div>

      <Footer />
    </div>
  );
};

export default GamifiedSurvey;
