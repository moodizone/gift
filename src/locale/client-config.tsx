"use client";
import * as React from "react";
import i18next from "i18next";
import { initReactI18next, I18nextProvider as IP } from "react-i18next";
import { useAsync } from "react-use";
import Cookies from "js-cookie";

import { options } from "@/locale/options";
import { getLanguage } from "@/lib/settings";

i18next.use(initReactI18next).init(options);

export function I18nextProvider({ children }: React.PropsWithChildren) {
  const { value } = useAsync(async () => {
    const lang = getLanguage(Cookies.get("language"));
    await i18next.changeLanguage(lang);
    return true;
  }, []);
  return <IP i18n={i18next}>{value ? children : null}</IP>;
}

export default i18next;
