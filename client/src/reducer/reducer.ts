import addBadgeReducer from './addBadgeReducer'
import entryPointReducer from './entryPointReducer'
import addPointsReducer from './addPointsReducer'
import optionsProviderReducer from './optionsProvider'
import storeSurveyReducer from './storeSurveyReducer'

import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    addBadgeReducer,
    entryPointReducer,
    addPointsReducer,
    optionsProviderReducer,
    storeSurveyReducer
})
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer