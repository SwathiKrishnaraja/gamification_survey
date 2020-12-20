import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { PointsDetails } from '../types/types'
type Props = {
    points: Array<PointsDetails>,
    showPoints: boolean,
    handleClose: () => void
}
const PointsNotifications = (props: Props) => {
    const { points, showPoints, handleClose } = props
    useEffect(() => {
        setTimeout(() => {
            handleClose()
        }, 5000)
    })
    return (
        showPoints ? createPortal(
            <div className={`notification-container bottom-right`}>
                {
                    points.map((point) =>
                        <div
                            key={point.id}
                            className={`notification toast bottom-right `}
                        >
                            <div className="toast">
                                <div className='toast-header'>
                                    <span style={{ marginLeft: 10 }}> You received 100 points!</span>
                                    <button onClick={handleClose} className="toast__close-btn">x</button>
                                </div>


                                <div className="toast__text">

                                    <img style={{ height: 60, marginRight: 10 }} src={point.src} alt='point' />
                                    <span>{point.description}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>, document.body)
            : null
    )
}
export default PointsNotifications 