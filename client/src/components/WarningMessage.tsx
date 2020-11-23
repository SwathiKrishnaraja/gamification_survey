import React, { Fragment } from 'react'
import styled from 'styled-components'

const Message = styled.h4`
font-weight: 500;
margin-top: 9px;
`

const Warning = styled.h3`
margin-bottom: 1px;
margin-top: 2px;
color: red;
`
const WarningMessage = () => {
    return (
        <Fragment>
            <Warning>Attention!</Warning>
            <Message>This application is not supported for mobile browsers. Please use a bigger screen for participating in the survey. Thanks for your understanding.</Message>
        </Fragment>

    )
}

export default WarningMessage