import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

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
            <Title>Deutsches Forschungszentrum für Künstliche Intelligenz GmbH (DFKI) </Title>
            <Subtitle> (German Research Center for Artificial Intelligence)</Subtitle>

            <SubHeading>Postal Address</SubHeading>
            <AddressLine>Postfach 20 80 </AddressLine>
            <AddressLine>67608 Kaiserslautern</AddressLine>
            <AddressLine>Germany</AddressLine>
            <a style={{ textAlign: "left" }} href="info@dfki.de">info@dfki.de</a>

            <SubHeading>Kaiserslautern Site</SubHeading>
            <AddressLine>Trippstadter Str. 122 </AddressLine>
            <AddressLine>67663 Kaiserslautern</AddressLine>
            <AddressLine>Germany</AddressLine>
            <AddressLine>Phone: +49 631 20575 0</AddressLine>
            <AddressLine>Fax: +49 631 20575 5030</AddressLine>

            <SubHeading>Saarbrücken Site</SubHeading>
            <AddressLine>Campus D3_2 </AddressLine>
            <AddressLine>Stuhlsatzenhausweg 3</AddressLine>
            <AddressLine>66123 Saarbrücken</AddressLine>
            <AddressLine>Germany</AddressLine>
            <AddressLine>Phone: +49 681 85775 0</AddressLine>
            <AddressLine>Fax: +49 681 85775 5341</AddressLine>

            <SubHeading>Bremen Site</SubHeading>
            <AddressLine>Robert-Hooke-Straße 1</AddressLine>
            <AddressLine>28359 Bremen</AddressLine>
            <AddressLine>Germany</AddressLine>
            <AddressLine>Phone: +49 421 17845 0</AddressLine>
            <AddressLine>Fax: +49 421 17845 4150</AddressLine>

            <SubHeading>DFKI Project Office Berlin </SubHeading>
            <AddressLine>Alt-Moabit 91c</AddressLine>
            <AddressLine>10559 Berlin</AddressLine>
            <AddressLine>Germany</AddressLine>
            <AddressLine>Phone: +49 30 23895 0</AddressLine>

            <SubHeading>Management</SubHeading>
            <AddressLine>Prof. Dr. Antonio Krüger</AddressLine>

            <SubHeading>Head of Supervisory Board</SubHeading>
            <AddressLine>Dr.-Ing. Gabriël Clemens</AddressLine>
            <AddressLine>Register Court: Amtsgericht Kaiserslautern</AddressLine>
            <AddressLine>Register Number: HRB 2313</AddressLine>


            <span>
                <SubHeading>ID-Number:</SubHeading>
                <AddressLine>DE 148 646 973</AddressLine>
            </span>




        </Container>
    )
}
export default LegalInformation 