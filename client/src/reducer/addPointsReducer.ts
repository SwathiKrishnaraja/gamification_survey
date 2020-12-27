import { Points, PointsDetails } from '../types/types'

const defaultState: Points = {
    points: 0,
    details: [{
        id: 1,
        src: '',
        name: '',
        description: '',
        isAchieved: false,
        isNotified: true,

    }]
}

export type AddPointsActionType = {
    type: 'ADD_POINTS' | 'NOTIFY_POINTS' | 'REMOVE_POINTS',
    payload: PointsDetails
}


const addPointsReducer = (state = defaultState, action: AddPointsActionType) => {
    const { type, payload } = action
    switch (type) {
        case 'ADD_POINTS':
            if ((state.details.filter(detail => detail.id === payload.id)).length === 0) {
                return {
                    points: (state.points + 100),
                    details: [
                        ...state.details,
                        {
                            ...payload,
                            isAchieved: true,

                        }
                    ]
                }
            } else {
                return state
            }
        case 'NOTIFY_POINTS':
            return {
                ...state,
                details: [
                    ...state.details.map(point => {
                        if (point.id === payload.id) {
                            return ({
                                ...point,
                                isNotified: true
                            })
                        } else {
                            return point
                        }
                    }
                    )
                ]
            }
        case 'REMOVE_POINTS':
            return {
                points: 0,
                details: []
            }

        default:
            return state
    }

}


export default addPointsReducer
