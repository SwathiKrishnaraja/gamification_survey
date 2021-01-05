import React, { useEffect, useState } from "react";
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
            <Route path="/" component={App} />
            <RenderNotification />
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
