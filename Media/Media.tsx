import React from 'react';
import constColors from 'utils/constants/constColors';
import Shimmer from '../Progress/Shimmer';
import Text from '../Text';
import { View } from '../View';
import { mediaStyles } from './MediaStyles';

interface Props {
    avatar?: string;
    body?: string;
    footer?: string;
    footerStyle?: string;
    title?: string;
    subtitle?: string;
    loading?: boolean;
    wrapperStyle?: object;
    isLearning?: any;
}

function Media({
    avatar,
    body,
    footer = '',
    footerStyle,
    title = '',
    numOfTitleLines = 1,
    subtitle = '',
    numOfSubtitleLines = 1,
    loading = false,
    wrapperStyle,
    isLearning = false,
}: Props) {
    const renderAvatar = (item: any) => {
        return React.cloneElement(item, {
            loading: loading,
        });
    };

    return (
        <View style={[mediaStyles.wrapperStyle, wrapperStyle]}>
            <View style={mediaStyles.mediaStyle}>
                {avatar ? (
                    <View style={mediaStyles.avatarStyle}>
                        {renderAvatar(avatar)}
                    </View>
                ) : null}
                {!body ? (
                    <View style={mediaStyles.bodyStyle}>
                        {title ? (
                            <View style={mediaStyles.titleStyle}>
                                <Shimmer visible={loading ? false : true}>
                                    {typeof title === 'string' ? (
                                        <Text
                                            headingType={'h6'}
                                            wrapperStyle={{
                                                alignItems: 'flex-start',
                                                lineHeight: 18,
                                            }}
                                            numberOfLines={numOfTitleLines}
                                            ellipsizeMode="tail"
                                            fontWeight={'semibold'}>
                                            {title}
                                        </Text>
                                    ) : (
                                        title
                                    )}
                                </Shimmer>
                            </View>
                        ) : null}
                        {subtitle ? (
                            <View style={mediaStyles.subtitleStyle}>
                                <Shimmer visible={loading ? false : true}>
                                    {typeof subtitle === 'string' ? (
                                        <Text
                                            color={constColors.textPlaceholder}
                                            wrapperStyle={{
                                                alignItems: 'flex-start',
                                                lineHeight: 21,
                                            }}
                                            numberOfLines={numOfSubtitleLines}
                                            ellipsizeMode="tail"
                                            headingType={'h6'}>
                                            {subtitle}
                                        </Text>
                                    ) : (
                                        subtitle
                                    )}
                                </Shimmer>
                            </View>
                        ) : null}
                    </View>
                ) : (
                    <View style={mediaStyles.bodyStyle}>{body}</View>
                )}
            </View>
            {footer ? (
                <View style={{ ...mediaStyles.footerStyle, ...footerStyle }}>
                    {footer}
                </View>
            ) : null}
        </View>
    );
}

export default Media;
