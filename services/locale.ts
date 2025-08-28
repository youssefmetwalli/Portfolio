"use server";

import { cookies } from "next/headers";
import { locales, defaultLocale, type Locale } from "@/config";

const COOKIE_NAME = "NEXT_LOCALE";

export const getUserLocale = async (): Promise<Locale> => {
  const raw = cookies().get(COOKIE_NAME)?.value;

  // Normalize cases like "ja-JP" → "ja"
  const normalized = (raw || "").split("-")[0];

  return (locales as readonly string[]).includes(normalized)
    ? (normalized as Locale)
    : defaultLocale;
};

export const setUserLocale = async (locale: Locale) => {
  // Extra safety: only allow supported locales
  const value = (locales as readonly string[]).includes(locale) ? locale : defaultLocale;
  cookies().set(COOKIE_NAME, value);
};
