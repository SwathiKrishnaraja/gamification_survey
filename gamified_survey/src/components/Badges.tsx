import React, { Fragment, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { listOfImages } from '../badges/BadgeList'
import ShowBadge from '../components/ShowBadges'
import { useSelector } from 'react-redux';

const Badges = () => {
    const { t } = useTranslation()
    const triggerRender = useSelector(state => state)

    useEffect(() => {
    }, [triggerRender])

    return (
        <Fragment>
            <div className='Badges-div'>
                <h2>{t('badges.title')}</h2>
                {listOfImages.map(element =>
                    <ShowBadge key={element.id} {...element} />
                )}
            </div>
            <hr style={{ width: '100%' }} />
        </Fragment>
    )
}

export default Badges