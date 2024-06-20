import React, { useEffect } from 'react';
import { View, TextInput as NativeInput, Platform } from 'react-native';
import { TextInput as PaperInput } from 'react-native-paper';
import { colorText, textStyles } from './TextInputStyle';
import Text from '../Text';
import constColors from 'utils/constants/constColors';

function TextInput(props: any) {
    let {
        paperInput = true,
        placeholder,
        buttonIcon = '',
        bgColor = '',
        multiline = false,
        error = false,
        errorText = '',
        onChange,
        placeholderAvatar,
        avatar,
        icon,
        button,
        style,
        wrapperStyle,
        textInputStyle,
        text,
        _ref,
        editable,
        emptyPlaceholder,
        paperStyle,
        ...prop
    } = props;
    const [value, onChangeValue] = React.useState(text);
    const [height, setHeight] = React.useState(0);
    const [focus, setFocus] = React.useState(false);

    placeholder == (typeof placeholder !== 'boolean' && placeholder !== false)
        ? 'Enter your Comment...'
        : '';

    useEffect(() => {
        onChangeValue(text);
    }, [text]);

    const handleChange = (text: string) => {
        onChange ? onChange(text) : '';
    };

    const mulitLineHeight = React.useMemo(() => {
        return {
            minHeight: height ? (height < 150 ? height : 150) : 20,
        };
    }, [height]);

    // const handleInputChangeWithDebounce = React.useCallback(
    //     debounce(handleChange, 800),
    //     [],
    // );

    const handleOnChange = (value: string) => {
        handleChange(value);
        onChangeValue(value);
    };

    const textInput = () => {
        let inputStyle = textStyles.input;
        if (editable) {
            inputStyle = {
                ...textStyles.input,
                height: props.height || 40,
                backgroundColor: constColors.neutralGrey1,
            };
        } else if (!editable && !value) {
            inputStyle = {
                ...textStyles.input,
                height: props.height || 40,
                backgroundColor: constColors.neutralGrey1,
            };
        }
        return (
            <View style={[wrapperStyle]}>
                <View
                    style={[
                        textStyles.inputAvatar,
                        focus && textStyles.onFocus,
                        error && textStyles.onError,
                        button && textStyles.inputWithButton,
                        avatar && textStyles.avatar,
                        style,
                    ]}>
                    <View style={textStyles.avatarContainer}>{avatar}</View>
                    {multiline && paperInput ? (
                        !editable && value ? (
                            <Text
                                headingType="h6"
                                wrapperStyle={{
                                    flex: 1,
                                    marginLeft: 8,
                                    paddingVertical: 8,
                                }}>
                                {value}
                            </Text>
                        ) : !editable && !value?.length ? (
                            <Text
                                headingType="h6"
                                color={constColors.neutralGrey7}
                                wrapperStyle={{
                                    flex: 1,
                                    marginLeft: 8,
                                    paddingVertical: 8,
                                    fontStyle: 'italic',
                                }}>
                                {emptyPlaceholder || 'No data'}
                            </Text>
                        ) : (
                            <PaperInput
                                style={[
                                    inputStyle,
                                    focus && textStyles.onFocus,
                                    { ...paperStyle },
                                ]}
                                multiline={multiline}
                                onFocus={() => {
                                    setFocus(true);
                                }}
                                onBlur={() => {
                                    setFocus(false);
                                }}
                                onChangeText={text => {
                                    handleOnChange(text);
                                }}
                                onContentSizeChange={event => {
                                    setHeight(
                                        event.nativeEvent.contentSize.height,
                                    );
                                }}
                                value={value}
                                placeholder={placeholder}
                                placeholderTextColor={colorText.placeholder}
                                ref={_ref}
                                editable={editable}
                                selectTextOnFocus={false}
                                underlineColor="transparent"
                                activeUnderlineColor={constColors.ctaPrimary}
                                {...prop}
                            />
                        )
                    ) : (
                        <NativeInput
                            style={[
                                { ...textStyles.input, height: 40 },
                                focus && textStyles.onFocus,
                                {
                                    ...(style &&
                                        style.TextInputStyle &&
                                        style.TextInputStyle),
                                },
                            ]}
                            multiline={multiline}
                            onFocus={() => {
                                setFocus(true);
                            }}
                            onBlur={() => {
                                setFocus(false);
                            }}
                            onChangeText={text => {
                                handleOnChange(text);
                            }}
                            onContentSizeChange={event => {
                                setHeight(event.nativeEvent.contentSize.height);
                            }}
                            value={value}
                            placeholder={placeholder}
                            placeholderTextColor={colorText.placeholder}
                            ref={_ref}
                            editable={editable}
                            selectTextOnFocus={editable}
                            {...prop}
                        />
                    )}
                    {icon}
                    {button}
                </View>
                {error && errorText.length ? (
                    <Text
                        wrapperStyle={textStyles.errorText}
                        headingType={'h6'}
                        fontWeight={'regular'}
                        color={colorText.alert}>
                        {errorText}
                    </Text>
                ) : (
                    <></>
                )}
            </View>
        );
    };

    return textInput();
}

export default TextInput;
