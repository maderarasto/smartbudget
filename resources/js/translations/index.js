import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './lang/en';
import sk from './lang/sk';

const urlParams = new URLSearchParams(location.search);
const langParam = urlParams.get('lang');

i18n.use(initReactI18next)
    .init({
        debug: true,
        resources: {
            en,
            sk
        },
        lng: langParam ? langParam : navigator.language,
        fallbackLng: 'en'
    });

export default i18n;
