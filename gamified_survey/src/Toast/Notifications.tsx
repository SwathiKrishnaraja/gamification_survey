import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Badge } from '../types/types'
type Props = {
    badges: Array<Badge>,
    showBadge: boolean,
    handleBadgeClose: () => void
}
const Notifications = (props: Props) => {
    const { badges, showBadge, handleBadgeClose } = props
    console.log(badges)
    useEffect(() => {
        setTimeout(() => {
            handleBadgeClose()
        }, 5000)
    })
    return (
        showBadge ? createPortal(
            <div className={`notification-container bottom-right`}>
                {
                    badges.map((badge) =>
                        <div
                            key={badge.id}
                            className={`notification toast bottom-right `}
                        >
                            <div className="toast">
                                <div className='toast-header'>
                                    <span style={{ marginLeft: 10 }}> You received a new badge !</span>
                                    <button onClick={handleBadgeClose} className="toast__close-btn">x</button>
                                </div>


                                <div className="toast__text">

                                    <img style={{ height: 60, marginRight: 10 }} src={badge.src} alt='badge' />
                                    <span>{badge.description}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>, document.body)
            : null
    )
}
export default Notifications 