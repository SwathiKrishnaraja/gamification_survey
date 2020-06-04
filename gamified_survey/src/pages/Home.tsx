import React from 'react';
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent';
import Header from '../components/Header';


const Home = () => {

  return (
    <div className="container">
      <Header />

      <HomeContent />
      <hr style={{ width: '98%' }} />
      <Footer />
    </div>
  );
};
export default Home;
