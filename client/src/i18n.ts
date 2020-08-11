import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translationEN as en } from './locales/en/translationEN'
import { translationDE as de } from './locales/de/translationDE'

const resources = {
  en, de
}
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de',
    fallbackLng: 'en'

  });

export default i18n;