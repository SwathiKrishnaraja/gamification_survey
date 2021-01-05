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


const App = (props: any) => {
  const [showModal, setShowModal] = useState(true)

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

    </Switch>
  )
}

export default withRouter(App)
