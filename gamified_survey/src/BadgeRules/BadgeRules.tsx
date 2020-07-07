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
        sixtySixBadge: () => {
            dispatch({ type: 'ADD_BADGE', payload: listOfImages[3] })
        },
        winner: () => {
            dispatch({ type: 'ADD_BADGE', payload: listOfImages[6] })
        },
        fullPoints: () => {
            dispatch({ type: 'ADD_BADGE', payload: listOfImages[7] })
        }

    }


    return { badge }
}

export default badgeProvider 