/**
 * Locales management system
 * set up a default locale with defaultLocale
 * set up current locale with locale
 * set up an object with all locales with translations
 * set up fallback
 * see i18n-js for more information
 */

import { I18n } from 'i18n-js';
import en from './en';

const i18n = new I18n({ en });

i18n.defaultLocale = 'en';
i18n.locale = 'en';
i18n.fallbacks = true;

/**
 * @property t()
 */

export default i18n;
