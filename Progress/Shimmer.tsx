import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import constColors from 'utils/constants/constColors';

import styles from './styles';

interface ShimmerProps {
    width: number;
    height: number;
    widthShimmer: number;
    duration: number;
    colorShimmer: any;
    visible: boolean;
    children: any;
    style: any;
    backgroundColor: string;
}

interface CustomLinearGradientProps {
    locationStart: any;
    colorShimmer: any;
    widthShimmer: number;
    children: any;
}

class CustomLinearGradient extends Component<CustomLinearGradientProps> {
    render() {
        const { locationStart, colorShimmer, widthShimmer, children } =
            this.props;

        let start = { x: -1, y: 0.5 };
        let end = { x: 2, y: 0.5 };

        return (
            <LinearGradient
                colors={colorShimmer}
                start={start}
                end={end}
                locations={[
                    locationStart + widthShimmer,
                    locationStart + 0.5 + widthShimmer / 2,
                    locationStart + 1,
                ]}>
                <View style={styles.shimmerChildren}>{children}</View>
            </LinearGradient>
        );
    }
}

Animated.LinearGradient =
    Animated.createAnimatedComponent(CustomLinearGradient);

class Shimmer extends Component<ShimmerProps> {
    constructor(props: ShimmerProps) {
        super(props);

        this.state = {
            visible: false,
            beginShimmerPosition: new Animated.Value(-1),
        };
    }
    componentDidMount() {
        this.loopAnimated();
    }

    loopAnimated() {
        const { visible } = this.props;

        const shimmerAnimated = this.getAnimated();

        shimmerAnimated?.start(() => {
            !visible ? this.loopAnimated() : null;
        });
    }
    getAnimated = () => {
        this.state.beginShimmerPosition.setValue(-1);

        return Animated.timing(this.state.beginShimmerPosition, {
            toValue: 1,
            duration: this.props.duration || 1000,
        });
    };

    render() {
        const {
            colorShimmer = [
                constColors.neutralGrey3,
                constColors.neutralGrey5,
                constColors.neutralGrey3,
            ],
            style,
            widthShimmer = 0.7,
            children,
            visible = false,
        } = this.props;

        let { beginShimmerPosition }: any = this.state;

        let inputBeginPostioner = -1;
        let inputEndPosition = 1;

        let outputBeginPostioner = -0.7;
        let outputEndPosition = 0;

        const newValue = beginShimmerPosition.interpolate({
            inputRange: [inputBeginPostioner, inputEndPosition],
            outputRange: [outputBeginPostioner, outputEndPosition],
        });

        return (
            <View style={!visible ? [styles.shimmerContainer, style] : []}>
                {!visible ? (
                    <Animated.LinearGradient
                        locationStart={newValue}
                        colorShimmer={colorShimmer}
                        widthShimmer={widthShimmer}>
                        {children}
                    </Animated.LinearGradient>
                ) : (
                    children
                )}
            </View>
        );
    }
}

export default Shimmer;
