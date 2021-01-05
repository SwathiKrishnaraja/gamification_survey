/**
 * This file contains the redux reducer to store the badge information 
 * of the current participant.
 * @action 'ADD_BADGE' adds the collected badge to the store
 * @action 'NOTIFY_BADGE' is used to render the notification pop up toast component
 * @action 'REMOVE_BADGE' is used to remove the badge that gets added to the store
 * during the guided tour of gamified survey.
 */

import { Badge } from '../types/types'

export type BadgeAction = {
    type: 'ADD_BADGE' | 'NOTIFY_BADGE' | 'REMOVE_BADGE',
    payload: Badge
}

const defaultState: Array<Badge> = [
    {
        id: 1,
        src: '',
        name: '',
        description: '',
        isAchieved: false,
        isNotified: true,

    }]

const addBadgeReducer = (state = defaultState, action: BadgeAction): Array<Badge> => {
    const { payload } = action
    const stateWithIds = state.map(badge => badge.id)
    switch (action.type) {
        case 'ADD_BADGE':
            if (stateWithIds.includes(payload.id)) {
                return state
            } else {
                return [
                    ...state,
                    {
                        ...payload,
                        isAchieved: true
                    }
                ]
            }

        case 'NOTIFY_BADGE':
            return [
                ...state.map(badge => {
                    if (badge.id === payload.id) {
                        return ({
                            ...badge,
                            isNotified: true
                        })
                    } else {
                        return badge
                    }
                }
                )
            ]
        case 'REMOVE_BADGE':
            return [
                ...state.filter(badge => badge.id !== payload.id)
            ]

        default:
            return state
    }
}
export default addBadgeReducer