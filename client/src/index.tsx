import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import './index.css';
import './i18n';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducer/reducer'
import Toast from './Toast/Toast';
import PointsToast from './PointsToast/PointsToast'
import App from "./App"

const store = createStore(rootReducer)

const Routing = () => {
    return (
        <HashRouter>
            <Route path="/" component={App} />
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

serviceWorker.unregister();
