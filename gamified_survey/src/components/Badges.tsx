import React, { Fragment, Suspense, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Badge } from '../types/types'
import { listOfImages } from '../badges/BadgeList'
import ShowBadge from '../components/ShowBadges'
import { useStore } from 'react-redux';

const Badges = () => {
    const { t } = useTranslation()
    const store = useStore()
    const [storeChanged, setStoreChanged] = useState(false)
    const handleSubscribe = () => {
        setStoreChanged(storeChanged ? false : true)
    }
    store.subscribe(handleSubscribe)

    useEffect(() => {
    }, [storeChanged])
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