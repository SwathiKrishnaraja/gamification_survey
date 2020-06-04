import React from 'react'

interface Props {
    showModal: boolean
    handleClick: () => void
    children: React.ReactNode
}
const ImprintModal: React.FC<Props> = ({ showModal, handleClick, children }) => {
    console.log(showModal)
    const modalCss = showModal ? 'modal-open' : 'modal-close'
    return (
        <div className={modalCss}>
            <section className='modalMain'>
                {children}
                <hr />
                <button style={{ marginBottom: 10 }} onClick={handleClick}> Close</button>
            </section>

        </div>
    )
}
export default ImprintModal
