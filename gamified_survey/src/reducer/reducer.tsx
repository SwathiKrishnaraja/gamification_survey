import React from 'react'
import { Badge } from '../types/types'

interface AddBadgeAction {
    type: 'ADD_BADGE',
    achievedBadge: Badge
}

export const addBadgeReducer = (state: Array<Badge>, action: AddBadgeAction) => {
    const { achievedBadge } = action
    switch (action.type) {
        case 'ADD_BADGE':
            return [
                ...state,
                achievedBadge,
            ]

        default:
            return state
    }
}
