import React, { Fragment, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomProgressBar from '../components/CustomProgressBar'
import { useTranslation } from 'react-i18next';
import { survey } from '../survey/MockSurveyQuestions'
import Joyride, { CallBackProps, Step } from 'react-joyride';
import GuidedTourModal from '../components/GuidedTour/GuidedTourModal'
import { useHistory } from 'react-router-dom';


export const TourContinueElement: React.FC = () => {
    return (
        <Fragment>
            <h2>Congrats !</h2>
            <br />
            You have finished the Guided tour of first version.
            <br />
            Now please proceed to the second version.
        </Fragment>
    )
}

const GuidedTourTraditional = () => {
    const history = useHistory()
    const { t } = useTranslation()
    const [run, setRun] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showTour, setShowTour] = useState(false)
    const steps: Step[] = [

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
        }
    ]

    const handleJoyrideCallback = (data: CallBackProps) => {
        const { status } = data
        if (status === 'ready') {
            setShowModal(true)
        }
    }
    const handleStartTour = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setRun(true)
        setShowTour(true)
    }

    const handleTourProceed = () => {
        history.push('/GuidedTourGamified')
    }


    return (
        <div className="container">
            <Joyride
                callback={handleJoyrideCallback}
                steps={steps}
                run={run}
                showProgress={true}
                showSkipButton={true}
                continuous={true} />
            <Header children={<Fragment />} />
            <div className="main-body">
                <h2>Here is a guided tour for the first version of the survey</h2>
                <button className='continue-button' onClick={handleStartTour}>Start Tour</button>
                {showTour
                    ? <div className='guided-tour-div'>
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

export default GuidedTourTraditional;
