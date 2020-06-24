import React, { createContext, useState } from 'react'
import { Badge } from '../types/types'


type Props = {
    children: React.ReactNode
}
type BadgeContextType = {
    achievedBadge: Badge,
    addAchievedBadge: (badge: Badge) => void
}

const defaultValue = {
    id: 1,
    src: '',
    description: '',
    name: ''
}

export const BadgeContext = createContext<BadgeContextType>({
    achievedBadge: defaultValue,
    addAchievedBadge: (defaultValue) => { }
})



const BadgeProvider = ({ children }: Props) => {
    const [achievedBadge, setAchievedBadge] = useState<Badge>({
        id: 1,
        src: '',
        description: '',
        name: ''
    })
    const addAchievedBadge = (badge: Badge) => {
        setAchievedBadge({
            ...achievedBadge,
            ...badge
        })
    }

    return (
        <BadgeContext.Provider value={{ achievedBadge, addAchievedBadge }} >
            {children}
        </BadgeContext.Provider>
    )
}

export default BadgeProvider