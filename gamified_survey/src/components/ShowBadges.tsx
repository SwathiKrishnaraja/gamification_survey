import React from 'react'
import { Badge } from '../types/types'

const ShowBadge = ({ src, name, description }: Badge) => {
    return (
        <div className='individual-badge'>
            <img alt={name} src={src} />
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