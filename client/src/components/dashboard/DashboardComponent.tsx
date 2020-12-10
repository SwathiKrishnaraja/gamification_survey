import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Badge } from '../../types/types'
import GuidedTourModal from '../GuidedTour/GuidedTourModal'
import ThanksText from '../ThanksText'
import RenderGamifiedBadgesDashboard from './RenderGamifiedBadgesDashboard'
import RenderLeaderboardDashboard from './RenderLeaderboardDashboard'

type Props = {
    mode: string,
    listOfAchievedBadges: Array<Badge>,
    pointsAchieved: number
}

const DashboardComponent: React.FC<Props> = ({ mode, listOfAchievedBadges, pointsAchieved }) => {
    const [showModal, setShowModal] = useState(false)
    const history = useHistory()

    const handleNextButton = () => {
        setShowModal(true)
    }
    const handleProceedButton = () => {
        history.push('/PostSurvey')
    }

    return (
        <Fragment>
            <div className='dashboard'>
                {mode === 'badges' ? <RenderGamifiedBadgesDashboard listOfAchievedBadges={listOfAchievedBadges} /> : null}
                {mode === 'leaderboard' ? <RenderLeaderboardDashboard pointsAchieved={pointsAchieved} /> : null}
            </div >
            <button style={{ marginTop: 20 }} className="continue-button" onClick={handleNextButton}>Next</button>
            {showModal ? <GuidedTourModal showModal={showModal} handleClick={handleProceedButton} children={<ThanksText />} styleClass='thank-you-modal' modalWindowButton='Proceed' buttonClass='exit-survey-button' /> : null}
        </Fragment >

    )
}
export default DashboardComponent


