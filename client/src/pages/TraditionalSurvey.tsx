import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomProgressBar from '../components/CustomProgressBar'
import { useTranslation } from 'react-i18next';
import SurveyQuestions from '../survey/TraditionalSurveyQuestions'
import ExitSurvey from '../components/ExitSurvey';

const TraditionalSurvey = () => {
  const { t } = useTranslation()
  const [progress, setProgress] = useState<number>(0)

  const handleProgress = () => {
    if (progress === 99) {
      setProgress(100)
    } else {
      setProgress(progress + 10)
    }
  }
  return (
    <div className="container">
      <Header children={<ExitSurvey />} />
      <div className="main-body">
        <CustomProgressBar progress={progress} />
        <SurveyQuestions progress={progress} handleProgress={handleProgress} />
      </div>


      <Footer />
    </div>
  );
};

export default TraditionalSurvey;
