import React, { useState, Fragment } from 'react'
import GuidedTourModal from './GuidedTour/GuidedTourModal'



const ExitSurvey: React.FC = () => {
    const [showModal, setShowModal] = useState(false)
    const handleClick = () => {
        setShowModal(showModal ? false : true)
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
            <a className='exit-survey' href='# ' onClick={handleClick}>Exit and clear survey</a>
            <GuidedTourModal showModal={showModal} handleClick={handleClick} children={<ConfirmMessage />} styleClass='exit-survey-modal' modalCancelButton='Cancel' modalWindowButton='Ok' buttonClass='exit-survey-button' />
        </Fragment>
    )
}

export default ExitSurvey
