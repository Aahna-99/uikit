import React, { useContext, useEffect, useState } from 'react';
import { Linking, View, Platform, Alert } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';
import { getUniqueId } from 'react-native-device-info';

import RNSecureKeyStore from 'react-native-secure-key-store';
import ReactNativeBiometrics from 'react-native-biometrics';
import { checkVersion } from 'react-native-check-version';
import { EngagedlyApp } from 'config/EngagedlyApp';

import { SettingsService } from 'services';

import { setSettings, setEmoticons } from 'processors/actions/appActions';
import UserPreference from 'config/UserPreferences';
import { ActivityService } from 'services';
import { setDeepLink } from 'processors/actions/appActions';

import { NotificationContext } from 'utils/context';

import { NavigationRef } from './NavigationRef';

import constColors from '../constants/constColors';
import handleLinkingURL from '../../../views/SubDomain/handleDeepLink';
import { useEffectAsync } from '../hooks';
import { LoaderContext } from './Global';
import store from 'processors/store';

import styles from './styles';

const RNBiometrics = new ReactNativeBiometrics();
RNBiometrics.isSensorAvailable();

const Init = (props: {
    setSettings: any;
    route?: any;
    navigation?: any;
    setDeepLink: any;
    setEmoticons: any;
}) => {
    let { route, setSettings, navigation, setDeepLink, setEmoticons } = props;

    const { setSettingsUser } = new SettingsService({});

    const { showLoader, hideLoader } = useContext(LoaderContext);
    const [deepLinkUrl, setDeepLinkUrl] = useState('');
    const { getLinkData } = new ActivityService({});

    const { subscribeNotifications } = useContext(NotificationContext);

    let firstLoad: any;
    let getRedirectURL = async (devURL: any) => {
        return new Promise(async (resolve, reject) => {
            let _url: any;
            let response = new XMLHttpRequest();

            response.onreadystatechange = e => {
                if (response.status == 200 && response.readyState == 4) {
                    if (devURL != response.responseURL) {
                        _url = response.responseURL;
                        resolve(_url);
                    } else {
                        resolve(devURL);
                    }
                }
            };

            response.open('GET', devURL, true);
            response.send();
        });
    };

    async function dispatchResetPasswordScreen(token: any) {
        await NavigationRef.current.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'ResetPasswordScreen', token: token }],
            }),
        );

        hideLoader();
    }

    const handleDeepLink = async ({ url }) => {
        let _url: any = await getRedirectURL(url);
        let token: any;
        if (_url.includes('reset_password')) {
            showLoader();
            const splitData = _url.split('/');
            token = splitData[splitData.length - 1];

            dispatchResetPasswordScreen(token);
        }
    };

    const fetchEmojiData = async () => {
        try {
            const response = await axios.get(
                'https://emoji-api.com/emojis?access_key=899ad5e1367cc3da228868fe1b75b77412a853ab',
            );
            // const regexToRemoveExtras = /^[eE]\d/;
            const emojiData = response.data;
            const mainEmojiData: any[] = [];
            emojiData.map((emoji: any) => {
                const emojiName = emoji.slug.toLowerCase();
                if (emojiName.indexOf('e15') == -1) {
                    mainEmojiData.push(emoji);
                }
            });
            setEmoticons(mainEmojiData);
        } catch (error) {
            console.error('Error fetching emoji data:', error);
        }
    };

    useEffect(() => {
        getInitialRoute();
    }, []);

    useEffectAsync(async () => {
        firstLoad = await UserPreference.instance.getLink();
        const user = await UserPreference.instance.getToken();
        await setSettingsUser(user.id).then(async (settings: any) => {
            setSettings(settings);
            Linking.addEventListener('url', async function (link) {
                const user = await UserPreference.instance.getToken();
                const isLog = !!user?.token;
                if (link && link.url) {
                    if (isLog) {
                        showLoader();
                        subscribeNotifications();
                        handleLinkingURL({
                            navigation,
                            url: link.url,
                            route,
                            getLinkData,
                        }).then(() => {
                            hideLoader();
                        });
                    } else {
                        handleDeepLink(link);
                    }
                    setDeepLink(link.url);
                    setDeepLinkUrl(link.url);
                }
            });
        });
        if (!firstLoad) {
            UserPreference.instance.setLink(true).then(async () => {
                const user = await UserPreference.instance.getToken();
                const isLog = !!user?.token;
                Linking.getInitialURL()
                    .then(async url => {
                        if (url !== null && url !== undefined) {
                            if (isLog) {
                                showLoader();
                                subscribeNotifications();
                                handleLinkingURL({
                                    navigation,
                                    url: url,
                                    route,
                                    getLinkData,
                                }).then(() => {
                                    hideLoader();
                                });
                            } else {
                                handleDeepLink({ url });
                            }
                            setDeepLink(url);
                            setDeepLinkUrl(url);
                        }
                    })
                    .catch(error => {});
            });
        }
    }, [route]);

    const checkForBiometric = async () => {
        const server = getUniqueId();

        const credentials = await RNSecureKeyStore.get(server).catch(error => {
            console.log(error);
        });

        if (credentials && JSON.parse(credentials).password) {
            const data = JSON.parse(credentials);

            RNBiometrics.simplePrompt({
                promptMessage: 'Login with Fingerprint/Face ID',
            })
                .then(resultObject => {
                    const { success } = resultObject;

                    if (success) {
                        NavigationRef.current.navigate('LoginScreen', {
                            Email: data.username,
                            BiometricToken: data.password,
                            deepLink: deepLinkUrl,
                        });
                    }
                })
                .catch(error => {});
        }
    };

    const PLAYSTORE_URL =
        'https://play.google.com/store/apps/details?id=com.engagedlytangerine.mobile&hl=en_IN&gl=US';
    const APPSTORE_URL =
        'itms-apps://apps.apple.com/in/app/engagedly-2-0/id1545115655';

    const showupdate = async () => {
        const version = await checkVersion();
        if (version.needsUpdate) {
            PromptUpdate(Platform.OS);
        }
    };

    const PromptUpdate = (OS: any) => {
        let { AppConfig } = store.getState().app.config;
        if (
            AppConfig.env.oneSignalId == EngagedlyApp.SETTINGS.prod.oneSignalId
        ) {
            let updateUrl = OS == 'ios' ? APPSTORE_URL : PLAYSTORE_URL;
            Alert.alert(
                'Update Available',
                'A new Version of the Engagedly Application is available.',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Update Cancelled'),
                        style: 'cancel',
                    },
                    {
                        text: 'Update',
                        onPress: () => {
                            Linking.canOpenURL(updateUrl).then(res => {
                                if (res) {
                                    Linking.openURL(updateUrl);
                                } else {
                                    console.log('Cannot Open URL');
                                }
                            });
                        },
                    },
                ],
            );
        }
    };

    let getInitialRoute = async () => {
        const user = await UserPreference.instance.getToken();
        const isLog = !!user?.token;
        await fetchEmojiData();
        if (isLog) {
            await setSettingsUser(user.id).then(async (settings: any) => {
                setSettings(settings);
                showupdate();
                subscribeNotifications();

                NavigationRef.current.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'HomeView' }],
                    }),
                );
            });
        } else {
            await showupdate();
            checkForBiometric();
            NavigationRef.current.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Subdomain' }],
                }),
            );
        }
    };

    return (
        <View style={styles.progress}>
            <ActivityIndicator color={constColors.bgStatusBar} />
        </View>
    );
};

const mapStateToProps = (state: any, ownProps: any) => {
    return {};
};

export default React.memo(
    connect(mapStateToProps, { setSettings, setEmoticons, setDeepLink })(Init),
);
