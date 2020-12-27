import { listOfImages } from '../PointRules/PointsDetails'
import { Points, PointsDetails } from '../types/types'
import { Dispatch } from 'redux'

type AddPointsActionType = {
    type: 'ADD_POINTS' | 'NOTIFY_POINTS',
    payload: PointsDetails
}



const pointsProvider = (dispatch: Dispatch<AddPointsActionType>) => {

    const points = {
        letsGoPoints: () => {
            dispatch({ type: 'ADD_POINTS', payload: listOfImages[0] })
        },
        thirtyThreePoints: () => {
            dispatch({ type: 'ADD_POINTS', payload: listOfImages[1] })
        },
        findTheMascot: () => {
            dispatch({ type: 'ADD_POINTS', payload: listOfImages[2] })
        },
        sixtySixPoints: () => {
            dispatch({ type: 'ADD_POINTS', payload: listOfImages[3] })
        },
        fastAchiever: () => {
            dispatch({ type: 'ADD_POINTS', payload: listOfImages[4] })
        },
        masterOfInterview: () => {
            dispatch({ type: 'ADD_POINTS', payload: listOfImages[5] })
        },
        winner: () => {
            dispatch({ type: 'ADD_POINTS', payload: listOfImages[6] })
        },
        fullPoints: () => {
            dispatch({ type: 'ADD_POINTS', payload: listOfImages[7] })
        },
        tactician: () => {
            dispatch({ type: 'ADD_POINTS', payload: listOfImages[8] })
        },
        medalCollector: () => {
            dispatch({ type: 'ADD_POINTS', payload: listOfImages[9] })
        },

    }


    return { points }
}

export default pointsProvider 