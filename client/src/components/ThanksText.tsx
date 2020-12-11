import React from 'react'
import styled from 'styled-components'

const Text = styled.span`
    font-weight: 400;
    padding:2px;
`

const Container = styled.div`
    margin:10px;
    text-align:center;
`
const ThanksText = () => {
    return (
        <Container>
            <h2 style={{ marginTop: -5 }}>Thank you ! </h2>
            <hr />
            <Text> You have successfully completed the survey. </Text>
            <br />
            <Text>In the next step, you will
            find a few debriefing questions on your survey experience. Please provide us with
            your honest opinion as it will be very important to us, and of great help for our
            research. Please click ‘Proceed’ to answer the debrief questions.</Text>
        </Container>
    )
}
export default ThanksText