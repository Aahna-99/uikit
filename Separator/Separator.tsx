import React from 'react';
import { View } from 'react-native';
import constColors from 'utils/constants/constColors';
import { separatorStyles } from './SeparatorStyles';

interface Props {
    type?: string;
    color?: string;
    style?: object;
}

function Separator({
    type = 'dot',
    color = constColors.textPlaceholder,
    style,
}: Props) {
    function typeSeparator(type: string, color: string) {
        if (type == 'dot') {
            return (
                <View
                    style={{
                        ...separatorStyles.dotSeparator,
                        backgroundColor: color,
                        ...style,
                    }}></View>
            );
        } else if (type == 'hyphen') {
            return (
                <View
                    style={[
                        separatorStyles.hyphenSeparator,
                        { backgroundColor: color },
                        style,
                    ]}
                />
            );
        } else if (type == 'bar') {
            return (
                <View
                    style={[
                        separatorStyles.barSeparator,
                        { backgroundColor: color },
                        style,
                    ]}
                />
            );
        }
    }

    return typeSeparator(type, color);
}

export default Separator;
