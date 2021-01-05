import React, { useEffect, useState } from 'react';
import { Redirect, Switch, Route, withRouter } from "react-router"
import './index.css';
import './i18n';
import Home from './pages/Home';
import GuidedTourTraditional from './pages/GuidedTourTraditional'
import GuidedTourGamified from './pages/GuidedTourGamified'
import GamifiedSurvey from './pages/GamifiedSurvey'
import TraditionalSurvey from './pages/TraditionalSurvey'
import PreSurvey from './pages/PreSurvey'
import ChooseVersion from './pages/ChooseVersion'
import LeaderBoardSurvey from './pages/LeaderboardSurvey'
import Dashboard from './pages/Dashboard'
import PostSurvey from './pages/PostSurvey';
import GuidedTourLeaderboard from './pages/GuidedTourLeaderboard';
import ChooseGamifiedVersion from './pages/ChooseGamifiedVersion';
import ThankYouPage from './pages/ThankYouPage';
import ExitSurveyModal from './components/modal/ExitSurveyModal'
import WarningMessage from './components/WarningMessage'
import config from './config'
import useLocalStorage from './common/useLocalStorage'
import NotifyUserForEntry from './components/NotifyUserForEntry'


const App = (props: any) => {
  const [notifyForSmallScreen, setNotifyForSmallScreen] = useState<boolean>(false)
  const [showModal, setShowModal] = useState(true)
  const [storeUserVisit, hasUserVisited] = useLocalStorage()
  const [userVisit, setUserVisit] = useState(false)

  const handleConfirmationButton = () => {
    setShowModal(showModal ? false : true)
    window.location.reload()
  }
  const { history } = props
  let currentPathname: string
  let currentSearch: string


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

    return function () {
      window.onpopstate = null
    }
  })


  useEffect(() => {
    if ((window.innerHeight < config.MIN_HEIGHT) || window.innerWidth < config.MIN_WIDTH) {
      setNotifyForSmallScreen(true)
    }
    if (hasUserVisited()) {
      setUserVisit(true)
    }
  }, [hasUserVisited])


  window.addEventListener('resize', () => {
    if ((window.innerHeight < config.MIN_HEIGHT) || window.innerWidth < config.MIN_WIDTH) {
      setNotifyForSmallScreen(true)
    }
  })

  const RenderNotification = () => {
    if (userVisit) {
      return <ExitSurveyModal showModal={hasUserVisited()} handleConfirmationButton={handleConfirmationButton} children={<NotifyUserForEntry />} styleClass='notify-small-screen-modal' modalWindowButton='OK' buttonClass='notify-small-screen' />
    } else if (notifyForSmallScreen) {
      return <ExitSurveyModal showModal={showModal} handleConfirmationButton={handleConfirmationButton} children={<WarningMessage />} styleClass='notify-small-screen-modal' modalWindowButton='OK' buttonClass='notify-small-screen' />
    }

    return null
  }
  return (
    <Switch>
      <Route exact path='/' render={() => <Redirect to="/Home" />} />
      <Route path='/Home' component={Home} />
      <Route path='/GuidedTourTraditional' component={GuidedTourTraditional} />
      <Route path='/GuidedTourGamified' component={GuidedTourGamified} />
      <Route path='/GuidedTourLeaderboard' component={GuidedTourLeaderboard} />
      <Route path='/ChooseGamifiedVersion' component={ChooseGamifiedVersion} />
      <Route path='/ChooseVersion' component={ChooseVersion} />
      <Route path='/GamifiedSurvey' component={GamifiedSurvey} />
      <Route path='/TraditionalSurvey' component={TraditionalSurvey} />
      <Route path='/PreSurvey' component={PreSurvey} />
      <Route path='/Dashboard' component={Dashboard} />
      <Route path='/PostSurvey' component={PostSurvey} />
      <Route path='/LeaderBoardSurvey' component={LeaderBoardSurvey} />
      <Route path='/Thanks' component={ThankYouPage} />
      <RenderNotification />
    </Switch>
  )
}

export default withRouter(App)
