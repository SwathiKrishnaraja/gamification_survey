import React from 'react';
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent';
import Header from '../components/Header';


const Home = () => {

  return (
    <div className="container">
      <Header />

      <HomeContent />

      <Footer />
    </div>
  );
};
export default Home;
