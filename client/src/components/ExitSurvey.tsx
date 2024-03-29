import React, { useState, Fragment } from 'react'
import GuidedTourModal from './GuidedTour/GuidedTourModal'
import ExitSurveyModal from './modal/ExitSurveyModal'
import postExitCase from '../api/postExitCase'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '../reducer/reducer'
import useLocalStorage from '../common/useLocalStorage'

const ExitSurvey: React.FC = () => {
    const history = useHistory()
    const [showModal, setShowModal] = useState(false)
    const [storeUserVisit, hasUserVisited] = useLocalStorage()
    const handleCancelButton = () => {
        setShowModal(showModal ? false : true)
    }

    const mode = useSelector((state: RootState) => state.entryPointReducer.mode)
    const handleConfirmationButton = () => {
        try {
            storeUserVisit()
            postExitCase({ mode })
            history.push('/')
            window.location.reload()
        } catch (error) {
            throw error
        }
    }

    const ConfirmMessage = () => {
        return (
            <Fragment>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <span style={{ margin: 10 }}>Please confirm you want to clear your response and exit the survey?</span>
                    <button className='x-styled-close' onClick={() => setShowModal(showModal ? false : true)}>x</button>
                </div >
                <hr style={{ width: '98%' }} />
            </Fragment>

        )
    }

    return (
        <Fragment>
            <a className='exit-survey' onClick={handleCancelButton}>Exit and clear survey</a>
            <ExitSurveyModal showModal={showModal} handleCancelButton={handleCancelButton} handleConfirmationButton={handleConfirmationButton} children={<ConfirmMessage />} styleClass='exit-survey-modal' modalCancelButton='Cancel' modalWindowButton='Ok' buttonClass='exit-survey-button' />
        </Fragment>
    )
}

export default ExitSurvey
