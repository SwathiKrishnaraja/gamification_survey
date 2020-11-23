import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent';
import Header from '../components/Header';
import LanguageSelection from '../components/LanguageSelection'
import ExitSurveyModal from '../components/modal/ExitSurveyModal'
import styled from 'styled-components';

const Home = () => {
  const [notifyForSmallScreen, setNotifyForSmallScreen] = useState<boolean>(false)
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    if ((window.screen.availHeight < 700) || window.screen.availWidth < 1000) {
      setNotifyForSmallScreen(true)
    }
  })

  const handleConfirmationButton = () => {
    setShowModal(showModal ? false : true)
  }


  const Message = styled.h4`
  font-size:medium;
  font-weight:500;
  `


  return (
    <div className="container">
      <Header children={<LanguageSelection />} />
      {notifyForSmallScreen
        ? <ExitSurveyModal showModal={showModal} handleConfirmationButton={handleConfirmationButton} children={<Message>Please use a bigger screen for better experience.</Message>} styleClass='exit-survey-modal' modalWindowButton='OK' buttonClass='notify-small-screen' />
        : null}
      <HomeContent />
      <Footer />
    </div>
  )
}


export default Home;
