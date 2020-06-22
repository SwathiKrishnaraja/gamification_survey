import React from 'react'
import { createPortal } from 'react-dom'
import { NotificationsContent } from '../types/types'

const Notifications = ({ badgeDetail, showBadge, handleBadgeClose }: NotificationsContent) => {
    console.log(badgeDetail.src)
    return (
        showBadge ? createPortal(
            <div className="toasts-wrapper">
                <div className="toast">
                    <div className='toast-header'>
                        <span style={{ marginLeft: 10 }}> You received a new badge !</span>
                        <button onClick={handleBadgeClose} className="toast__close-btn">x</button>
                    </div>


                    <div className="toast__text">

                        <img style={{ height: 60, marginRight: 10 }} src={badgeDetail.src} alt='badge' />
                        <span>{badgeDetail.description}</span>
                    </div>
                </div>
            </div>,
            document.body)
            : null
    )
}
export default Notifications 