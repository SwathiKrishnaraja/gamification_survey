import addBadgeReducer from './addBadgeReducer'
import entryPointReducer from './entryPointReducer'
import addPointsReducer from './addPointsReducer'
import optionsProviderReducer from './optionsProvider'

import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    addBadgeReducer,
    entryPointReducer,
    addPointsReducer,
    optionsProviderReducer
})
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer