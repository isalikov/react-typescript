import en from '@app/i18/en'

export type I18 = typeof en
export type TranslationDictionary = keyof I18
export const enum Locale {
    'en' = 'en',
    'es' = 'es',
}
