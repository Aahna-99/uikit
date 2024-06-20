import React, { useState } from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { frameStyles, colorConst } from './FrameStyles';
import Text from '../Text/Text';

interface Props {
    size?: any;
    icon?: any;
    userImage?: any;
    isNotify?: string;
    text?: string;
    onPress: () => void;
}

function Frame({
    size = 50,
    icon = '',
    userImage = '',
    isNotify = '',
    text = '',
    onPress,
}: Props) {
    const imageUri = React.useMemo(() => {
        if (userImage.includes('require')) return userImage;
        return {
            uri: userImage,
        };
    }, [userImage]);

    const notifyIconSize = React.useMemo(() => {
        return {
            height: size / 5,
            width: size / 5,
        };
    }, [size]);

    const frameContent = () => {
        if (userImage) {
            return (
                <Avatar.Image
                    style={[frameStyles.backColor]}
                    size={size}
                    source={imageUri}
                />
            );
        }
        if (icon) {
            return (
                <Avatar.Icon
                    size={size}
                    style={[frameStyles.backColor]}
                    icon={() => (
                        <Icon
                            color={colorConst.textWhite}
                            name={icon}
                            size={size / 2}
                        />
                    )}
                />
            );
        }
    };

    const frameContentRendering = () => {
        if (isNotify === 'notify') {
            return (
                <View style={[frameStyles['viewRelative']]}>
                    <View>{frameContent()}</View>
                    <View style={[frameStyles['badgePosition']]}>
                        <View
                            style={[
                                frameStyles.dotSeparator,
                                notifyIconSize,
                            ]}></View>
                    </View>
                </View>
            );
        } else {
            return <View>{frameContent()}</View>;
        }
    };

    return (
        <View style={frameStyles.padding}>
            <View style={frameStyles.itemView}>{frameContentRendering()}</View>
            <Text headingType={'h6'} fontWeight={'regular'}>
                {text}
            </Text>
        </View>
    );
}

export default Frame;
