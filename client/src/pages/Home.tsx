import React, { Fragment, useEffect, useState } from 'react';
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent';
import Header from '../components/Header';
import LanguageSelection from '../components/LanguageSelection'
import ExitSurveyModal from '../components/modal/ExitSurveyModal'
import WarningMessage from '../components/WarningMessage'
import OptionsProvider from '../components/OptionsProvider'
import { useHistory } from 'react-router'

const Home = () => {

  return (
    <div className="container">
      <Header children={<Fragment />} />
      <HomeContent />
      <Footer />
    </div>
  )
}


export default Home;
