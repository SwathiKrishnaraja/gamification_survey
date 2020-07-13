import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Badge } from '../types/types'

type RenderBadge = {
    src: any,
    name: string,
    description: string
}

const DashboardComponent = () => {
    const listOfAchievedBadges: Array<Badge> = useSelector((state: Array<Badge>) => state)
    const history = useHistory()
    const handleNextButton = () => {
        history.push('/PostSurvey')
    }

    return (
        <Fragment>
            <div className='dashboard'>
                <span style={{ margin: 10 }}>Congratulations ! You have achieved the following badges.</span>
                {listOfAchievedBadges
                    .filter(badge => badge.isAchieved)
                    .map(badge => (<RenderBadge key={badge.id} src={badge.src} name={badge.name} description={badge.description} />))}
                <span style={{ marginLeft: 10, marginTop: 5 }}>Thank you for completing the survey. </span>
                <span style={{ marginLeft: 10, marginTop: 5, marginBottom: 5 }}>Please let us know how you feel about the survey by clicking on 'Next'.</span>
            </div >
            <button style={{ marginTop: 20 }} className="continue-button" onClick={handleNextButton}>Next</button>
        </Fragment>

    )
}
export default DashboardComponent

const RenderBadge = ({ src, name, description }: RenderBadge) => {
    return (
        <div className='dashboard-badge-div'>
            <img alt={name} src={src} />
            <div className='dashboard-badge-elements'>
                <span style={{ marginTop: 5, marginLeft: 5 }}>{name}</span>
                <span style={{ marginLeft: 5 }}>{description}</span>
            </div>
        </div>
    )
}