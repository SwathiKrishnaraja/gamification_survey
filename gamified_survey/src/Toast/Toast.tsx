import React, { useState, useEffect } from 'react'
import Notifications from './Notifications'
import { useDispatch, useSelector } from 'react-redux'
import { BadgeDetail, Badge } from '../types/types'

const Toast: React.FC = () => {
    const dispatch = useDispatch()
    const [showBadge, setShowBadge] = useState(false)
    const [badgeDetail, setBadgeDetail] = useState<BadgeDetail>({
        src: '',
        description: ''
    })
    const handleBadgeClose = () => {
        setShowBadge(false)
    }

    const newBadge = useSelector((state: Array<Badge>) => {
        return state.filter((badge: Badge) => !(badge.isNotified))
    })


    useEffect(() => {
        if (newBadge.length >= 1) {
            dispatch({ type: 'NOTIFY_BADGE', payload: newBadge[0] })
            setShowBadge(true)
            setBadgeDetail({
                src: newBadge[0]!.src,
                description: newBadge[0]!.description
            })
        }
    }, [dispatch, newBadge])

    return (
        showBadge ?
            <Notifications badgeDetail={badgeDetail} showBadge={showBadge} handleBadgeClose={handleBadgeClose} />
            : null
    )
}

export default Toast