import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GamifiedSurvey = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-body">
        <h2>Gamified Survey</h2>
      </div>
      <button className="continue-button">Submit</button>
      <hr style={{ width: '98%' }} />
      <Footer />
    </div>
  );
};

export default GamifiedSurvey;
