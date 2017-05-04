import i18n from 'i18next';
import Backend from 'i18next-node-fs-backend';
import { LanguageDetector } from 'i18next-express-middleware';

const param = {
  whitelist: ['en', 'ko'],
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',

  debug: false,

  interpolation: {
    escapeValue: false // not needed for react!!
  },

  backend: {
    loadPath: 'locales/{{lng}}/{{ns}}.json',
    jsonIndent: 2
  }
};

// init
i18n
  .use(Backend)
  .use(LanguageDetector)
  .init(param);

export default i18n;
