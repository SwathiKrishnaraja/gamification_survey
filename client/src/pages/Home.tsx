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
  const [notifyForSmallScreen, setNotifyForSmallScreen] = useState<boolean>(false)
  const [showModal, setShowModal] = useState(true)

  const history = useHistory()
  let currentPathname: string
  let currentSearch: string

  // Testing-setup for thesis
  const [modeSelected, setModeSelected] = useState(false)
  const handleModeSelected = () => {
    setModeSelected(modeSelected ? false : true)
  }
  // Testing-setup for thesis

  useEffect(() => {
    if ((window.screen.availHeight < 700) || window.screen.availWidth < 1000) {
      setNotifyForSmallScreen(true)
    }
  })

  useEffect(() => {
    history.listen((newLocation: { pathname: string; search: string; }, action: string) => {
      if (action === "PUSH") {
        if (
          newLocation.pathname !== currentPathname ||
          newLocation.search !== currentSearch
        ) {
          // Save new location
          currentPathname = newLocation.pathname;
          currentSearch = newLocation.search;

          // Clone location object and push it to history
          history.push({
            pathname: newLocation.pathname,
            search: newLocation.search
          })
        }
      } else {
        // Send user back if they try to navigate back
        history.go(1)
      }
    })
  })

  const handleConfirmationButton = () => {
    setShowModal(showModal ? false : true)
    window.location.reload()
  }

  return (
    <div className="container">
      <Header children={<Fragment />} />
      {notifyForSmallScreen
        ? <ExitSurveyModal showModal={showModal} handleConfirmationButton={handleConfirmationButton} children={<WarningMessage />} styleClass='notify-small-screen-modal' modalWindowButton='OK' buttonClass='notify-small-screen' />
        : null}
      {/* Testing-setup for thesis */}
      {modeSelected ? <HomeContent /> : <OptionsProvider handleModeSelected={handleModeSelected} />}
      {/* Testing-setup for thesis */}
      <Footer />
    </div>
  )
}


export default Home;
