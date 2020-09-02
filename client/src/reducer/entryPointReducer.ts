/**
 * This file provides the redux reducer to store the survey mode of the
 * current participant
 */


export type AddModeActionType = {
    type: 'ADD_MODE',
    payload: Mode
}
export type Mode = {
    mode: 'TRADITIONAL' |
    'GAMIFIED' |
    'TRADITIONAL_GAMIFIED_1' |
    'TRADITIONAL_GAMIFIED_2' |
    'GAMIFIED_WITH_BADGES' |
    'GAMIFIED_WITH_POINTS' |
    'GAMIFIED_WITH_NARRATIVE' |
    'GAMIFIED_CHOICE_1' |
    'GAMIFIED_CHOICE_2' |
    'GAMIFIED_CHOICE_3'
}

const defaultState: Mode = {
    mode: 'TRADITIONAL'
}

const entryPointReducer = (state = defaultState, action: AddModeActionType): Mode => {
    const { payload, type } = action

    switch (type) {
        case 'ADD_MODE':
            return {
                ...state,
                ...payload
            }

        default:
            return state
    }
}

export default entryPointReducer