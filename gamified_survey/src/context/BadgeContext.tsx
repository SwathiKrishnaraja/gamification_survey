import React, { createContext, useState, useReducer } from 'react'
import { Badge } from '../types/types'
import { reducer } from '../reducer/reducer'

type Props = {
    children: React.ReactNode
}
type BadgeContextType = {
    achievedBadge: Badge,
    dispatch: (args: any) => void
}

const defaultValue = {
    id: 1,
    src: '',
    description: '',
    name: ''
}

export const BadgeContext = createContext<BadgeContextType>({
    achievedBadge: defaultValue,
    dispatch: () => null
})


const BadgeProvider = ({ children }: Props) => {
    const [achievedBadge, dispatch] = useReducer(reducer,
        defaultValue
    )

    return (
        <BadgeContext.Provider value={{ achievedBadge, dispatch }} >
            {children}
        </BadgeContext.Provider>
    )
}

export default BadgeProvider
