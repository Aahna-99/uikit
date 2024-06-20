import { format } from 'date-fns';
import * as locales from 'date-fns/locale';
import { useContext } from 'react';

import { LanguageContext } from 'context';
import { LanguageData } from '../models/LanguageData';

const languageToLocale = (language: LanguageData): Locale => {
    switch (language.local) {
        case 'it':
        case 'de':
        case 'es':
        case 'ko':
        case 'pt':
        case 'fr':
            return locales[language.local];
        case 'ar':
            return locales.ar;
        case 'zh-CN':
            return locales.zhCN;
        case 'zh-TW':
            return locales.zhTW;
        case 'en':
        default:
            return locales.enUS;
    }
};

export type TranslateOptions = {
    name: string;
    defaultValue?: string;
    injectText?: string;
    removeObserver?: boolean;
    variables?: any;
};

export type TranslateFn = (options: TranslateOptions) => string;

export type DateFormatFn = (date: Date, formatString?: string) => string;

const evaluvateVariables = (translated_string: any, options: any) => {
    for (var key in options) {
        const value = options[key];
        if (value instanceof Object) {
            key = '@\\[' + key + '\\]';
            translated_string = translated_string.replace(
                new RegExp(key, 'g'),
                value.name,
            );
        } else {
            key = '{=' + key + '}';
            translated_string = translated_string.replace(
                new RegExp(key, 'g'),
                value,
            );
        }
    }
    return translated_string;
};

const useTranslations = () => {
    const { language } = useContext(LanguageContext);
    const t: TranslateFn = (options: TranslateOptions): string => {
        let translatedText =
            (language?.messages ?? {})[options.name] ||
            options.defaultValue ||
            options.name;

        if (options.variables) {
            translatedText = evaluvateVariables(
                translatedText,
                options.variables,
            );
        }
        return translatedText;
    };

    const locale = languageToLocale(language);

    const d: DateFormatFn = (
        date: Date,
        formatString: string = 'MMM dd',
    ): string => format(date, formatString, { locale });

    return {
        t,
        d,
    };
};
export default useTranslations;
