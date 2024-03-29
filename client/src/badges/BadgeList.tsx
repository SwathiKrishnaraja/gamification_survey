import First from './1.png'
import Second from './2.png'
import Third from './3.png'
import Fourth from './4.png'
import Fifth from './5.png'
import Sixth from './6.png'
import Seventh from './7.png'
import Eight from './8.png'
import Ninth from './9.png'
import Tenth from './10.png'
import { Badge } from '../types/types'
import mockImage1 from './guidedTour/1.png'
import mockImage2 from './guidedTour/2.png'
import mockImage3 from './guidedTour/3.png'
import mockImage4 from './guidedTour/4.png'
import mockImage5 from './guidedTour/5.png'
import mockImage6 from './guidedTour/6.png'
import mockImage7 from './guidedTour/7.png'
import mockImage8 from './guidedTour/8.png'
import mockImage9 from './guidedTour/9.png'
import mockImage10 from './guidedTour/10.png'

export const listOfBadges = [First, Second, Third, Fourth, Fifth, Sixth, Seventh, Eight, Ninth, Tenth]
export const listOfMockBadges = [mockImage1, mockImage2, mockImage3, mockImage4, mockImage5, mockImage6, mockImage7, mockImage8, mockImage9, mockImage10]

export const listOfImages: Array<Badge> = [
    {
        id: 101,
        src: First,
        name: "Let's go !",
        description: 'Start the survey',
        isAchieved: false,
        isNotified: false,
    },
    {
        id: 102,
        src: Second,
        name: "33% Achieved",
        description: 'Answer 33% of the questions',
        isAchieved: false,
        isNotified: false,
    },
    {
        id: 103,
        src: Third,
        name: "Sherlock Holmes",
        description: 'Find the mascot',
        isAchieved: false,
        isNotified: false,
    },
    {
        id: 104,
        src: Fourth,
        name: "66% Achieved",
        description: 'Answer 66% of the questions',
        isAchieved: false,
        isNotified: false,
    },
    {
        id: 105,
        src: Fifth,
        name: "Fast Achiever",
        description: 'Reach the last 5 questions',
        isAchieved: false,
        isNotified: false,
    },
    {
        id: 106,
        src: Sixth,
        name: "Master of Interview",
        description: 'Answer the interview questions (questions: 20 - 30)',
        isAchieved: false,
        isNotified: false,
    },
    {
        id: 107,
        src: Seventh,
        name: "Winner",
        description: 'Complete the survey',
        isAchieved: false,
        isNotified: false,
    },
    {
        id: 108,
        src: Eight,
        name: "Full Points",
        description: 'Answer all questions including the open ones',
        isAchieved: false,
        isNotified: false,
    },
    {
        id: 109,
        src: Ninth,
        name: "Tactician",
        description: 'Takes at least 3 minutes for each page',
        isAchieved: false,
        isNotified: false,
    },
    {
        id: 110,
        src: Tenth,
        name: "Medal Collector",
        description: 'Collect all badges',
        isAchieved: false,
        isNotified: false,
    },
]

export const listOfMockImages: Array<Badge> = [
    {
        id: 201,
        src: mockImage1,
        name: "Head-start",
        description: 'Start the survey',
        isAchieved: false,
        isNotified: false,
    },
    {
        id: 202,
        src: mockImage2,
        name: "Pusher",
        description: 'Answer 33% of the questions',
        isAchieved: false,
        isNotified: false,
    },
    {
        id: 203,
        src: mockImage3,
        name: "With a purpose",
        description: 'Find the mascot',
        isAchieved: false,
        isNotified: false,
    },
    {
        id: 204,
        src: mockImage4,
        name: "Go-getter",
        description: 'Answer 66% of the questions',
        isAchieved: false,
        isNotified: false,
    },
    {
        id: 205,
        src: mockImage5,
        name: "Reacher",
        description: 'Reach the last 5 questions',
        isAchieved: false,
        isNotified: false,
    },
    {
        id: 206,
        src: mockImage6,
        name: "I am a Star",
        description: 'Answer the interview questions',
        isAchieved: false,
        isNotified: false,
    },
    {
        id: 207,
        src: mockImage7,
        name: "Winner",
        description: 'Complete the survey',
        isAchieved: false,
        isNotified: false,
    },
    {
        id: 208,
        src: mockImage8,
        name: "Full Points",
        description: 'Answer all questions including the open ones',
        isAchieved: false,
        isNotified: false,
    },
    {
        id: 209,
        src: mockImage9,
        name: "Grandmaster",
        description: 'Takes at least 30 seconds for each question',
        isAchieved: false,
        isNotified: false,
    },
    {
        id: 210,
        src: mockImage10,
        name: "Midas touch",
        description: 'Collect all badges',
        isAchieved: false,
        isNotified: false,
    },
]