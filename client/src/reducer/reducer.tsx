import { Badge } from '../types/types'

interface BadgeAction {
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
                        return badge
                    }
                }
                )
            ]
        case 'REMOVE_BADGE':
            console.log(state)
            return [
                ...state.filter(badge => badge.id !== payload.id)
            ]

        default:
            return state
    }
}
export default addBadgeReducer