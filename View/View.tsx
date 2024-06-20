import React from 'react';
import { View as NativeView } from 'react-native';

interface Props {
    children: object;
    style?: object;
}

function View({ children, style, ...props }: Props) {
    return (
        <NativeView style={[{ flex: 1 }, style]} {...props}>
            {children}
        </NativeView>
    );
}

export { View };
