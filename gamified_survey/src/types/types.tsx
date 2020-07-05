export interface Questions {
    type: 'checkbox' | 'radiogroup' | 'matrix' | 'text' | 'rating',
    name: string,
    title: string,
    columns?: Array<MatrixObject>
    rows?: Array<MatrixObject>
    choices?: Array<string>,
    isRequired?: boolean,
    hasSelectAll?: true,
    minRateDescription?: string,
    maxRateDescription?: string

}

export interface MatrixObject {
    value: number | string
    text: string
}

export interface NotificationsContent {
    badgeDetail: BadgeDetail
    showBadge: boolean
    handleBadgeClose: () => void
}

export interface BadgeDetail {
    src: any
    description: string
}

export interface Badge {
    id: number
    src: any
    name: string,
    description: string
    isAchieved: boolean
    isNotified: boolean
}
