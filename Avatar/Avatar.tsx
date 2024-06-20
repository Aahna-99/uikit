import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Avatar as PaperAvatar } from 'react-native-paper';
import VectorIcon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';

import { SvgFromUri } from 'react-native-svg';
import Icon from '../Icon';

import { Text } from 'uikit';
import constColors from 'utils/constants/constColors';

import {
    avatarStyles,
    colorConst,
    dynamicBgColor,
    dynamicColor,
} from './AvatarStyles';
import Shimmer from '../Progress/Shimmer';
import { ICONS } from 'utils/models/IconsType.ts';

function Avatar(props: any) {
    let {
        userId = '',
        userName = '',
        avatarSize = 48,
        icon = '',
        userImage = '',
        type = '',
        badgeBgColor = '',
        badgeTextColor = '',
        badgeIcon = 'plus',
        onPress,
        style,
        mainStyle,
        loading = false,
    } = props;

    const [imageError, setimageError] = useState(false);
    const [avatarColor, setAvatarColor] = useState(dynamicBgColor);

    const _storeData = async (userId, color) => {
        try {
            await AsyncStorage.setItem(userId, color);
        } catch {}
    };

    const _retrieveData = async (userId: any) => {
        try {
            const avatarColor = await AsyncStorage.getItem(userId);
            if (avatarColor !== null) {
                setAvatarColor(avatarColor);
            } else {
                let color =
                    dynamicColor[
                        Math.floor(Math.random() * dynamicColor.length)
                    ];
                _storeData(userId, color);
                setAvatarColor(color);
            }
        } catch (error) {}
    };

    if (userId) {
        _retrieveData(userId);
    }

    const onImageError = () => {
        setimageError(true);
    };

    const userNameInitial = React.useMemo(() => {
        var initials =
            userName.split(' ').map((word: string) => word.substring(0, 1)) ||
            [];
        return (
            (initials.shift() || '') + (initials.pop() || '')
        ).toUpperCase();
    }, [userName]);

    const imageUri = React.useMemo(() => {
        return {
            uri: userImage?.startsWith('//')
                ? userImage?.replace('//', 'https://')
                : userImage,
        };
    }, [userImage]);

    const badgeBgStyles = React.useMemo(() => {
        return {
            backgroundColor: badgeBgColor,
        };
    }, [badgeBgColor]);

    const avatarContent = () => {
        if ((userName && imageError) || (userName && !userImage)) {
            return (
                <View
                    style={[
                        avatarStyles.backColor,
                        {
                            backgroundColor: avatarColor,
                            height: avatarSize,
                            width: avatarSize,
                            borderRadius: avatarSize / 2,
                        },
                        avatarStyles.containerStyle,
                        mainStyle,
                    ]}>
                    <Text
                        color={constColors.textWhite}
                        headingType={'h5'}
                        fontWeight={'regular'}>
                        {userNameInitial}
                    </Text>
                </View>
            );
        }
        if (userImage) {
            let content = <></>;
            if (userImage.endsWith('.svg')) {
                content = (
                    <SvgFromUri
                        width={avatarSize}
                        height={avatarSize}
                        {...imageUri}
                    />
                );
            } else {
                content = (
                    <PaperAvatar.Image
                        style={[
                            avatarStyles.backColor,
                            {
                                backgroundColor: constColors.neutralGrey4,
                            },
                            mainStyle,
                        ]}
                        onError={onImageError}
                        size={avatarSize}
                        source={imageUri}
                    />
                );
            }
            return content;
        }
        if (icon) {
            return (
                <PaperAvatar.Icon
                    size={avatarSize}
                    style={[
                        avatarStyles.backColor,
                        {
                            backgroundColor: avatarColor,
                        },
                        mainStyle,
                    ]}
                    icon={() => (
                        <VectorIcon
                            color={colorConst.textWhite}
                            name={icon}
                            size={avatarSize}
                        />
                    )}
                />
            );
        }
        if (!userName && !userImage) {
            return (
                <Icon
                    style={style}
                    selected={false}
                    icon={ICONS.empty_avatar}
                    size={avatarSize}
                />
            );
        }
    };

    const avatarContentRendering = () => {
        if (type === 'badge') {
            return (
                <View style={[avatarStyles['viewRelative']]}>
                    <View>{avatarContent()}</View>
                    <View style={[avatarStyles['badgePosition']]}>
                        <PaperAvatar.Icon
                            size={avatarSize / 2.5}
                            style={
                                badgeBgColor
                                    ? badgeBgStyles
                                    : [avatarStyles['backColor']]
                            }
                            icon={() => (
                                <Icon
                                    selected={false}
                                    icon={badgeIcon}
                                    color={colorConst.textWhite}
                                    size={avatarSize / 4.5}
                                />
                            )}
                        />
                    </View>
                </View>
            );
        } else {
            return <View>{avatarContent()}</View>;
        }
    };

    return (
        <TouchableOpacity
            style={[avatarStyles.mainStyle, style]}
            onPress={onPress}
            activeOpacity={1}>
            <Shimmer
                style={{
                    borderRadius: 24,
                    width: avatarSize,
                    height: avatarSize,
                }}
                autoRun={true}
                visible={loading ? false : true}>
                {avatarContentRendering()}
            </Shimmer>
        </TouchableOpacity>
    );
}

export default Avatar;
