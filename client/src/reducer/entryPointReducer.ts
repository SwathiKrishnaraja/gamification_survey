/**
 * This file provides the redux reducer to store the survey mode of the
 * current participant
 */


export type AddModeActionType = {
    type: 'ADD_MODE',
    payload: string
}

const defaultState = {
    mode: ''
}

const entryPointReducer = (state = defaultState, action: AddModeActionType) => {
    const { payload, type } = action

    switch (type) {
        case 'ADD_MODE':
            state.mode = payload
            return state

        default:
            return state
    }
}

export default entryPointReducer