import { Resources } from './Resources';

export type AvailableLocale =
    | 'it'
    | 'de'
    | 'ar'
    | 'es'
    | 'zh-CN'
    | 'zh-TW'
    | 'ko'
    | 'pt'
    | 'fr'
    | 'en';

export type LanguageData = {
    local: AvailableLocale;
    timestamp?: Date;
    messages?: Resources;
};
