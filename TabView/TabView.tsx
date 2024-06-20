import React, { useState, useEffect } from 'react';
import { View as RNView, Dimensions } from 'react-native';
import { Chip } from 'react-native-paper';
import { TabView as RNTabView } from 'react-native-tab-view';

import { Icon, View, Text } from 'uikit';

import { fontWeightConst } from 'utils/constants/constTypography';
import constColors from 'utils/constants/constColors';
import { ICONS } from 'utils/models/IconsType';

import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function TabView({
    navigationState,
    renderScene,
    sceneStyle,
    handleIndexChange,
    onTabPress,
    ...props
}: any) {
    const [index, setIndex] = useState(navigationState.index);
    const actions = navigationState?.extraProp?.actions
        ? navigationState?.extraProp?.actions
        : [];
    const [_actions, setActions] = useState(
        navigationState?.extraProp?.actions
            ? navigationState?.extraProp?.actions
            : [],
    );
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

    let onIndexChange = (index): any => {
        setIndex(index);
        handleIndexChange && handleIndexChange(index);
    };

    let _renderTabBar = props => {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainerStyle}
                    style={[styles.tabBarContainer, styles[orientation]]}>
                    {props.navigationState.routes.map((route, _index) => {
                        let selected = _index === index;
                        return (
                            <Chip
                                key={route.key}
                                selectedColor={constColors.primaryBlue2}
                                onPress={props => {
                                    onTabPress?.(_index);
                                    setIndex(_index);
                                }}
                                style={{
                                    ...styles.chipStyle,
                                    backgroundColor: selected
                                        ? constColors.primaryBlue2
                                        : constColors.neutralGrey2,
                                }}>
                                {
                                    <Text
                                        wrapperStyle={{
                                            color: selected
                                                ? constColors.bgStatusBar
                                                : constColors.textTitle,
                                            fontWeight: selected
                                                ? fontWeightConst.semibold
                                                : fontWeightConst.regular,
                                            ...styles.textStyle,
                                        }}
                                        headingType={'h6'}
                                        fontWeight={'semibold'}
                                        numberOfLines={1}
                                        ellipsizeMode="tail">
                                        {route.title}
                                    </Text>
                                }
                            </Chip>
                        );
                    })}
                </ScrollView>
                <>
                    {actions.length ? (
                        <View style={styles.actionsContainer}>
                            {actions.map((action, _index) => {
                                return (
                                    <View
                                        style={styles.actionIcon}
                                        key={action.icon}>
                                        <Icon
                                            icon={action.icon}
                                            size={16}
                                            color={constColors.bgBorder}
                                            onPress={action.onPress}
                                        />
                                    </View>
                                );
                            })}
                        </View>
                    ) : (
                        <></>
                    )}
                </>
            </View>
        );
    };

    const _renderScene = (props: any) => {
        return (
            <View style={[styles[orientation], sceneStyle]}>
                {renderScene(props)}
            </View>
        );
    };

    return (
        <RNTabView
            navigationState={{
                index: index,
                routes: navigationState.routes,
            }}
            renderScene={props => _renderScene(props)}
            renderTabBar={_renderTabBar}
            onIndexChange={onIndexChange}
            {...props}
        />
    );
}
