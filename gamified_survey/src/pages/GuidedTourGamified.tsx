import React, { Fragment, useState, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomProgressBar from '../components/CustomProgressBar'
import { useTranslation } from 'react-i18next';
import { model } from '../survey/MockSurveyQuestions'
import * as Survey from 'survey-react'
import GuidedTourModal from '../components/GuidedTour/GuidedTourModal'
import { useHistory } from 'react-router-dom';
import Joyride, { CallBackProps } from 'react-joyride';
import GuidedTourBadges from '../components/GuidedTour/GuidedTourBadges'
import { stepsForTour1 } from '../components/GuidedTour/TourSteps'
import { listOfMockImages } from '../badges/BadgeList'
import { useDispatch } from 'react-redux'

const TourContinueElement: React.FC = () => {
    return (
        <div>
            <h2>Congratulations !</h2>
            <hr style={{ width: '98%' }} />
            <br />
            <h4>
                You have finished the Guided tour of the second version.
            </h4>

        </div>
    )
}

export const SurveyQuestions = () => {
    return (
        <Survey.Survey model={model}
        />
    )
}

const GuidedTourGamified = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const history = useHistory()
    const [runTour1, setRunTour1] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showTour, setShowTour] = useState(false)

    const handleJoyrideCallbackForTour1 = (data: CallBackProps) => {
        const { index, status } = data
        console.log(index, status)
        if (index === 3 && status === 'running') {
            dispatch({ type: 'ADD_BADGE', payload: listOfMockImages[0] })
        }
        if (status === 'ready') {
            setShowModal(true)
        }

    }
    const handleStartTour = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setRunTour1(true)
        setShowTour(true)
    }

    const handleTourProceed = () => {
        history.push('/ChooseVersion')
    }

    return (
        <div className="container">
            <Joyride
                callback={handleJoyrideCallbackForTour1}
                steps={stepsForTour1}
                run={runTour1}
                spotlightClicks={true}
                hideBackButton={true}
                styles={{
                    options: {
                        arrowColor: '#f5f5f5',
                        backgroundColor: '#f5f5f5',
                        zIndex: 1000,
                    }
                }}
                continuous={true} />
            <Header children={<Fragment />} />
            <div className="main-body">
                <h2>Here is a guided tour for the second version of the survey</h2>
                <button className='continue-button' onClick={handleStartTour}>Start Tour</button>
                {
                    showTour
                        ? <div className='guided-tour-div'>
                            <GuidedTourBadges />
                            <CustomProgressBar progress={70} />

                            <SurveyQuestions />
                            {
                                showModal
                                    ? <GuidedTourModal showModal={showModal} handleClick={handleTourProceed} children={<TourContinueElement />} modalWindowButton='Continue' styleClass='guided-modal-main' buttonClass='continue-button' />
                                    : <Fragment />}
                        </div>
                        : <Fragment />
                }
            </div>
            <Footer />
        </div >
    );
};

export default GuidedTourGamified;
