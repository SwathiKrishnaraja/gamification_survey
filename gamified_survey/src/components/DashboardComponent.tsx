import React, { Fragment, useState } from 'react'
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
import { useHistory } from 'react-router-dom'
import GuidedTourModal from './GuidedTour/GuidedTourModal'
import ThanksText from '../components/ThanksText'

export const listOfImages = [
    {
        id: 100,
        src: First,
        name: "Let's go !",
        description: 'Start the survey',
        isActive: true
    },
    {
        id: 101,
        src: Second,
        name: "33% Achieved",
        description: 'Answer 33% of the questions',
        isActive: true
    },
    {
        id: 103,
        src: Third,
        name: "Audience favorite",
        description: 'Find the mascot',
        isActive: false
    },
    {
        id: 104,
        src: Fourth,
        name: "66% Achieved",
        description: 'Answer 66% of the questions',
        isActive: true
    },
    {
        id: 105,
        src: Fifth,
        name: "Fast Achiever",
        description: 'Reach the last 5 questions',
        isActive: true
    },
    {
        id: 106,
        src: Sixth,
        name: "Master of Interview",
        description: 'Answer the interview questions',
        isActive: false
    },
    {
        id: 107,
        src: Seventh,
        name: "Winner",
        description: 'Complete the survey',
        isActive: true
    },
    {
        id: 108,
        src: Eight,
        name: "Full Points",
        description: 'Answer all questions including the open ones',
        isActive: false
    },
    {
        id: 109,
        src: Ninth,
        name: "Tactician",
        description: 'Takes at least 30 seconds for each question',
        isActive: false
    },
    {
        id: 110,
        src: Tenth,
        name: "Medal Collector",
        description: 'Collect all badges',
        isActive: false
    },
]
type RenderBadge = {
    src: any,
    name: string,
    description: string
}

const DashboardComponent = () => {
    const history = useHistory()
    const [showModal, setShowModal] = useState(false)
    const handleClick = () => {
        setShowModal(showModal ? false : true)
    }
    const handleProceedButton = () => {
        history.push('/PostSurvey')
    }

    return (
        <Fragment>
            <div className='dashboard'>
                <span style={{ margin: 10 }}>Congratulations ! You have achieved the following badges.</span>
                {listOfImages
                    .filter(badge => badge.isActive)
                    .map(element => (<RenderBadge src={element.src} name={element.name} description={element.description} />))}
                <span style={{ margin: 10 }}>Please click submit to complete the survey</span>
            </div >
            <button style={{ marginTop: 20 }} className="continue-button" onClick={handleClick}>Submit</button>
            <GuidedTourModal showModal={showModal} handleClick={handleProceedButton} children={<ThanksText />} styleClass='thank-you-modal' modalWindowButton='Proceed' buttonClass='exit-survey-button' />
        </Fragment>

    )
}
export default DashboardComponent

const RenderBadge = ({ src, name, description }: RenderBadge) => {
    return (
        <div className='dashboard-badge-div'>
            <img alt='fifth' src={src} />
            <div className='dashboard-badge-elements'>
                <span style={{ marginTop: 5, marginLeft: 5 }}>{name}</span>
                <span style={{ marginLeft: 5 }}>{description}</span>
            </div>
        </div>
    )
}