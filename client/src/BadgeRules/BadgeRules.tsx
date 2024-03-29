import { listOfImages } from '../badges/BadgeList'
import { Badge } from '../types/types'
import { Dispatch } from 'redux'

interface BadgeAction {
    type: 'ADD_BADGE' | 'NOTIFY_BADGE',
    payload: Badge
}



const badgeProvider = (dispatch: Dispatch<BadgeAction>) => {

    const badge = {
        letsGoBadge: () => {
            dispatch({ type: 'ADD_BADGE', payload: listOfImages[0] })
        },
        thirtyThreeBadge: () => {
            dispatch({ type: 'ADD_BADGE', payload: listOfImages[1] })
        },
        findTheMascot: () => {
            dispatch({ type: 'ADD_BADGE', payload: listOfImages[2] })
        },
        sixtySixBadge: () => {
            dispatch({ type: 'ADD_BADGE', payload: listOfImages[3] })
        },
        fastAchiever: () => {
            dispatch({ type: 'ADD_BADGE', payload: listOfImages[4] })
        },
        masterOfInterview: () => {
            dispatch({ type: 'ADD_BADGE', payload: listOfImages[5] })
        },
        winner: () => {
            dispatch({ type: 'ADD_BADGE', payload: listOfImages[6] })
        },
        fullPoints: () => {
            dispatch({ type: 'ADD_BADGE', payload: listOfImages[7] })
        },
        tactician: () => {
            dispatch({ type: 'ADD_BADGE', payload: listOfImages[8] })
        },
        medalCollector: () => {
            dispatch({ type: 'ADD_BADGE', payload: listOfImages[9] })
        },

    }


    return { badge }
}

export default badgeProvider 