import React, { useContext } from 'react'
import { Badge } from '../types/types'
import { BadgeContext } from '../context/BadgeContext'

const ShowBadge = ({ id, src, name, description }: Badge) => {
    let styles = 'inactive-badge'
    const { achievedBadge } = useContext(BadgeContext)
    if (achievedBadge.id === id) {
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