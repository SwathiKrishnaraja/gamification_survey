import React, { useState, Fragment } from 'react'
import GuidedTourModal from './GuidedTour/GuidedTourModal'
import ExitSurveyModal from './modal/ExitSurveyModal'
import postExitCase from '../api/postExitCase'

const ExitSurvey: React.FC = () => {
    const [showModal, setShowModal] = useState(false)
    const handleCancelButton = () => {
        setShowModal(showModal ? false : true)
    }

    const handleConfirmationButton = () => {
        try {
            postExitCase()
        } catch (error) {
            throw error
        }
        window.close()
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
            <a className='exit-survey' href='# ' onClick={handleCancelButton}>Exit and clear survey</a>
            <ExitSurveyModal showModal={showModal} handleCancelButton={handleCancelButton} handleConfirmationButton={handleConfirmationButton} children={<ConfirmMessage />} styleClass='exit-survey-modal' modalCancelButton='Cancel' modalWindowButton='Ok' buttonClass='exit-survey-button' />
        </Fragment>
    )
}

export default ExitSurvey
