import React, { Fragment, useState, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomProgressBar from '../components/CustomProgressBar'
import { useTranslation } from 'react-i18next';
import { survey } from '../survey/MockSurveyQuestions'
import GuidedTourModal from '../components/GuidedTour/GuidedTourModal'
import { useHistory } from 'react-router-dom';
import Joyride, { CallBackProps } from 'react-joyride';
import Notifications from '../Toast/Notifications'
import { BadgeDetail } from '../types/types'
import GuidedTourBadges from '../components/GuidedTour/GuidedTourBadges'
import { stepsForTour1, stepsForTour2 } from '../components/GuidedTour/TourSteps'
import { listOfMockImages } from '../badges/BadgeList'
import { useDispatch, useStore } from 'react-redux'
import { Badge } from '../types/types'

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

const GuidedTourGamified = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const history = useHistory()
    const [runTour1, setRunTour1] = useState(false)
    const [runTour2, setRunTour2] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showTour, setShowTour] = useState(false)
    const [showBadge, setShowBadge] = useState(false)
    const [badgeDetail, setBadgeDetail] = useState<BadgeDetail>({
        src: '',
        description: ''
    })
    const store = useStore()
    const handleNotification = () => {
        const achievedBadges = store.getState().filter((badge: Badge) => !(badge.isNotified))
        if (achievedBadges.length >= 1) {
            setShowBadge(true)
            setBadgeDetail({
                src: achievedBadges[0]!.src,
                description: achievedBadges[0]!.description
            })
            dispatch({ type: 'NOTIFY_BADGE', payload: achievedBadges[0] })
        }
    }

    store.subscribe(handleNotification)


    const handleBadgeClose = () => {
        setShowBadge(false)
    }

    const handleJoyrideCallbackForTour1 = (data: CallBackProps) => {
        const { index, status } = data
        if (index === 7 && status === 'running') {
            dispatch({ type: 'ADD_BADGE', payload: listOfMockImages[0] })
        }
        if (status === 'ready') {
            setRunTour2(true)
        }

    }

    const handleJoyrideCallbackForTour2 = (data: CallBackProps) => {
        const { index, status } = data
        if (index === 1) {
            setShowBadge(false)
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
            <Notifications badgeDetail={badgeDetail} showBadge={showBadge} handleBadgeClose={handleBadgeClose} />
            <Joyride
                callback={handleJoyrideCallbackForTour1}
                steps={stepsForTour1}
                run={runTour1}
                spotlightClicks={true}
                hideBackButton={true}
                continuous={true} />
            <Joyride
                callback={handleJoyrideCallbackForTour2}
                steps={stepsForTour2}
                run={runTour2}
                hideBackButton={true}
                continuous={true} />
            <Header children={<Fragment />} />
            <div className="main-body">
                <h2>Here is a guided tour for the second version of the survey</h2>
                <button className='continue-button' onClick={handleStartTour}>Start Tour</button>
                {
                    showTour
                        ? <div className='guided-tour-div'>
                            <GuidedTourBadges />
                            <CustomProgressBar />

                            {survey}
                            {showModal
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
