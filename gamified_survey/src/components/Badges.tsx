import React, { Fragment } from 'react'
import First from '../badges/First.png'
import Second from '../badges/Second.png'
import Third from '../badges/Third.png'
import Fourth from '../badges/Fourth.png'
import Fifth from '../badges/Fifth.png'
import Sixth from '../badges/Sixth.png'
import Seventh from '../badges/Seventh.png'
import Eight from '../badges/Eight.png'
import Ninth from '../badges/Ninth.png'
import Tenth from '../badges/Tenth.png'
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