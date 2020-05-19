import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomProgressBar from '../components/CustomProgressBar';
import { useHistory } from 'react-router-dom';

const PreSurvey = () => {
  const history = useHistory()
  return (
    <div className="container">
      <Header />
      <div className="main-body">
        <h2>Pre-Survey Questionnaire</h2>
        <CustomProgressBar />
      </div>

      <button className="continue-button" onClick={() => history.push('/TraditionalSurvey')}>Continue</button>
      <hr style={{ width: '98%' }} />
      <Footer />
    </div>
  );
};

export default PreSurvey;
