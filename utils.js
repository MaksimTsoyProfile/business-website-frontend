import { host } from './backendApi';

export const getFullPath = (url) => [host, url].join('');

export const getDataByLocale = (data, locale) => {
  if (!data) return null;
  if (locale === data.attributes.locale) return data;
  return data.attributes.localizations.data.find((item) => item.attributes.locale === locale);
};
