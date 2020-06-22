import React, { Fragment, Suspense } from 'react'
import First from '../badges/1.png'
import Second from '../badges/2.png'
import Third from '../badges/3.png'
import Fourth from '../badges/4.png'
import Fifth from '../badges/5.png'
import Sixth from '../badges/6.png'
import Seventh from '../badges/7.png'
import Eight from '../badges/8.png'
import Ninth from '../badges/9.png'
import Tenth from '../badges/10.png'
import { useTranslation } from 'react-i18next';
import { Badge } from '../types/types'

const listOfImages: Array<Badge> = [
    {
        src: First,
        name: "Let's go !",
        description: 'Start the survey'
    },
    {
        src: Second,
        name: "33% Achieved",
        description: 'Answer 33% of the questions'
    },
    {
        src: Third,
        name: "Audience favorite",
        description: 'Find the mascot'
    },
    {
        src: Fourth,
        name: "66% Achieved",
        description: 'Answer 66% of the questions'
    },
    {
        src: Fifth,
        name: "Fast Achiever",
        description: 'Reach the last 5 questions'
    },
    {
        src: Sixth,
        name: "Master of Interview",
        description: 'Answer the interview questions'
    },
    {
        src: Seventh,
        name: "Winner",
        description: 'Complete the survey'
    },
    {
        src: Eight,
        name: "Full Points",
        description: 'Answer all questions including the open ones'
    },
    {
        src: Ninth,
        name: "Tactician",
        description: 'Takes at least 30 seconds for each question'
    },
    {
        src: Tenth,
        name: "Medal Collector",
        description: 'Collect all badges'
    },
]

const ShowBadge = ({ src, name, description }: Badge) => {
    return (
        <div className='individual-badge'>
            <img alt='letsGo' src={src} />
            <span className='badge-tooltip'>
                <b>
                    {name}
                </b>
                <br />
                {description}
            </span>
        </div>
    )
}


const Badges = () => {
    const { t } = useTranslation()
    return (
        <Fragment>
            <div className='Badges-div'>
                <h2>{t('badges.title')}</h2>
                {listOfImages.map(element =>
                    <ShowBadge {...element} />
                )}
            </div>
            <hr style={{ width: '100%' }} />
        </Fragment>
    )
}
export default Badges