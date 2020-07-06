import React, { useState, useEffect } from 'react'
import Notifications from './Notifications'
import { useDispatch, useSelector } from 'react-redux'
import { Badge } from '../types/types'

const Toast: React.FC = () => {
    const dispatch = useDispatch()
    const [showBadge, setShowBadge] = useState(false)
    const [badges, setBadges] = useState<Array<Badge>>([{
        src: '',
        description: '',
        id: 0,
        isAchieved: true,
        isNotified: true,
        name: ''
    }])
    const handleBadgeClose = () => {
        setShowBadge(false)
    }

    const newBadge: Array<Badge> = useSelector((state: Array<Badge>) => {
        return state.filter((badge: Badge) => !(badge.isNotified))
    })


    useEffect(() => {
        if (newBadge.length >= 1) {
            newBadge.forEach(badge => {
                dispatch({ type: 'NOTIFY_BADGE', payload: badge })
                setShowBadge(true)
                setBadges([
                    ...newBadge
                ])
            })
        }
    }, [badges, dispatch, newBadge])

    return (
        showBadge ?
            <Notifications badges={badges} showBadge={showBadge} handleBadgeClose={handleBadgeClose} />
            : null
    )

}

export default Toast