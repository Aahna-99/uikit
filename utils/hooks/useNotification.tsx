import { useContext } from 'react';
import { Linking } from 'react-native';
import { useDispatch } from 'react-redux';

import { AppContext } from '../context/AppContext';
import { INotificationContext } from '../context/NotificationContext';
import * as NavigationRef from '../navigation/NavigationRef';
// import ActivityService from '../../../services/ActivitiesService';
import ActivityService from '../../../v2/services/ActivityService';
import { UserPreference } from 'config';
import NotificationsServices, {
    DeviceResponse,
    INotifications,
} from '../../../services/NotificationsServices';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';
import OneSignal from 'react-native-onesignal';

export const useNotification: () => INotificationContext = () => {
    const { env } = useContext(AppContext);
    const {
        initOneSignal,
        addListener,
        registerUserDevice,
        unsubscribeFromOneSignal,
        removeListener,
    } = NotificationsServices();
    const { getSectionData, getLinkData } = new ActivityService({});

    const dispatch = useDispatch();

    const setupNotifications = async newLogin => {
        initOneSignal(env.oneSignalId);

        OneSignal.setNotificationWillShowInForegroundHandler(
            (notificationReceivedEvent: any) => {
                console.log(
                    'OneSignal: notification will show in foreground:',
                    notificationReceivedEvent,
                );
                let notification = notificationReceivedEvent.getNotification();
                console.log('notification: ', notification);
                const data = notification.additionalData;
                console.log('additionalData: ', data);
                // Complete with null means don't show a notification.
                notificationReceivedEvent.complete(notification);
            },
        );

        OneSignal.setNotificationOpenedHandler((openedEvent: any) => {
            console.log(`Inside open notification handler`);
            console.log('OneSignal: notification opened:', openedEvent);
            console.log('NotificationListener -> onOpened: ', openedEvent);
            UserPreference.instance.setPush('note').then(async () => {
                const flag = await UserPreference.instance.getPush();
                console.log('@@@@########&&&&&&&&&', flag);
                redirect(openedEvent.notification.additionalData.url);
            });
        });

        OneSignal.addSubscriptionObserver(async event => {
            console.log(`isSubscribed: ${event.to.isSubscribed}`);
            if (event.to.isSubscribed) {
                const deviceState = await OneSignal.getDeviceState();
                registerUserDevice(deviceState.pushToken, deviceState.userId);
            }
        });
    };

    const desubscribeNotifications = () => {
        // removeListener(NotificationListener());
        unsubscribeFromOneSignal();
    };

    const NotificationListener = (): INotifications => {
        return {
            onReceived(_notification: any) {
                console.log(
                    'NotificationListener -> onReceived: ',
                    _notification,
                );
            },
            onOpened: async (_openResult: any) => {
                console.log('NotificationListener -> onOpened: ', _openResult);
                UserPreference.instance.setPush('note').then(async () => {
                    const flag = await UserPreference.instance.getPush();
                    console.log('@@@@########&&&&&&&&&', flag);
                    redirect(_openResult.notification.additionalData.url);
                });
            },
            onIds: async (_device: DeviceResponse) => {
                await registerUserDevice(_device.pushToken, _device.userId);
            },
        };
    };

    const redirect = async (link: string) => {
        const { isMobile, section, screen, params } = await getLinkData(link);

        if (!isMobile) {
            return InAppBrowser.open(section, {
                modalPresentationStyle: 'fullScreen',
            });
        }

        let currentRoute =
            NavigationRef?.NavigationRef?.current?.getCurrentRoute();

        if (currentRoute && currentRoute.name === section)
            NavigationRef.NavigationRef.current.goBack();
        else {
            dispatch({
                type: 'SET_LINK',
                payload: { link: params?.url, module: params?.module },
            });
            return NavigationRef.navigate(
                section,
                params ? params : { screen },
            );
        }
    };

    return {
        subscribeNotifications: setupNotifications,
        desubscribeNotifications,
    };
};
