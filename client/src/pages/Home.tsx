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

  // Testing-setup for thesis
  const [modeSelected, setModeSelected] = useState(false)
  const handleModeSelected = () => {
    setModeSelected(modeSelected ? false : true)
  }
  // Testing-setup for thesis


  return (
    <div className="container">
      <Header children={<Fragment />} />
      {/* Testing-setup for thesis */}
      {modeSelected ? <HomeContent /> : <OptionsProvider handleModeSelected={handleModeSelected} />}
      {/* Testing-setup for thesis */}
      <Footer />
    </div>
  )
}


export default Home;
