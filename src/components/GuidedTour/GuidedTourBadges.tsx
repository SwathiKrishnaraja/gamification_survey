import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next';
import { listOfMockImages } from '../../badges/BadgeList'
import ShowBadge from '../ShowBadges'

const GuidedTourBadges = () => {
    const { t } = useTranslation()
    return (
        <Fragment>
            <div className='Badges-div'>
                <h2>{t('badges.title')}</h2>
                {listOfMockImages.map(element =>
                    <ShowBadge key={Math.random()} {...element} />
                )}
            </div>
            <hr style={{ width: '100%' }} />
        </Fragment>
    )
}

export default GuidedTourBadges