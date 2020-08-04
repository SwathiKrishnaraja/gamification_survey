import React from 'react'

interface Props {
    showModal: boolean
    handleClick: () => void
    children: React.ReactNode
    title: string
}
const ImprintModal: React.FC<Props> = ({ showModal, handleClick, children, title }) => {
    const modalCss = showModal ? 'modal-open' : 'modal-close'
    return (
        <div data-testid='modal' className={modalCss}>
            <section className='modalMain'>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <span></span>
                    <h1 style={{ margin: 10 }}>{title}</h1>
                    <button className='x-styled-close' onClick={handleClick}>x</button>
                </div >
                <hr />
                {children}
                <hr />
                <button style={{ marginBottom: 10 }} onClick={handleClick}> Close</button>
            </section>

        </div>
    )
}
export default ImprintModal
