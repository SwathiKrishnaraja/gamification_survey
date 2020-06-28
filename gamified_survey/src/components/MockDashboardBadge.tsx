import React, { Fragment, Suspense } from 'react'
import { useTranslation } from 'react-i18next';
import { listOfImages } from '../components/DashboardComponent'

interface Badge {
    id: number
    src: any
    name: string,
    description: string
    isActive: boolean
}

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


const ShowBadge = ({ id, src, name, description, isActive }: Badge) => {
    let styles = 'inactive-badge'

    if (isActive) {
        styles = 'active-badge'
    }
    return (
        <div className='individual-badge'>
            <img className={styles} alt={name} src={src} />
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


export default Badges