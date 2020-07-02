import React from 'react'
import { Badge } from '../types/types'

interface AddBadgeAction {
    type: 'ADD_BADGE' | 'NOTIFY_BADGE',
    payload: Badge
}

const defaultState: Array<Badge> = [
    {
        id: 1,
        src: '',
        name: '',
        description: '',
        isAchieved: true,
        isNotified: true,

    }]

const addBadgeReducer = (state = defaultState, action: AddBadgeAction): Array<Badge> => {
    const { payload } = action
    switch (action.type) {
        case 'ADD_BADGE':
            return [
                ...state,
                {
                    ...payload,
                    isAchieved: true
                }
            ]
        case 'NOTIFY_BADGE':
            return [
                ...state.map(badge => {
                    if (badge.id === payload.id) {
                        return ({
                            ...badge,
                            isNotified: true
                        })
                    } else {
                        console.log('inside else', payload)
                        return badge
                    }
                }
                )
            ]

        default:
            return state
    }
}
export default addBadgeReducer