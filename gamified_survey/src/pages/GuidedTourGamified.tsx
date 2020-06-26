import React, { Fragment, useState, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomProgressBar from '../components/CustomProgressBar'
import { useTranslation } from 'react-i18next';
import { survey } from '../survey/MockSurveyQuestions'
import GuidedTourModal from '../components/GuidedTour/GuidedTourModal'
import { useHistory } from 'react-router-dom';
import Joyride, { CallBackProps } from 'react-joyride';
import First from '../badges/guidedTour/1.png'
import Notifications from '../Toast/Notifications'
import { BadgeDetail } from '../types/types'
import GuidedTourBadges from '../components/GuidedTour/GuidedTourBadges'
import { stepsForTour1, stepsForTour2 } from '../components/GuidedTour/TourSteps'
import { BadgeContext } from '../context/BadgeContext'
import { listOfMockImages } from '../badges/BadgeList'


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
    const { dispatch } = useContext(BadgeContext)
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

    const handleBadgeClose = () => {
        setShowBadge(false)
    }

    const handleJoyrideCallbackForTour1 = (data: CallBackProps) => {
        const { index, status } = data
        console.log(index)

        if (index === 7) {
            dispatch({ type: 'ADD_BADGE', achievedBadge: listOfMockImages[0] })
            setShowBadge(true)
            setBadgeDetail({
                src: First,
                description: 'Congrats you have finished the guided tour'
            })
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
                showSkipButton={true}
                spotlightClicks={true}
                continuous={true} />
            <Joyride
                callback={handleJoyrideCallbackForTour2}
                steps={stepsForTour2}
                run={runTour2}
                showSkipButton={true}
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
