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
  margin-left: 20px;
  width: 90%;
  margin-top: 5px;
`
const DataProtection: React.FC = () => {
    const { t } = useTranslation()
    return (
        <Container>
            <Title>{t('dataProtectionInformation.title1')}</Title>
            <Content>{t('dataProtectionInformation.content1')}</Content>
            <Title>{t('dataProtectionInformation.title2')}</Title>
            <Content>{t('dataProtectionInformation.content2')}</Content>
            <Title>{t('dataProtectionInformation.title3')}</Title>
            <Content>{t('dataProtectionInformation.content3')}</Content>
            <Title>{t('dataProtectionInformation.title4')}</Title>
            <Content>{t('dataProtectionInformation.content4')}</Content>
        </Container>
    )
}
export default DataProtection 