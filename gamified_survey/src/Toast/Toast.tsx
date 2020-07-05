import React, { useState, useEffect } from 'react'
import Notifications from './Notifications'
import { useStore, useDispatch } from 'react-redux'
import { BadgeDetail, Badge } from '../types/types'

const Toast: React.FC = () => {
    const store = useStore()
    const [showBadge, setShowBadge] = useState(false)
    const [badgeDetail, setBadgeDetail] = useState<BadgeDetail>({
        src: '',
        description: ''
    })
    const handleBadgeClose = () => {
        setShowBadge(false)
    }

    const handleToast = () => {
        const achievedBadges = store.getState().filter((badge: Badge) => !(badge.isNotified))
        if (achievedBadges.length >= 1) {
            setShowBadge(true)
            setBadgeDetail({
                src: achievedBadges[0]!.src,
                description: achievedBadges[0]!.description
            })
            dispatch({ type: 'NOTIFY_BADGE', payload: achievedBadges[0] })
        }
    }
    const dispatch = useDispatch()
    store.subscribe(handleToast)
    return (
        showBadge ?
            <Notifications badgeDetail={badgeDetail} showBadge={showBadge} handleBadgeClose={handleBadgeClose} />
            : null
    )
}

export default Toast