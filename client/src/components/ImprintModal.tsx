import React from 'react'
import styled from 'styled-components'

interface Props {
    showModal: boolean
    handleClick: () => void
    children: React.ReactNode
    title: string
}

const CloseButton = styled.button`
    margin-bottom: 9px;
    width: 100px;
    font-size: medium;
    background: #337ab7;
    color: white;
    border-radius: 3px;
    padding: 5px;
`

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
                    <span>
                        <h1 style={{ margin: 10 }}>{title}</h1>
                        {/* <button className='x-styled-close' onClick={handleClick}>x</button> */}
                    </span>
                </div >
                <hr />
                {children}
                <hr />
                <CloseButton style={{ marginBottom: 10 }} onClick={handleClick}> Close</CloseButton>
            </section>

        </div>
    )
}
export default ImprintModal
