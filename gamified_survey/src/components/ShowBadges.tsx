import React, { useContext } from 'react'
import { Badge } from '../types/types'
import { useStore } from 'react-redux'


const ShowBadge = ({ id, src, name, description }: Badge) => {
    let styles = 'inactive-badge'
    const store = useStore()
    const achievedBadge = store.getState()
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