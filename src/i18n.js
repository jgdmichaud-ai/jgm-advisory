const STORAGE_KEY = 'jgma.locale';

function canUseStorage() {
  try {
    window.localStorage.setItem('__jgma_test__', '1');
    window.localStorage.removeItem('__jgma_test__');
    return true;
  } catch {
    return false;
  }
}

export function createI18n({ translations, defaultLocale = 'fr' }) {
  const supportedLocales = Object.keys(translations);
  const storageAvailable = canUseStorage();

  const normalizeLocale = (locale) => {
    if (!locale) return defaultLocale;
    const normalized = String(locale).toLowerCase().split('-')[0];
    return supportedLocales.includes(normalized) ? normalized : defaultLocale;
  };

  const getInitialLocale = () => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('lang')) return normalizeLocale(params.get('lang'));
    if (storageAvailable) return normalizeLocale(window.localStorage.getItem(STORAGE_KEY));
    return defaultLocale;
  };

  let locale = getInitialLocale();

  return {
    get locale() {
      return locale;
    },
    setLocale(nextLocale) {
      locale = normalizeLocale(nextLocale);

      if (storageAvailable) {
        window.localStorage.setItem(STORAGE_KEY, locale);
      }

      const url = new URL(window.location.href);
      if (locale === defaultLocale) url.searchParams.delete('lang');
      else url.searchParams.set('lang', locale);
      window.history.replaceState({}, '', url);
    },
    t() {
      return translations[locale] ?? translations[defaultLocale];
    }
  };
}
