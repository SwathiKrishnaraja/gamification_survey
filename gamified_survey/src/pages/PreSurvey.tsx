import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomProgressBar from '../components/CustomProgressBar';

const PreSurvey = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-body">
        <h2>Pre-Survey Questionnaire</h2>
        <CustomProgressBar />
      </div>
      {/* <Link href="/TraditionalSurvey" passHref>
        <button className="continue-button">Continue</button>
      </Link> */}
      <hr style={{ width: '98%' }} />
      <Footer />
    </div>
  );
};

export default PreSurvey;
