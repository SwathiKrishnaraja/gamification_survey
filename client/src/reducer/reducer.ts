import addBadgeReducer from './addBadgeReducer'
import entryPointReducer from './entryPointReducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    addBadgeReducer,
    entryPointReducer
})
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer