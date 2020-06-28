import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import './i18n';
import App from './App';
import GuidedTourTraditional from './pages/GuidedTourTraditional'
import GuidedTourGamified from './pages/GuidedTourGamified'
import GamifiedSurvey from './pages/GamifiedSurvey'
import TraditionalSurvey from './pages/TraditionalSurvey'
import PreSurvey from './pages/PreSurvey'
import ChooseVersion from './pages/ChooseVersion'
import * as serviceWorker from './serviceWorker';
import BadgeProvider from './context/BadgeContext'
import Dashboard from './pages/Dashboard'
import Thanks from './pages/Thanks';

const Routing = () => {
  return (
    <Router>
      <BadgeProvider>
        <Route exact path='/' component={App} />
        <Route path='/GuidedTourTraditional' component={GuidedTourTraditional} />
        <Route path='/GuidedTourGamified' component={GuidedTourGamified} />
        <Route path='/ChooseVersion' component={ChooseVersion} />
        <Route path='/GamifiedSurvey' component={GamifiedSurvey} />
        <Route path='/TraditionalSurvey' component={TraditionalSurvey} />
        <Route path='/PreSurvey' component={PreSurvey} />
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/Thanks' component={Thanks} />
      </BadgeProvider>
    </Router>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
