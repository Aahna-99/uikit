import React from 'react';
import { Text, View } from 'react-native';
import {
    headingStyles,
    colorText,
    fontWeightStyle,
    textStyles,
} from './ParagraphStyles';

interface Props {
    text: any;
    headingType: string;
    fontWeight: string;
    color: string;
    children: React.ReactNode;
}

function Paragraph({
    text,
    headingType = 'h6',
    fontWeight = 'regular',
    color = '',
    children,
}: Props) {
    const textColor = React.useMemo(() => {
        return {
            color: color ? color : colorText.color,
        };
    }, [color]);

    return (
        <View style={textStyles.wrapper}>
            <Text
                style={[
                    headingStyles[headingType],
                    fontWeightStyle[fontWeight],
                    textColor,
                ]}>
                {text ? text : children}
            </Text>
        </View>
    );
}

export default Paragraph;
