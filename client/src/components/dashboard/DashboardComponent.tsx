import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { Badge } from '../../types/types'
import RenderGamifiedBadgesDashboard from './RenderGamifiedBadgesDashboard'
import RenderLeaderboardDashboard from './RenderLeaderboardDashboard'

type Props = {
    mode: string,
    listOfAchievedBadges: Array<Badge>,
    pointsAchieved: number
}

const DashboardComponent: React.FC<Props> = ({ mode, listOfAchievedBadges, pointsAchieved }) => {
    const history = useHistory()
    const handleNextButton = () => {
        history.push('/PostSurvey')
    }

    return (
        <Fragment>
            <div className='dashboard'>
                {mode === 'badges' ? <RenderGamifiedBadgesDashboard listOfAchievedBadges={listOfAchievedBadges} /> : null}
                {mode === 'leaderboard' ? <RenderLeaderboardDashboard pointsAchieved={pointsAchieved} /> : null}

                <span style={{ marginLeft: 10, marginTop: 5 }}>Thank you for completing the survey. </span>
                <span style={{ marginLeft: 10, marginTop: 5, marginBottom: 5 }}>Please let us know how you feel about the survey by clicking on 'Next'.</span>
            </div >
            <button style={{ marginTop: 20 }} className="continue-button" onClick={handleNextButton}>Next</button>
        </Fragment >

    )
}
export default DashboardComponent


