import React, { Fragment, useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomProgressBar from '../components/CustomProgressBar'
import { useTranslation } from 'react-i18next';
import { survey } from '../survey/MockSurveyQuestions'
import GuidedTourModal from '../components/GuidedTourModal'
import { useHistory } from 'react-router-dom';
import Joyride, { CallBackProps, Step } from 'react-joyride';
import First from '../badges/1.png'
import Second from '../badges/2.png'
import Third from '../badges/3.png'
import Fourth from '../badges/4.png'
import Fifth from '../badges/5.png'
import Sixth from '../badges/6.png'
import Seventh from '../badges/7.png'
import Eight from '../badges/8.png'
import Ninth from '../badges/9.png'
import Tenth from '../badges/10.png'
import Notifications from '../Toast/Notifications'
import { BadgeDetail } from '../types/types'

const TourContinueElement: React.FC = () => {
    return (
        <div>
            <h2>Congrats !</h2>
            <br />
            You have finished the Guided tour of the second version.
        </div>
    )
}
const Badges: React.FC = () => {
    const { t } = useTranslation()
    return (
        <Fragment>
            <div className='Badges-div-mock'>
                <h2>{t('badges.title')}</h2>
                <img alt='letsGo' src={First} />
                <img alt='letsGo' src={Second} />
                <img alt='letsGo' src={Third} />
                <img alt='letsGo' src={Fourth} />
                <img alt='letsGo' src={Fifth} />
                <img alt='letsGo' src={Sixth} />
                <img alt='letsGo' src={Seventh} />
                <img alt='letsGo' src={Eight} />
                <img alt='letsGo' src={Ninth} />
                <img alt='letsGo' src={Tenth} />
            </div>
            <hr style={{ width: '100%' }} />
        </Fragment>
    )
}
const stepsForTour1: Step[] = [
    {
        target: '.Badges-div-mock',
        content: 'In this version, you are awarded badges for your progress in the survey',
        disableBeacon: true,
        spotlightPadding: 0,
    },

    {
        target: '.progress-bar-div',
        content: 'Your progress is shown here.',
        // placement: 'center',
    },
    {
        target: '.sv_row:nth-child(1)',
        content: 'Few questions are in presented in the radiogroup format. Please choose one option',
        placement: 'bottom',
    },
    {
        target: '.sv_row:nth-child(2)',
        content: 'Few questions are presented in matrix format. Please choose one option.',
        placement: 'bottom',
    },
    {
        target: '.sv_row:nth-child(3)',
        content: 'Few questions are presented with checkboxes. Please feel free to choose multiple options if necessary.',
        placement: 'bottom',
    },
    {
        target: '.sv_row:nth-child(4)',
        content: 'Few questions are presented with text area. Please provide your input in the provided text area.',
        placement: 'top',
    },
    {
        target: '.toast',
        content: 'You are presented with a badge based on your achievement.',
        placement: 'bottom',
    },
]
const stepsForTour2: Step[] = [
    {
        target: '.toast',
        content: 'You are presented with a badge based on your achievement.',
        disableBeacon: true,
        spotlightPadding: 0,
        // placement: 'bottom',
    },
    {
        target: '.Badges-div-mock',
        content: 'The badge gets activated in the badges list',
        spotlightPadding: 0,
    },
]

const GuidedTourGamified = () => {
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

        if (index === 6) {
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
                // showProgress={true}
                showSkipButton={true}
                continuous={true} />
            <Joyride
                callback={handleJoyrideCallbackForTour2}
                steps={stepsForTour2}
                run={runTour2}
                // showProgress={true}
                showSkipButton={true}
                continuous={true} />
            <Header children={<Fragment />} />
            <div className="main-body">
                <h2>Here is a guided tour for the second version of the survey</h2>
                <button className='continue-button' onClick={handleStartTour}>Start Tour</button>
                {
                    showTour
                        ? <div className='guided-tour-div'>
                            <Badges />
                            <CustomProgressBar />

                            {survey}
                            {showModal
                                ? <GuidedTourModal showModal={showModal} handleClick={handleTourProceed} children={<TourContinueElement />} modalWindowButton='Continue' />
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
