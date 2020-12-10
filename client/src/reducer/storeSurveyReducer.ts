import { SurveyDataType } from '../types/types'

const defaultState: SurveyDataType = {
    presurvey: {},
    mainsurvey: {},
    postsurvey: {},
    survey_mode: '',
    char_count: [],
    time_taken: 0,
    average_time: 0,
    browser: '',
}

type Action = {
    type: 'STORE_SURVEY',
    payload: Object
}

const storeSurveyReducer = (state = defaultState, action: Action) => {
    const { type, payload } = action

    switch (type) {
        case 'STORE_SURVEY':
            return ({
                ...state,
                ...payload
            })

        default:
            return state
    }
}

export default storeSurveyReducer