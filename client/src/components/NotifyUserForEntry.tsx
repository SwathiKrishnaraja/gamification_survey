import React, { Fragment } from 'react'
import styled from 'styled-components'

const Message = styled.h4`
font-weight: 500;
margin-top: 9px;
`

const Warning = styled.h3`
margin-bottom: 1px;
margin-top: 2px;
color: #337ab7;
`
const NotifyUserForEntry = () => {
    return (
        <Fragment>
            <Warning>Information</Warning>
            <Message>Dear participant, You are allowed to take this survey only once.</Message>
        </Fragment>

    )
}

export default NotifyUserForEntry  