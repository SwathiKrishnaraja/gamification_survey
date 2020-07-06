import React, { useContext, useEffect, useRef, ReactHTMLElement } from 'react'
import { Badge } from '../types/types'
import { useSelector } from 'react-redux'


const ShowBadge = ({ id, src, name, description, isAchieved }: Badge) => {
    let styles = 'inactive-badge'
    const achievedBadge = useSelector((state: Array<Badge>) => {
        return state.filter((badge: Badge) => (badge.isAchieved))
    })

    if (achievedBadge.find((element: { id: number }) => element.id === id)) {
        styles = 'active-badge'
    }
    return (
        <div className='individual-badge'>
            <img className={styles} alt={name} src={src} />
            <span className='badge-tooltip'>
                <b>
                    {name}
                </b>
                <br />
                {description}
            </span>
        </div>
    )
}

export default ShowBadge