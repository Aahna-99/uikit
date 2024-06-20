import React, { useEffect, useState } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import constColors from 'utils/constants/constColors';

import Text from '../Text/Text';
import styles from './styles';
import { SafeArea } from 'uikit';

export default function Screen(props: any) {
    let {
        mode = 1,
        navigationAction = [],
        title,
        renderContent,
        renderPlaceholder,
        actionButtons = [],
        padding = true,
        paddingTop = true,
        paddingBottom = true,
        paddingRight = true,
        paddingLeft = true,
        style = {},
        bodyStyle = {},
    } = props;

    let getOrientation = (width: number, height: number) => {
        if (!width && !height) {
            width = Dimensions.get('window').width;
            height = Dimensions.get('window').height;
        }

        return height < width ? 'landscape' : 'portrait';
    };

    const [orientation, setOrientation] = useState(getOrientation());

    useEffect(() => {
        Dimensions.addEventListener('change', e => {
            const { width, height } = e.window;

            setOrientation(getOrientation(width, height));
        });
    }, []);

    const getPlaceHolder = () => {};

    const renderActionButtons = () => {
        return actionButtons?.map((button, index) => (
            <TouchableOpacity
                key={Math.random()}
                onPress={button.props.onPress}
                style={[styles.actionButtonContainer, {}]}>
                {button}
            </TouchableOpacity>
        ));
    };

    const renderNavigationActionButtons = () => {
        return navigationAction.map((button, index) => (
            <TouchableOpacity
                key={Math.random()}
                style={styles.buttonSpacing}
                onPress={button.props.onPress}>
                {button}
            </TouchableOpacity>
        ));
    };

    const renderTitle = () => {
        return (
            <View style={styles.titleContainer}>
                {typeof title === 'string' ? (
                    <Text
                        color={constColors.textWhite}
                        headingType={'h4'}
                        wrapperStyle={styles.titleText}
                        fontWeight={'semibold'}>
                        {title}
                    </Text>
                ) : (
                    title?.()
                )}
            </View>
        );
    };

    const getNavigationButtons = () => (
        <View style={styles.left}>
            {navigationAction.length ? (
                <View style={styles.navigationContainer}>
                    {renderNavigationActionButtons()}
                </View>
            ) : (
                <></>
            )}
        </View>
    );

    const getActionButtons = () => (
        <View style={styles.right}>{renderActionButtons()}</View>
    );

    const getBody = () => {
        switch (mode) {
            case 0:
                return renderPlaceholder
                    ? renderPlaceholder()
                    : getPlaceHolder();
            case 1:
                return (
                    <View style={styles.loader}>
                        <ActivityIndicator color={constColors.bgStatusBar} />
                    </View>
                );
            case 2:
                return renderContent ? renderContent() : <></>;
        }
    };

    const getContent = () => {
        let renderHeader = () => {
            return (
                <View style={[styles.headerContainer, styles[orientation]]}>
                    <View style={styles.header}>
                        {getNavigationButtons()}
                        {renderTitle()}
                        {actionButtons?.length ? getActionButtons() : <></>}
                    </View>
                </View>
            );
        };

        return (
            <SafeArea enabled={props.enableSafeArea}>
                <View style={{ ...styles.contentContainer, ...style }}>
                    {renderHeader()}
                    <View
                        style={{
                            ...styles.bodyContainer,
                            ...styles[orientation],
                            ...{
                                paddingTop:
                                    !padding || !paddingTop
                                        ? 0
                                        : styles.bodyContainer.paddingTop,
                                paddingBottom:
                                    !padding || !paddingBottom
                                        ? 0
                                        : styles.bodyContainer.paddingBottom,
                                paddingRight:
                                    !padding || !paddingRight
                                        ? 0
                                        : styles[orientation].paddingRight,
                                paddingLeft:
                                    !padding || !paddingLeft
                                        ? 0
                                        : styles[orientation].paddingLeft,
                            },
                            ...bodyStyle,
                        }}>
                        {getBody()}
                    </View>
                </View>
            </SafeArea>
        );
    };

    return getContent();
}
