import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { TranslatedComponentProps, withTranslations } from 'shared';
import { AppColors, UserPreference } from 'config';
import { Directory } from 'Directory';
import { DirectoryView } from 'views';

import { Stack, StackHome, StackActivity, StackFeed } from './config';

import TabBar from './TabBar';
import {
    activityScreens,
    feedScreens,
    appScreens,
    homeScreen,
    directoryScreens,
} from './screens';
import useBackHandler from '../hooks/useBackHandler';

import styles from './styles';
import { Portal } from 'react-native-paper';

export const StackMore = createStackNavigator<any>();
export const Tab = createBottomTabNavigator();

interface TabsProperty extends TranslatedComponentProps {
    route: any;
    navigation: any;
    t: any;
}

export const TabNavigation = () => {
    const { height, width } = Dimensions.get('window');
    const [showSocial, setShowSocial] = useState<boolean>(true);
    const [showDirectory, setShowDirectory] = useState<boolean>(true);
    const [showMore, setShowMore] = useState<boolean>(true);
    const [orientation, setOrientation] = useState<string>(
        height > width ? 'portrait' : 'landscape',
    );

    useEffect(() => {
        Dimensions.addEventListener('change', e => {
            const { width, height } = e.window;
            height < width
                ? setOrientation('landscape')
                : setOrientation('portrait');
        });

        const fetchSettings = async () => {
            const settings = await UserPreference.instance.getSettings();
            const {
                f_questions,
                f_ideas,
                f_knowledge,
                f_initiative,
                f_status_update,
                f_distribution_list,
                f_album,
                f_interest_groups,
                f_closed_groups,
                f_open_groups,
                f_feedback,
                f_praise,
            } = settings.features;

            setShowSocial(
                settings.apps.app_social &&
                    (f_status_update ||
                        f_questions ||
                        f_knowledge ||
                        f_ideas ||
                        f_initiative ||
                        f_distribution_list ||
                        f_album),
            );
            setShowDirectory(settings.apps.app_organization_chart);
            setShowMore(
                f_interest_groups ||
                    f_open_groups ||
                    f_closed_groups ||
                    f_feedback ||
                    f_praise ||
                    settings.apps.app_goals ||
                    settings.apps.app_pns ||
                    settings.apps.app_organization_chart,
            );
        };

        fetchSettings();
    }, []);

    return (
        <>
            <SafeAreaView style={[styles.header, styles[orientation]]} />
            <SafeAreaView style={[styles.mainHeader, styles[orientation]]}>
                <Portal.Host>
                    <Tab.Navigator
                        tabBarOptions={{
                            activeTintColor: AppColors.DarkBlue,
                            inactiveTintColor: AppColors.Gray2,
                        }}
                        tabBar={props => <TabBar {...props} />}>
                        <Tab.Screen
                            name="Home"
                            component={HomeNav}
                            options={{ unmountOnBlur: true }}
                        />
                        {showSocial && (
                            <Tab.Screen name="Social" component={FeedNav} />
                        )}
                        {showDirectory && (
                            <Tab.Screen
                                name="Directory"
                                component={DirectoryNav}
                            />
                        )}
                        {showMore && (
                            <Tab.Screen
                                name="Apps"
                                component={AppsNav}
                                options={{ unmountOnBlur: true }}
                                listeners={({ navigation }) => ({
                                    blur: () =>
                                        navigation.setParams({
                                            screen: undefined,
                                        }),
                                })}
                            />
                        )}
                    </Tab.Navigator>
                </Portal.Host>
            </SafeAreaView>
        </>
    );
};

const childNavigation = (
    mainScreens: any,
    stackScreen: any,
    t: any,
    navigation: any,
) => {
    useBackHandler(navigation);

    const screenComponent = (screen): any => {
        let props = {
            ...screen,
            options: { ...screen.options, title: t(screen.title || '') },
        };

        return <stackScreen.Screen {...props} />;
    };

    let screens = new Array();

    screens.push(mainScreens.map(screen => screenComponent(screen)));

    return <Stack.Navigator>{screens}</Stack.Navigator>;
};

export const HomeNav = withTranslations(({ t, navigation }: TabsProperty) =>
    childNavigation(homeScreen, StackHome, t, navigation),
);

export const ActivityNav = withTranslations(({ t, navigation }: TabsProperty) =>
    childNavigation(activityScreens, StackActivity, t, navigation),
);

export const FeedNav = withTranslations(({ t, navigation }: TabsProperty) =>
    childNavigation(feedScreens, StackFeed, t, navigation),
);

export const AppsNav = withTranslations(({ t, navigation }: TabsProperty) =>
    childNavigation(appScreens, StackMore, t, navigation),
);

export const DirectoryNav = withTranslations(
    ({ t, navigation }: TabsProperty) =>
        childNavigation(directoryScreens, StackMore, t, navigation),
);
