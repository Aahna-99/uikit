import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import constColors from 'utils/constants/constColors';
import { cardStyles } from './CardStyles';
import { View } from '../View';
import backdropImages from '../../utils/constants/constBackdropImages';
import Shimmer from '../Progress/Shimmer';

interface Props {
    header?: object;
    body?: object;
    footer?: object;
    color?: string;
    gradient?: boolean;
    shadow?: boolean;
    backdrop?: string;
    style?: any;
    loading?: boolean;
    onPress?: Function;
    bodyShimmer?: boolean;
}

function Card({
    header,
    body,
    footer,
    color = '',
    gradient,
    shadow = false,
    backdrop = '',
    style,
    loading = false,
    onPress,
    bodyShimmer = true,
}: Props) {
    let gradStart = constColors.bgWhite;
    let gradEnd = constColors.bgWhite;

    if (gradient && color[0] != '' && color[1] != '') {
        gradStart = color[0];
        gradEnd = color[1];
    } else if (!gradient && color && color[0] != '') {
        gradStart = gradEnd = color[0];
    }

    const cardContent = () => {
        return (
            <View
                style={{
                    ...cardStyles.cardStyle,
                    ...(style && style.wrapperStyle && style.wrapperStyle),
                }}>
                {header ? (
                    <Shimmer visible={loading ? false : true}>
                        <View
                            style={{
                                ...cardStyles.headerStyle,
                                ...(style &&
                                    style.headerStyle &&
                                    style.headerStyle),
                            }}>
                            {header}
                        </View>
                    </Shimmer>
                ) : null}
                {body ? (
                    loading ? (
                        <Shimmer visible={loading ? false : true}>
                            <View
                                style={{
                                    ...(style &&
                                        style.bodyStyle &&
                                        style.bodyStyle),
                                }}>
                                {body}
                            </View>
                        </Shimmer>
                    ) : (
                        <View
                            style={{
                                ...(style &&
                                    style.bodyStyle &&
                                    style.bodyStyle),
                            }}>
                            {body}
                        </View>
                    )
                ) : null}
                {footer ? (
                    // <Shimmer visible={loading ? false : true}>
                    <View
                        style={{
                            ...cardStyles.footerStyle,
                            ...(style &&
                                style.footerStyle &&
                                style.footerStyle),
                        }}>
                        {footer}
                    </View>
                ) : // {/* </Shimmer> */}
                null}
            </View>
        );
    };

    return header || body || footer ? (
        <TouchableOpacity
            onPress={onPress}
            disabled={onPress ? false : true}
            activeOpacity={0.5}
            style={{
                ...(shadow ? cardStyles.shadowStyle : { flex: 1 }),
                ...(style && style.containerStyle && style.containerStyle),
            }}>
            <LinearGradient
                colors={[gradStart, gradEnd]}
                style={{ flex: 1, ...cardStyles.borderRadius }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}>
                {backdrop != '' ? (
                    <ImageBackground
                        source={backdropImages[backdrop]}
                        imageStyle={cardStyles.imageBackground}>
                        {cardContent()}
                    </ImageBackground>
                ) : (
                    <View>{cardContent()}</View>
                )}
            </LinearGradient>
        </TouchableOpacity>
    ) : (
        <></>
    );
}

export { Card };
