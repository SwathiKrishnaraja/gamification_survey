import React from 'react'
import { Badge } from '../types/types'

interface AddBadgeAction {
    type: 'ADD_BADGE',
    payload: Badge
}

const defaultState: Array<Badge> = [
    {
        id: 1,
        src: '',
        name: '',
        description: ''

    }]

const addBadgeReducer = (state = defaultState, action: AddBadgeAction): Array<Badge> => {
    const { payload } = action
    switch (action.type) {
        case 'ADD_BADGE':
            return [
                ...state,
                payload,
            ]

        default:
            return state
    }
}
export default addBadgeReducer