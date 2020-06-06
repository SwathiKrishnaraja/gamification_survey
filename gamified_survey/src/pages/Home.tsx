import React from 'react';
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent';
import Header from '../components/Header';
import LanguageSelection from '../components/LanguageSelection'


const Home = () => {

  return (
    <div className="container">
      <Header children={<LanguageSelection />} />

      <HomeContent />

      <Footer />
    </div>
  );
};
export default Home;
