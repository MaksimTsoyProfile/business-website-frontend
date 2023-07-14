const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['en', 'ru', 'uz'],
  },
  localePath: path.resolve('./public/locales'),
  nonExplicitSupportedLngs: true,
}
