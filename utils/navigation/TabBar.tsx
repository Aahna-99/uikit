import React, { useEffect, useRef, useState } from 'react';
import { Animated, View as RNView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { IconButton } from 'react-native-paper';
import { Popover, usePopover } from 'react-native-modal-popover';
import Snackbar from 'react-native-snackbar';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Icon, Text, FlatList } from 'uikit';
import useTranslations from 'utils/hooks/useTranslations';
import { ICONS } from 'utils/models/IconsType';
import { NavigationRef } from 'utils/navigation/NavigationRef';
import UserPreference from 'config/UserPreferences';
import constColors from '../constants/constColors';
import styles from './styles';
import { setTabVisible } from 'processors/actions/appActions';
import {
    setSocialUserId,
    setSocialIsPraise,
} from 'processors/actions/socialActions';
const TabBar = ({
    state,
    descriptors,
    navigation,
    ...props
}: BottomTabBarProps) => {
    const {
        openPopover,
        closePopover,
        popoverVisible,
        touchableRef,
        popoverAnchorRect,
    } = usePopover();
    const { t } = useTranslations();
    const iconSize = 20;
    const Item_List: any = [];
    const [list, setList] = useState([]);
    const [isShowing, setIsShowing] = useState(true);
    const duration = 400;
    const anim = useRef(new Animated.Value(0)).current;
    const offSet = 80;
    const quickIcon = (
        <Icon color={constColors.textWhite} size={iconSize} icon={ICONS.PLUS} />
    );
    useEffect(() => {
        setQuickNotesData();
    }, []);
    useEffect(() => {
        props.tabVisible ? showTab() : hideTab();
    }, [props.tabVisible]);
    const hideTab = () => {
        setIsShowing(false);
        Animated.timing(anim, {
            toValue: 1,
            duration,
            useNativeDriver: true,
        }).start();
    };
    const showTab = () => {
        setIsShowing(true);
        Animated.timing(anim, {
            toValue: 0,
            duration,
            useNativeDriver: true,
        }).start();
    };
    const yVal = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, offSet],
        extrapolateLeft: 'clamp',
    });
    const animStyle = {
        transform: [
            {
                translateY: yVal,
            },
        ],
    };
    const handleOnPressClosed = (success: any, toast?: any) => {
        if (success) {
            if (toast) {
                Snackbar.show({
                    text: toast.message,
                    duration: Snackbar.LENGTH_LONG,
                });
            }
        }
    };
    const setQuickNotesData = async () => {
        const data = await UserPreference.instance.getSettings();
        if (
            data.apps.app_social &&
            (data.features.f_questions ||
                data.features.f_ideas ||
                data.features.f_knowledge ||
                data.features.f_status_update)
        ) {
            Item_List.push({
                id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                title: 'Post',
                icon: ICONS.POST,
                onPress: () => {
                    async function navigateMethod() {
                        await NavigationRef.current.navigate('CreatePost');
                        closePopover();
                    }
                    navigateMethod();
                },
            });
        }
        if (data.apps.app_pns) {
            Item_List.push({
                id: '58694a0f-3da1-471f-bd96-145wefwefwef29d71',
                title: 'Quick Note',
                icon: ICONS.QUICK_NOTE,
                onPress: () => {
                    async function navigateMethod() {
                        await NavigationRef.current.navigate('NoteEditor', {
                            t,
                            callback: (message: string) => {
                                handleOnPressClosed(true, {
                                    message,
                                    type: 'Success',
                                    position: 'Bottom',
                                    duration: 2000,
                                });
                            },
                        });
                        closePopover();
                    }
                    navigateMethod();
                },
            });
        }
        if (data.features.f_feedback) {
            Item_List.push({
                id: '58694a0f-3da1-471f-bd96-145erfregerd71',
                title: 'Share Feedback',
                icon: ICONS.FEEDBACK,
                onPress: () => {
                    async function navigateMethod() {
                        await NavigationRef.current.navigate('FeedbackShared', {
                            t,
                            OnPressClosed: (refresh?: boolean, toast?: any) =>
                                handleOnPressClosed
                                    ? handleOnPressClosed(refresh, toast)
                                    : navigation.goBack(),
                        });
                        closePopover();
                    }
                    navigateMethod();
                },
            });
            Item_List.push({
                id: '58694a0f-3da1-471f-bd96-1455wffwefwef71',
                title: 'Request Feedback',
                icon: ICONS.REQUEST_FEEDBACK,
                onPress: () => {
                    async function navigateMethod() {
                        await NavigationRef.current.navigate(
                            'RequestFeedback',
                            {
                                t,
                                closeModal: (refresh?: boolean, toast?: any) =>
                                    handleOnPressClosed
                                        ? handleOnPressClosed(refresh, toast)
                                        : navigation.goBack(),
                            },
                        );
                        closePopover();
                    }
                    navigateMethod();
                },
            });
        }
        if (data.features.f_praise) {
            Item_List.push({
                id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                title: 'Praise',
                icon: ICONS.PRAISE,
                onPress: () => {
                    async function navigateMethod() {
                        await NavigationRef.current.navigate('PraiseWallForm', {
                            t,
                            onPressClosed: (refresh?: boolean, toast?: any) =>
                                handleOnPressClosed
                                    ? handleOnPressClosed(refresh, toast)
                                    : navigation.goBack(),
                        });
                        closePopover();
                    }
                    navigateMethod();
                },
            });
        }
        if (data.apps.app_growth) {
            Item_List.push({
                title: 'Create IDP',
                icon: ICONS.CREATE_IDP,
                onPress: () => {
                    async function navigateMethod() {
                        await NavigationRef.current.navigate('CreateIDP');
                        closePopover();
                    }
                    navigateMethod();
                },
            });
        }
        setList(Item_List);
    };
    const renderFlatListItems = ({ item }) => {
        return (
            <TouchableOpacity style={styles.quickAction} onPress={item.onPress}>
                <Icon
                    noMargin={false}
                    color={constColors.textTitle}
                    size={14}
                    icon={item.icon}
                />
                <Text headingType="h6">{item.title}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <RNView style={styles.navMainView}>
            <Animated.View
                style={[
                    styles.safeAreaViewStyle,
                    animStyle,
                    { position: isShowing ? 'relative' : 'absolute' },
                ]}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                            ? options.title
                            : route.name;
                    const isFocused = state.index === index;
                    const onPress = () => {
                        props.social.userDetails?.id &&
                            props.setSocialUserId({});
                        props.social.isPraise?.id &&
                            props.setSocialIsPraise({});
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });
                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };
                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };
                    const icon = (
                        <Icon
                            selected={isFocused}
                            noMargin={true}
                            icon={ICONS[route.name.toUpperCase()]}
                            size={16}
                            color={constColors.textTitle}
                        />
                    );
                    const text = (
                        <Text
                            wrapperStyle={styles.nameStyle}
                            headingType={'h6'}
                            color={
                                isFocused
                                    ? constColors.brandOrange600
                                    : constColors.textTitle
                            }>
                            {label}
                        </Text>
                    );
                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityLabel={
                                options.tabBarAccessibilityLabel
                            }
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.segment}>
                            {icon}
                            {text}
                        </TouchableOpacity>
                    );
                })}
            </Animated.View>
            {list.length && props.tabVisible ? (
                <>
                    <Popover
                        contentStyle={styles.popoverContent}
                        backgroundStyle={styles.background}
                        arrowSize={{ width: 206, height: 8 }}
                        arrowStyle={{
                            borderTopColor: 'white',
                        }}
                        visible={popoverVisible}
                        placement={'top'}
                        onClose={closePopover}
                        fromRect={popoverAnchorRect}>
                        <FlatList
                            data={list}
                            renderItem={renderFlatListItems}
                            ItemSeparatorComponent={true}
                        />
                    </Popover>
                    <TouchableOpacity
                        style={styles.plusIcon}
                        ref={touchableRef}
                        activeOpacity={1}
                        onPress={openPopover}>
                        <IconButton
                            style={styles.iconButton}
                            icon={() => quickIcon}
                            size={iconSize * 1.7}></IconButton>
                    </TouchableOpacity>
                </>
            ) : (
                <></>
            )}
        </RNView>
    );
};
let mapStateToProps = (state, props) => {
    return {
        tabVisible: state.app.tabVisible,
        social: {
            userDetails: state.social.userDetails,
            isPraise: state.social.isPraise,
        },
    };
};
export default React.memo(
    connect(mapStateToProps, {
        setTabVisible,
        setSocialUserId,
        setSocialIsPraise,
    })(TabBar),
);
