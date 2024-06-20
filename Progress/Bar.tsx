import React, { useState, useEffect } from 'react';
import { View, Animated, Text } from 'react-native';

import constColors from 'utils/constants/constColors';

import { ColorMap } from './colorMap';

import styles from './styles';

function Multi({ values, height, colors, fill }: any) {
    const [animation, setAnimation] = useState([]);

    let startAnimation = (animation: any) => {
        let total = 0;

        values.filter(key => key).forEach((item: any) => (total += item.value));

        Animated.parallel(
            animation.map((anim: any, index: any) =>
                Animated.timing(anim, {
                    toValue:
                        fill === true || (fill === false && total > 100)
                            ? (100 * values[index].value) / total / 100
                            : values[index].value / 100,
                    duration: 500,
                    useNativeDriver: false,
                }).start(() => {}),
            ),
        );
    };

    useEffect(() => {
        let animation = values.map((item: any) => new Animated.Value(0));

        setAnimation(animation);
        startAnimation(animation);
    }, [values, colors]);

    const barAnimatedStyles = (anim: any, index: any) => {
        return {
            width: anim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ['0%', '50%', '100%'],
            }),
            backgroundColor: values[index].color,
        };
    };

    return (
        <Animated.View style={styles.multiProgressContainer}>
            {animation.map((anim: any, index: any) => (
                <Animated.View
                    key={Math.random()}
                    style={[
                        !fill && index === animation.length - 1
                            ? [styles.finalBar]
                            : [],
                        barAnimatedStyles(anim, index),
                        { height: height },
                    ]}
                />
            ))}
        </Animated.View>
    );
}

function Single({
    value,
    height,
    status,
    oldValue = 0,
    animate = true,
    module = 'Global',
}: any) {
    const [animation] = useState(new Animated.Value(oldValue / 100));

    let startAnimation = () => {
        Animated.timing(animation, {
            toValue: value / 100,
            duration: 500,
            useNativeDriver: false,
        }).start(() => {});
    };

    useEffect(() => {
        animate && startAnimation();
    }, [value, status]);

    const barInterpolation = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['0%', '50%', '100%'],
    });

    const barAnimatedStyles = {
        width: barInterpolation,
    };

    const barStaticStyles = {
        width: `${value}%`,
    };

    const renderProgressBar = () => {
        const backgroundColor =
            ColorMap.Global?.[status] ||
            ColorMap[module]?.[status] ||
            constColors.ctaPrimary;
        return (
            <Animated.View style={styles.progressContainer}>
                <Animated.View
                    style={[
                        styles.progressBar,
                        { backgroundColor },
                        animate ? barAnimatedStyles : barStaticStyles,
                        { height: height },
                    ]}
                />
            </Animated.View>
        );
    };

    return renderProgressBar();
}

export default React.memo(function Bar(props: any) {
    let { headerLeft, headerRight, footerLeft, footerRight, values } = props;
    const renderHeader = () => {
        return (
            <View style={styles.statusContainer}>
                <View style={[styles.headerLeftContainer]}>{headerLeft}</View>
                <View style={styles.headerRightContainer}>{headerRight}</View>
            </View>
        );
    };

    const renderBody = () => {
        if (Array.isArray(values)) {
            let multiProps = {
                ...props,
                values: values
                    .filter((key: any) => key)
                    .map((item: any) => {
                        return parseInt(item.value)
                            ? { ...item, value: parseInt(item.value) }
                            : undefined;
                    })
                    .filter(key => key),
            };
            if (!multiProps.values.length) {
                multiProps.values = [{ value: 0, color: '' }];
            }
            return <Multi {...multiProps} key={Math.random()} />;
        } else return <Single {...props} key={Math.random()} />;
    };

    const renderFooter = () => {
        return (
            <View style={[styles.statusContainer]}>
                <View style={styles.footerLeftContainer}>{footerLeft}</View>
                <View style={styles.footerRightContainer}>{footerRight}</View>
            </View>
        );
    };

    return (
        <View style={styles.mainContainer}>
            {renderHeader()}
            {renderBody()}
            {renderFooter()}
        </View>
    );
});
