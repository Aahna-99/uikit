import React, {
    FunctionComponent,
    useEffect,
    createContext,
    useState,
} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { globalScreens, initialRouteName } from 'utils/navigation/screens';
import GlobalLoader from './globalLoader';

import { NavigationRef } from './NavigationRef';
import { Stack } from './config';

import { UserPreference } from 'config';
import useTranslations from 'utils/hooks/useTranslations';

export const LoaderContext = createContext({
    showLoader: () => {},
    hideLoader: () => {},
});

const AppNavigation: FunctionComponent = () => {
    const { t } = useTranslations();

    const [loading, setLoading] = useState(false);

    const showLoader = () => setLoading(true);
    const hideLoader = () => setLoading(false);

    const init = async () => {
        await UserPreference.instance.setSubscriptions({});
    };

    useEffect(() => {
        init();
    }, []);

    const deeplinking = {
        prefixes: ['https://www.google.com', 'demo://app'],
        config: {
            UsersList: 'NoteEditor/:header',
        },
    };

    let getScreens = (screen): object => {
        let props = {
            ...screen,
            options: { ...screen.options, title: t(screen.title || '') },
        };

        return <Stack.Screen {...props} />;
    };

    let screens = new Array();

    screens.push(globalScreens.map((screen): any => getScreens(screen)));

    let getInitialRoute = () => {
        return 'Init';
    };

    return (
        <SafeAreaProvider>
            <LoaderContext.Provider value={{ showLoader, hideLoader }}>
                <NavigationContainer ref={NavigationRef} linking={deeplinking}>
                    <Stack.Navigator initialRouteName={getInitialRoute()}>
                        {screens}
                    </Stack.Navigator>
                </NavigationContainer>
                <GlobalLoader loading={loading} />
            </LoaderContext.Provider>
        </SafeAreaProvider>
    );
};

export default AppNavigation;
