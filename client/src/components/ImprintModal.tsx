import React from 'react'
import styled from 'styled-components'

interface Props {
    showModal: boolean
    handleClick: () => void
    children: React.ReactNode
    title: string
}

const CloseButton = styled.button`
    margin-bottom: 10px;
    width: 100px;
    font-size: medium;
    background: #337ab7;
    color: white;
    border-radius: 3px;
    padding: 5px;
`
const CustomSpan = styled.span`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
const CustomDiv = styled.div`
    width: 100%;
`

const ImprintModal: React.FC<Props> = ({ showModal, handleClick, children, title }) => {
    const modalCss = showModal ? 'modal-open' : 'modal-close'

    const modal = document.getElementsByClassName('modal-open')

    window.onclick = (event: MouseEvent) => {
        if (event.target === modal[0]) {
            handleClick()
        }
    }

    return (
        <div id='modal' data-testid='modal' className={modalCss}>
            <div className='modalMain'>
                <CustomDiv>
                    <CustomSpan>
                        <h1 style={{ margin: 10, marginLeft: 150 }}>{title}</h1>
                        <button className='x-styled-close' onClick={handleClick}>x</button>
                    </CustomSpan>
                </CustomDiv >
                <hr />
                {children}
                <hr />
                <CloseButton onClick={handleClick}> Close</CloseButton>
            </div>

        </div>
    )
}
export default ImprintModal
