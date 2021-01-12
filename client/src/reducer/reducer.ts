import addBadgeReducer from './addBadgeReducer'
import entryPointReducer from './entryPointReducer'
import addPointsReducer from './addPointsReducer'
import storeSurveyReducer from './storeSurveyReducer'

import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    addBadgeReducer,
    entryPointReducer,
    addPointsReducer,
    storeSurveyReducer
})
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer