import i18n from 'i18next';

const param = {
  whitelist: ['en', 'ko'],
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',

  interpolation: {
    escapeValue: false // not needed for react!!
  }
};

// hmr
if (__DEVELOPMENT__) {
  param.resources = {
    en: {
      common: require('../locales/en/common.json')
    },
    ko: {
      common: require('../locales/ko/common.json')
    }
  };
}

// init
i18n
  .init(param);

export default i18n;
