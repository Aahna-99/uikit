import { useState, useCallback } from 'react';

import { UserPreference } from 'config';

import { ILanguageContext } from 'context/LanguageContext';
import { LanguageData, AvailableLocale } from '../models/LanguageData';
import { Resources } from '../models/Resources';
import LocalizationServices from '../../../services/LocalizationServices';
import useEffectAsync from './useEffectAsync';

export const useLanguage: () => ILanguageContext = () => {
    const defaultLang: LanguageData = { local: 'en' };
    const [language, setLanguage] = useState(defaultLang);
    const { getLocal } = LocalizationServices();

    useEffectAsync(async () => {
        await UserPreference.instance.clearLink();
        UserPreference.instance.clearPush().then(async () => {
            try {
                // await UserPreference.instance.clearPush()
                const data = await UserPreference.instance.getLocal();

                let transformedData: LanguageData = data;

                console.log(
                    'TRYING TO SET LOCALE IN useLanguage',
                    data
                        ? 'UserPreference.instance.getLocal() returned data'
                        : 'no data',
                );
                if (!data || !data.messages) {
                    const backData = await getLocal(
                        data?.local || defaultLang.local,
                    );
                    const newData: LanguageData = {
                        local: defaultLang.local,
                        timestamp: new Date(),
                        messages: backData.data as Resources,
                    };
                    transformedData = newData;
                }

                console.log('TRYING TO SET LOCALE IN useLanguage');
                setCurrentLanguage(
                    transformedData.local,
                    transformedData.messages as Resources,
                );
            } catch (error) {
                console.error('useLanguage - failed fetching locale');
                console.log(error);
            }
        });
    }, []);

    const setCurrentLanguage = useCallback(
        async (lang: AvailableLocale, data: Resources) => {
            const newLanguage = {
                local: lang,
                messages: data,
                timestamp: new Date(),
            };
            await UserPreference.instance.setLocal(newLanguage);
            setLanguage(newLanguage);
        },
        [language],
    );

    return {
        language,
        setLanguage: setCurrentLanguage,
    };
};
