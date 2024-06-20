import {
    ENGAGEDLY_APP_BUNDLE_ID,
    ENGAGEDLY_API_URL,
    ENGAGEDLY_APP_URL,
    ENGAGEDLY_SOCIAL_URL,
    ENGAGEDLY_ONESIGNAL_ID,
    ENGAGEDLY_MOCK_EMAIL,
    ENGAGEDLY_MOCK_PASS,
    ENGAGEDLY_MOCK_DOMAIN,
    ENGAGEDLY_APP_INISGHTS_ID,
} from '@env';
import * as React from 'react';

import { EngagedlyApp } from 'config/EngagedlyApp';
import {
    PendingActions,
    Social,
    Apps,
    Groups,
    Celebrations,
} from 'HomeWidgets';

export interface IAppContext {
    env: EngagedlyApp;
    homeWidgets: any;
}

const LoadConfig = (): EngagedlyApp => {
    console.log('ENGAGEDLY_ONESIGNAL_ID', ENGAGEDLY_ONESIGNAL_ID);
    console.log('ENGAGEDLY_APP_URL', ENGAGEDLY_APP_URL);
    const config = {
        httpProtocol: 'https://',
        appBundleId:
            ENGAGEDLY_APP_BUNDLE_ID || EngagedlyApp.SETTINGS.prod.appBundleId,
        apiUrl: ENGAGEDLY_API_URL || EngagedlyApp.SETTINGS.prod.apiUrl,
        socialUrl: ENGAGEDLY_SOCIAL_URL || EngagedlyApp.SETTINGS.prod.socialUrl,
        applicationUrl:
            ENGAGEDLY_APP_URL || EngagedlyApp.SETTINGS.prod.applicationUrl,
        oneSignalId:
            ENGAGEDLY_ONESIGNAL_ID || EngagedlyApp.SETTINGS.prod.oneSignalId,
        mockData: {
            login: {
                email:
                    ENGAGEDLY_MOCK_EMAIL ||
                    EngagedlyApp.SETTINGS.prod.mockData?.login.email,
                pass:
                    ENGAGEDLY_MOCK_PASS ||
                    EngagedlyApp.SETTINGS.prod.mockData?.login.pass,
                domain:
                    ENGAGEDLY_MOCK_DOMAIN ||
                    EngagedlyApp.SETTINGS.prod.mockData?.login.domain,
            },
        },
        aiInstrumentationKey:
            ENGAGEDLY_APP_INISGHTS_ID ||
            EngagedlyApp.SETTINGS.prod.aiInstrumentationKey,
    };

    console.log('AppContext -> ', config);
    return config;
};

export const AppConfig: IAppContext = {
    env: LoadConfig(),
    homeWidgets: {
        PendingActions,
        Social,
        Apps,
        Groups,
        Celebrations,
    },
};

export const AppContext: React.Context<IAppContext> =
    React.createContext(AppConfig);
