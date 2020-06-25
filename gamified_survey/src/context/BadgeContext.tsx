import React, { createContext, useState, useReducer } from 'react'
import { Badge } from '../types/types'
import { addBadgeReducer } from '../reducer/reducer'

type Props = {
    children: React.ReactNode
}
type BadgeContextType = {
    achievedBadge: Array<Badge>,
    dispatch: (args: any) => void
}

const defaultValue = {
    id: 1,
    src: '',
    description: '',
    name: '',
}

export const BadgeContext = createContext<BadgeContextType>({
    achievedBadge: [defaultValue],
    dispatch: (defaultValue) => []
})


const BadgeProvider = ({ children }: Props) => {
    const [achievedBadge, dispatch] = useReducer(addBadgeReducer,
        [defaultValue]
    )

    return (
        <BadgeContext.Provider value={{ achievedBadge, dispatch }} >
            {children}
        </BadgeContext.Provider>
    )
}

export default BadgeProvider
