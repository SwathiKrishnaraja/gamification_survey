import React, { Fragment, Suspense } from 'react'
import { useTranslation } from 'react-i18next';
import { Badge } from '../types/types'
import { listOfImages } from '../badges/BadgeList'
import ShowBadge from '../components/ShowBadges'

const Badges = () => {
    const { t } = useTranslation()
    return (
        <Fragment>
            <div className='Badges-div'>
                <h2>{t('badges.title')}</h2>
                {listOfImages.map(element =>
                    <ShowBadge key={Math.random()} {...element} />
                )}
            </div>
            <hr style={{ width: '100%' }} />
        </Fragment>
    )
}

export default Badges