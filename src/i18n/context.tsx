import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { LOCALES, translations, type Locale } from "./translations";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("cf-locale") as Locale | null) : null;
    if (stored && LOCALES.some((l) => l.code === stored)) setLocaleState(stored);
  }, []);

  const dir = useMemo(() => LOCALES.find((l) => l.code === locale)?.dir ?? "ltr", [locale]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("lang", locale);
    document.documentElement.setAttribute("dir", dir);
  }, [locale, dir]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem("cf-locale", l); } catch {}
  };

  const t = useMemo(() => {
    const dict = translations[locale];
    return (key: string) => dict[key] ?? translations.fr[key] ?? key;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t, dir }), [locale, t, dir]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function useT() {
  return useI18n().t;
}