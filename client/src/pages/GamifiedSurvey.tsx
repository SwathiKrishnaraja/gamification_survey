import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Badges from '../components/Badges'
import { useTranslation } from 'react-i18next';
import CustomProgressBar from '../components/CustomProgressBar'
import SurveyQuestions from '../survey/GamifiedSurveyQuestions'
import ExitSurvey from '../components/ExitSurvey';
import badgeProvider from '../BadgeRules/BadgeRules';
import { useDispatch } from 'react-redux';
import Mascot from '../components/Mascot'

const GamifiedSurvey = () => {
  const dispatch = useDispatch()
  const provideBadge = useMemo(() => badgeProvider(dispatch), [dispatch])
  const [progress, setProgress] = useState<number>(0)
  const [showMascot, setShowMascot] = useState<boolean>(false)

  const handleMascot = () => {
    setShowMascot(showMascot ? false : true)
  }

  const provideBadgeForMascot = () => {
    provideBadge.badge.findTheMascot()
  }


  const handleProgress = () => {
    if (progress === 99) {
      setProgress(100)
    } else {
      setProgress(progress + 10)
    }
  }

  useEffect(() => {
    provideBadge.badge.letsGoBadge()
  }, [provideBadge.badge])

  const { t } = useTranslation()
  return (
    <div className="container">
      <Header children={<ExitSurvey />} />
      <div className="main-body">
        <Badges />
        <CustomProgressBar progress={progress} />
        <SurveyQuestions progress={progress} handleProgress={handleProgress} showMascot={showMascot} handleMascot={handleMascot} />
        {showMascot ? <Mascot handleMascot={handleMascot} provideBadgeForMascot={provideBadgeForMascot} /> : null}
      </div>

      <Footer />
    </div>
  );
};

export default GamifiedSurvey;
