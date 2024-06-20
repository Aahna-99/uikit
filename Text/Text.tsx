import React, { useCallback, useState } from 'react';
import { Text as NativeText, TouchableOpacity } from 'react-native';
import {
    headingStyles,
    colorText,
    fontWeightStyle,
    textStyles,
    lineHeightStyles,
} from './TextStyles';

interface Props {
    isCollapsible: boolean;
    text: string;
    headingType: string;
    fontWeight: string;
    lineHeight: boolean;
    color: string;
    children: string;
    numberOfLines: any;
    wrapperStyle: object;
}

function Text({
    isCollapsible = false,
    text,
    headingType = 'h1',
    fontWeight = 'regular',
    color = '',
    children,
    lineHeight,
    wrapperStyle,
    numberOfLines = undefined,
    ...prop
}: Props) {
    const textColor = React.useMemo(() => {
        return {
            color: color ? color : colorText.color,
        };
    }, [color]);

    const [showFullText, setShowFullText] = useState(!isCollapsible);
    const [collapsible, setCollapsible] = useState(!isCollapsible);
    // const [customText, setCustomText] = useState(text);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    // const onPressText = () => {
    //     if (numberOfLines === null || showFullText) {
    //         return;
    //     }
    //     toggleText();
    // };

    const displayText = showFullText ? text : text;

    const onTextLayout = useCallback(e => {
        if (e.nativeEvent.lines.length >= numberOfLines) {
            setCollapsible(true);
            // const { lines } = e.nativeEvent;
            // let charArray = lines.map(line => line.text.length);
            // charArray = charArray.slice(0, charArray.length - 1);
            // const maxChar = Math.max(...charArray);

            // if (lines[numberOfLines - 1].text.length > maxChar) {
            //     lines[numberOfLines - 1].text = lines[
            //         numberOfLines - 1
            //     ].text.substr(0, maxChar - 9);
            // }

            // let customText = lines
            //     .splice(0, numberOfLines)
            //     .map(line => line.text)
            //     .join('');
            // setCustomText(customText);
        } else {
            setCollapsible(false);
        }
    }, []);

    return (
        <>
            {isCollapsible ? (
                <>
                    <NativeText
                        onTextLayout={onTextLayout}
                        numberOfLines={showFullText ? undefined : numberOfLines}
                        // onPress={onPressText}
                        style={[
                            headingStyles[headingType],
                            fontWeightStyle[fontWeight],
                            textColor,
                            wrapperStyle,
                        ]}
                        {...prop}>
                        {displayText ? displayText : children}
                        {collapsible && !showFullText && `...`}
                        {collapsible && showFullText ? (
                            <NativeText
                                onPress={toggleText}
                                style={[
                                    headingStyles[headingType],
                                    fontWeightStyle[fontWeight],
                                    textStyles.textColor,
                                    wrapperStyle,
                                    {
                                        marginTop: 0,
                                    },
                                ]}>
                                {` Read less`}
                            </NativeText>
                        ) : (
                            <></>
                        )}
                    </NativeText>
                    {collapsible && !showFullText ? (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={toggleText}>
                            <NativeText
                                style={[
                                    headingStyles[headingType],
                                    fontWeightStyle[fontWeight],
                                    textStyles.textColor,
                                    wrapperStyle,
                                    { marginTop: 0 },
                                ]}>
                                {` Read more`}
                            </NativeText>
                        </TouchableOpacity>
                    ) : (
                        <></>
                    )}
                </>
            ) : (
                <NativeText
                    style={[
                        headingStyles[headingType],
                        fontWeightStyle[fontWeight],
                        lineHeight ? lineHeightStyles[headingType] : [],
                        textColor,
                        wrapperStyle,
                    ]}
                    numberOfLines={numberOfLines}
                    {...prop}>
                    {text ? text : children}
                </NativeText>
            )}
        </>
    );
}

export default Text;
