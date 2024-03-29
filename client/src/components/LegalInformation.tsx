import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import MailTo from './MailTo'

const Title = styled.h3`
text-align: left;
margin:1px;
`

const Subtitle = styled.p`
font-weight:300;
margin:1px;
`
const SubHeading = styled.p`
font-weight:600;
padding-top:20px;
margin:1.5px;
`
const Content = styled.p`
text-align:left;
`
const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 90%;
  margin-top: 5px;
`

const AddressLine = styled.p`
margin:1.5px;
text-align:left;
`
const LegalInformation: React.FC = () => {
    return (
        <Container>
            <Title>Saarland University</Title>
            <Subtitle>Department of Computer Science</Subtitle>
            <Subtitle>Saarland Informatics Campus</Subtitle>

            <SubHeading>Contact Persons</SubHeading>
            <SubHeading>Swathi Krishnaraja</SubHeading>
            <AddressLine>Department of Computer Science</AddressLine>
            <AddressLine>Saarland Informatics Campus</AddressLine>
            <AddressLine>Stuhlsatzenhausweg 3</AddressLine>
            <AddressLine>D-66123 Saarbrücken</AddressLine>
            <AddressLine>Email:
                <MailTo email="s8swkris@stud.uni-saarland.de">
                    s8swkris@stud.uni-saarland.de
                </MailTo> </AddressLine>

        </Container >
    )
}
export default LegalInformation 