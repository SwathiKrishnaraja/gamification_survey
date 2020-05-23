import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import ConsentForm from './pages/ConsentForm'
import GamifiedSurvey from './pages/GamifiedSurvey'
import TraditionalSurvey from './pages/TraditionalSurvey'
import PreSurvey from './pages/PreSurvey'
import * as serviceWorker from './serviceWorker';

const Routing = () => {
  return (
    <Router>
      <Route exact path='/' component={App} />
      <Route path='/ConsentForm' component={ConsentForm} />
      <Route path='/GamifiedSurvey' component={GamifiedSurvey} />
      <Route path='/TraditionalSurvey' component={TraditionalSurvey} />
      <Route path='/PreSurvey' component={PreSurvey} />
    </Router>
  )
}
ReactDOM.render(
  <Routing />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
