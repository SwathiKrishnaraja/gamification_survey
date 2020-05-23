import React, { Fragment, Suspense } from 'react';
import './App.css';
import Home from './pages/Home';
import i18next from 'i18next';


function App() {

  return (
    <Suspense fallback={(<div>Loading</div>)}>
      <Fragment>
        <div className="language-button-div">
          <button className="language-button" onClick={() => i18next.changeLanguage('en')}>en</button>
          <button className="language-button" onClick={() => i18next.changeLanguage('de')}>de</button>
        </div>
        <Home />
      </Fragment>
    </Suspense>
  );
}

export default App;
