import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(() => localStorage.getItem('xiangfu-locale') || 'zh');

  useEffect(() => {
    localStorage.setItem('xiangfu-locale', locale);
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, toggleLocale: () => setLocale((v) => (v === 'zh' ? 'en' : 'zh')) }), [locale]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider');
  return value;
}

export function localize(value, locale) {
  if (value == null) return '';
  if (typeof value === 'string' || typeof value === 'number') return value;
  return value[locale] ?? value.zh ?? value.en ?? '';
}

export function useT() {
  const { locale } = useLanguage();
  return (value) => localize(value, locale);
}
