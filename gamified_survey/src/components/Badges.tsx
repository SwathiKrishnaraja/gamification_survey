import React, { Fragment } from 'react'
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

const Badges = () => {
    const { t } = useTranslation()
    return (
        <Fragment>
            <div className='Badges-div'>
                <h2>{t('badges.title')}</h2>
                <img alt='letsGo' src={First} />
                <img alt='letsGo' src={Second} />
                <img alt='letsGo' src={Third} />
                <img alt='letsGo' src={Fourth} />
                <img alt='letsGo' src={Fifth} />
                <img alt='letsGo' src={Sixth} />
                <img alt='letsGo' src={Seventh} />
                <img alt='letsGo' src={Eight} />
                <img alt='letsGo' src={Ninth} />
                <img alt='letsGo' src={Tenth} />
            </div>
            <hr style={{ width: '100%' }} />
        </Fragment>
    )
}
export default Badges