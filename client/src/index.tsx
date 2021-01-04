import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom'
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
import * as serviceWorker from './serviceWorker';
import Dashboard from './pages/Dashboard'
import PostSurvey from './pages/PostSurvey';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducer/reducer'
import Toast from './Toast/Toast';
import PointsToast from './PointsToast/PointsToast'
import GuidedTourLeaderboard from './pages/GuidedTourLeaderboard';
import ChooseGamifiedVersion from './pages/ChooseGamifiedVersion';
import ThankYouPage from './pages/ThankYouPage';
import ExitSurveyModal from './components/modal/ExitSurveyModal'
import WarningMessage from './components/WarningMessage'
import config from './config'
import useLocalStorage from './common/useLocalStorage'
import NotifyUserForEntry from './components/NotifyUserForEntry'

const store = createStore(rootReducer)

const Routing = () => {
  const [notifyForSmallScreen, setNotifyForSmallScreen] = useState<boolean>(false)
  const [showModal, setShowModal] = useState(true)
  const [storeUserVisit, hasUserVisited] = useLocalStorage()
  const [userVisit, setUserVisit] = useState(false)

  const handleConfirmationButton = () => {
    setShowModal(showModal ? false : true)
    window.location.reload()
  }

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
    <HashRouter>
      <Route exact path='/' component={Home} />
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
      {/* {notifyForSmallScreen
        ? <ExitSurveyModal showModal={showModal} handleConfirmationButton={handleConfirmationButton} children={<WarningMessage />} styleClass='notify-small-screen-modal' modalWindowButton='OK' buttonClass='notify-small-screen' />
        : null} */}
    </HashRouter>
  )
}
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Routing />
    <Toast />
    <PointsToast />
  </Provider>,
  // </React.StrictMode >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
