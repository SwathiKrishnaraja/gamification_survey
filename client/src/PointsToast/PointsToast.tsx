import React, { useState, useEffect, Fragment } from 'react'
import PointsNotifications from './PointsNotification'
import { useDispatch, useSelector } from 'react-redux'
import { Points, PointsDetails } from '../types/types'
import { Dispatch } from 'redux'
import { AddPointsActionType } from '../reducer/addPointsReducer'
import { RootState } from '../reducer/reducer'
import pointsProvider from '../PointRules/PointsRules'

const PointsToast: React.FC = () => {
    const dispatch: Dispatch<AddPointsActionType> = useDispatch()
    const [showPoints, setShowPoints] = useState(false)
    const [points, setPoints] = useState<Array<PointsDetails>>([{
        src: '',
        description: '',
        id: 0,
        isAchieved: true,
        isNotified: true,
        name: ''
    }])
    const handleClose = () => {
        setShowPoints(false)
    }


    const newPoints: Points = useSelector((state: RootState) => state.addPointsReducer)
    const notNotifiedPoints: Array<PointsDetails> = newPoints.details.filter((point) => !point.isNotified)

    useEffect(() => {
        console.log(notNotifiedPoints)
        if (notNotifiedPoints.length >= 1) {
            notNotifiedPoints.forEach(point => {
                dispatch({ type: 'NOTIFY_POINTS', payload: point })
                setShowPoints(true)
                setPoints([
                    ...notNotifiedPoints
                ])
            })
        }
    }, [newPoints])

    return (
        showPoints ?
            <PointsNotifications points={points} showPoints={showPoints} handleClose={handleClose} />
            : null
    )

}

export default PointsToast