import React, { useEffect, useState } from 'react';
import { Button as RNButton, IconButton } from 'react-native-paper';
import { TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { headingConst } from 'utils/constants/constTypography';
import { underlay, buttonStyle } from './ButtonStyles';

function Button(props: any) {
    let {
        children,
        onPress,
        style,
        pressedstyle,
        wrapperStyle,
        labelStyle,
        mode = '',
        disabled,
        stretch,
        rounded,
        _ref,
        ...prop
    } = props;

    const [pressed, setPressed] = useState(false);
    const [size, setSize] = useState(children?.props?.size || 16);

    useEffect(() => {
        if (rounded && children.type.name != 'Icon') {
            textSize(children);
        }
    }, [size]);

    const textSize = (item: any) => {
        setSize(headingConst[item.props.headingType]);
    };

    const renderText = (item: any) => {
        return React.cloneElement(item, {
            color:
                mode == ''
                    ? item.props.color || ''
                    : disabled
                    ? underlay.textDisabled
                    : item.props.color || '',
        });
    };

    const handleClick = () => {
        if (disabled) return;
        onPress && onPress();
    };

    const renderButton = () => {
        return (
            <TouchableHighlight
                style={[
                    stretch && buttonStyle.stretchStyle,
                    buttonStyle.touchableHighlight,
                    wrapperStyle,
                ]}
                onPressIn={() => !disabled && setPressed(true)}
                onPressOut={() => !disabled && setPressed(false)}
                onPress={() => handleClick()}
                activeOpacity={1}>
                <RNButton
                    style={[
                        buttonStyle.mainStyle,
                        disabled
                            ? buttonStyle.defaultDisabled
                            : pressed && buttonStyle.defaultPressed,
                        mode == 'outlined' &&
                            (disabled
                                ? buttonStyle.outlinedDisabled
                                : pressed
                                ? buttonStyle.outlinedStylePressed
                                : buttonStyle.outlinedStyle),
                        mode == 'text' &&
                            (pressed
                                ? buttonStyle.modeTextStylePressed
                                : buttonStyle.modeTextStyle),
                        pressed ? pressedstyle || style : style,
                    ]}
                    labelStyle={[buttonStyle.labelStyle, labelStyle]}
                    mode={'contained'}
                    {...prop}>
                    {renderText(children)}
                </RNButton>
            </TouchableHighlight>
        );
    };

    const renderIconButton = () => {
        return (
            <TouchableHighlight
                style={[
                    buttonStyle.touchableHighlight,
                    pressed && buttonStyle.btnClicked,
                    wrapperStyle,
                ]}
                rippleColor={pressed ? underlay.white : ''}
                onPressIn={() => !disabled && setPressed(true)}
                onPressOut={() => !disabled && setPressed(false)}
                onPress={() => handleClick()}
                activeOpacity={1}
                ref={_ref}>
                <IconButton
                    style={[buttonStyle.iconBtn, style]}
                    rippleColor={underlay.white}
                    disabled={disabled}
                    icon={() => children}
                    size={size * 1.7}
                    {...prop}
                />
            </TouchableHighlight>
        );
    };

    return (
        <View>
            {children.type.name == 'Icon' || rounded
                ? renderIconButton()
                : renderButton()}
        </View>
    );
}

export { Button };
