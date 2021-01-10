import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Title = styled.h3`
text-align: left;
`
const Content = styled.p`
text-align:left;
margin:1.5px;
`
const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 90%;
  margin-top: 5px;
`
const DataProtection: React.FC = () => {
    const { t } = useTranslation()
    return (
        <Container>
            <Title>{t('dataProtectionInformation.title1')}</Title>
            <Content>{t('dataProtectionInformation.content1')}</Content>
            <Title>{t('dataProtectionInformation.title11')}</Title>
            <Content>{t('dataProtectionInformation.content11')}</Content>
            <Title>Data collection</Title>
            <Content>
                After consent to the collection of data, the following data are collected and processed anonymously:
                <ul>
                    <li>Entries in the online survey</li>
                    <li>Few entries request personal information such as age, gender, city you live in, educational status, occupational status, and marital status. </li>

                </ul>
                All these attributes are anonymous and the true identity of the participant is never requested (ie name, email address, etc are not collected). Also, we do not match the IP addresses of users to the survey data. However, in this survey, we include certain open-ended questions (which does not ask for any personal information or data), where you are allowed to freely enter any data/ information. Therefore, if you enter personal data in such fields, we cannot identify them.<br /><br />
                For technical reasons, data such as the following, which your internet browser transmits to us or to our web space provider (so called server log files), is collected:
                <ul>
                    <li>type and version of the browser you use</li>
                    <li>operating system</li>
                    <li>websites that linked you to our site (referrer URL)</li>
                    <li>date and time of your visit</li>
                    <li>your Internet Protocol (IP) address</li>
                </ul>
                This anonymous data is not merged with the survey data.<br />
                On this website we use your browser's local storage to store the information regarding your visit to the survey website. Local storage is a web storage concept to persist user information within the browser. We use this local storage exclusively to exclude multiple participation. <br /> <br />
                We securely store this data until the end of this research project. We respect your trust and protect your privacy. Therefore, we will never sell or share this data with any third parties, and the collected data is purely used for scientific and research purposes only.
            </Content>
            <Title>Anonymization of data</Title>
            <Content>With the transfer of the collected data to our server, an anonymization takes place, which makes it practically impossible to assign the collected data to a person, as long as no personal data is entered in free text fields.</Content>

            <Title>What do we use your data for?</Title>
            <Content>The results and collected data can be processed and published in anonymous form in this
            Master's thesis and used for other research purposes (e.g., writing scientific papers) at the
            German Research Center for Artificial Intelligence (DFKI). In this sense the anonymous data set is shared with the DFKI.
            </Content>
            <Title>{t('dataProtectionInformation.title3')}</Title>
            <Content>{t('dataProtectionInformation.content3')}</Content>
            <Title>{t('dataProtectionInformation.title4')}</Title>
            <Content>{t('dataProtectionInformation.content4')}</Content>
        </Container>
    )
}
export default DataProtection 