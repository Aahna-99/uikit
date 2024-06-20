import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';

import { Icon } from 'uikit';

import { ICONS } from 'utils/models/IconsType';

import constColors from 'utils/constants/constColors';

import { Star as styles } from './SelectStyle';

export default function SelectStar(props: any) {
    const [starRating, setStarRating] = useState(props.rating);
    const animatedButtonScale = new Animated.Value(1);

    useEffect(() => {
        setStarRating(props.rating);
    }, [props.rating]);

    const handlePressIn = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1.5,
            useNativeDriver: true,
            speed: 50,
            bounciness: 4,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1,
            useNativeDriver: true,
            speed: 50,
            bounciness: 4,
        }).start();
    };
    const animatedScaleStyle = {
        transform: [{ scale: animatedButtonScale }],
    };

    let ratings = [1, 2, 3, 4, 5];

    let getStar = count => {
        let selected = starRating >= count ? true : false;

        return (
            <TouchableOpacity
                style={{
                    ...styles.starContainer,
                    borderColor: selected
                        ? constColors.dynamicYellow6
                        : constColors.bgBorder,
                    backgroundColor: selected
                        ? constColors.dynamicYellow1
                        : constColors.bgWhite,
                }}
                key={count}
                disabled={props.disabled}
                onPress={() => props.onPress(count)}>
                <Icon
                    icon={ICONS['STAR']}
                    size={21}
                    selected={selected ? true : false}
                    style={{
                        backgroundColor: selected
                            ? constColors.dynamicYellow1
                            : constColors.bgWhite,
                    }}
                />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.stars}>
                {ratings.map(rating => {
                    return getStar(rating);
                })}
            </View>
        </View>
    );
}
