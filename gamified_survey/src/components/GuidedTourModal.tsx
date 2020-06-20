import React from 'react'

interface Props {
    showModal: boolean
    handleClick: () => void
    children: React.ReactNode
    modalWindowButton: string
}
const GuidedTourModal: React.FC<Props> = ({ showModal, handleClick, children, modalWindowButton }) => {
    console.log(showModal)
    const modalCss = showModal ? 'modal-open' : 'modal-close'
    return (
        <div className={modalCss}>
            <section className='guided-modal-main'>
                <h2>{children}</h2>
                <button className='continue-button' onClick={handleClick}> {modalWindowButton}</button>
            </section>

        </div>
    )
}
export default GuidedTourModal
