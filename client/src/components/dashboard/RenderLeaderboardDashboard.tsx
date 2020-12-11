import React, { Fragment } from 'react'
import createABarGraphElement, { barGraphElements } from '../../helpers/createLeaderboardElements'
import LeaderboardComponent from '../LeaderboardComponent'

type Props = {
    pointsAchieved: number
}
const RenderLeaderboardDashboard: React.FC<Props> = ({ pointsAchieved }) => {
    const { zeus, ron, han, jonas } = barGraphElements
    const user = createABarGraphElement('You', pointsAchieved, pointsAchieved / 10, 'blue')
    const listOfComponents: Array<React.ReactElement> = [zeus, ron, han, jonas, user]
    return <Fragment>
        <span style={{ margin: 10 }}>Congratulations ! You have achieved {pointsAchieved} points.</span>
        <LeaderboardComponent points={pointsAchieved} listOfComponents={listOfComponents} />
    </Fragment>

}

export default RenderLeaderboardDashboard
