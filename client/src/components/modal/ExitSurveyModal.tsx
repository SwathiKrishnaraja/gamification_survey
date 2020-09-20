import React from 'react'

interface Props {
    showModal: boolean
    handleCancelButton: () => void,
    handleConfirmationButton: () => void,
    children: React.ReactNode
    modalWindowButton: string
    styleClass: string
    modalCancelButton?: string
    buttonClass: string
}
const ExitSurveyModal: React.FC<Props> = ({ showModal, handleCancelButton, handleConfirmationButton, children, modalWindowButton, styleClass, modalCancelButton, buttonClass }) => {
    const modalCss = showModal ? 'modal-open' : 'modal-close'
    return (
        <div className={modalCss}>
            <section className={styleClass}>
                {children}
                <div style={modalCancelButton ? { display: 'flex', justifyContent: 'flex-end' } : {}}>
                    {modalCancelButton ? <button className={buttonClass} onClick={handleCancelButton}> {modalCancelButton}</button> : null}
                    <button className={buttonClass} onClick={handleConfirmationButton}> {modalWindowButton}</button>
                </div>
            </section>

        </div>
    )
}
export default ExitSurveyModal
