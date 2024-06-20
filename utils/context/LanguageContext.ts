import React from 'react';

import { LanguageData, AvailableLocale } from '../models/LanguageData';
import { Resources } from '../models/Resources';

export interface ILanguageContext {
    language: LanguageData;
    setLanguage: (key: AvailableLocale, data: Resources) => void;
}

const LanguageConfig: ILanguageContext = {
    language: { local: 'en' },
    setLanguage: (lang: AvailableLocale) => {},
};

export const LanguageContext: React.Context<ILanguageContext> =
    React.createContext(LanguageConfig);
