import React, { Fragment } from 'react'
import { Badge } from '../../types/types'

type RenderBadgeProps = {
    src: any,
    name: string,
    description: string
}

const RenderBadge: React.FC<RenderBadgeProps> = ({ src, name, description }) => {
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


type RenderGamifiedBadgesDashboardProps = {
    listOfAchievedBadges: Array<Badge>
}
const RenderGamifiedBadgesDashboard: React.FC<RenderGamifiedBadgesDashboardProps> = ({ listOfAchievedBadges }) => {
    const uniqueListOfBadges = [...Array.from(new Set(listOfAchievedBadges.map(element => element.id)))].reduce((result: Array<Badge>, uniqEl) => {
        result.push(...listOfAchievedBadges.filter(badge => badge.id === uniqEl))
        return result
    }, [])

    return <Fragment>
        <span style={{ margin: 10 }}>Congratulations ! You have achieved the following badges.</span>
        {uniqueListOfBadges
            .filter(badge => badge.isAchieved)
            .map(badge => (<RenderBadge key={badge.id} src={badge.src} name={badge.name} description={badge.description} />))}
    </Fragment>

}

export default RenderGamifiedBadgesDashboard