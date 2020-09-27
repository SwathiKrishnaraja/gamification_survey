const defaultState: number = 0

type AddPointsActionType = {
    type: 'ADD_POINTS',
    payload: number
}


const addPointsReducer = (state = defaultState, action: AddPointsActionType) => {
    const { type, payload } = action
    switch (type) {
        case 'ADD_POINTS':
            return state += payload

        default:
            return state
    }
}


export default addPointsReducer