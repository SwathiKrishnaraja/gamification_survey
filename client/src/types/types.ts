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
    maxRateDescription?: string,
    isAllRowRequired?: boolean,
    description?: string

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

export type SurveyQuestionsType = {
    [key: string]: string
}

export type OpenQuestions = {
    [key: string]: string | number
}

export type SurveyDataType = {
    survey_mode: string,
    presurvey: SurveyQuestionsType,
    mainsurvey: SurveyQuestionsType,
    postsurvey: SurveyQuestionsType
    char_count: Array<OpenQuestions>,
    average_time: number,
    time_taken: number,
    badges?: number,
    points?: number,
    leaderboard_position?: number,
    narratives_unlocked?: number,
    browser: string
}