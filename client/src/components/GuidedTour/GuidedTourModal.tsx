import React from 'react'

interface Props {
    showModal: boolean
    handleClick: () => void
    children: React.ReactNode
    modalWindowButton: string
    styleClass: string
    modalCancelButton?: string
    buttonClass: string
}
const GuidedTourModal: React.FC<Props> = ({ showModal, handleClick, children, modalWindowButton, styleClass, modalCancelButton, buttonClass }) => {
    const modalCss = showModal ? 'modal-open' : 'modal-close'
    return (
        <div className={modalCss}>
            <section className={styleClass}>
                {children}
                <div style={modalCancelButton ? { display: 'flex', justifyContent: 'flex-end' } : {}}>
                    {modalCancelButton ? <button className={buttonClass} onClick={handleClick}> {modalCancelButton}</button> : null}
                    <button className={buttonClass} onClick={handleClick}> {modalWindowButton}</button>
                </div>
            </section>

        </div>
    )
}
export default GuidedTourModal
