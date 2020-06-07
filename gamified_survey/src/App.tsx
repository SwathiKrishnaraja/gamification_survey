import React, { Fragment, Suspense } from 'react';
import './App.css';
import Home from './pages/Home';
import LanguageSelection from './components/LanguageSelection'


function App() {

  return (
    <Suspense fallback={(<div>Loading</div>)}>
      <Fragment>
        <Home />
      </Fragment>
    </Suspense>
  );
}

export default App;
