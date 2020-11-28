
type SurveyMode = 'TRADITIONAL' |
    'GAMIFIED' |
    'TRADITIONAL_GAMIFIED_1' |
    'TRADITIONAL_GAMIFIED_2' |
    'GAMIFIED_WITH_BADGES' |
    'GAMIFIED_WITH_POINTS' |
    'GAMIFIED_CHOICE_1' |
    'GAMIFIED_CHOICE_2'

type ActionType = {
    type: 'SELECTED_MODE',
    payload: SurveyMode
}

const optionsProviderReducer = (state: SurveyMode = 'TRADITIONAL', action: ActionType) => {
    const { type, payload } = action

    switch (type) {
        case 'SELECTED_MODE':
            return state = payload

        default:
            return state
    }
}

export default optionsProviderReducer 