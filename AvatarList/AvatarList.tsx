import React from 'react';
import { View } from 'react-native';
import { itemGroupStyles } from './AvatarListStyles';

interface Props {
    children: React.ReactNode;
    type?: string;
}

function AvatarList({ children, type }: Props) {
    let childArray = new Array();
    if (children.length > 1)
        childArray.push(
            ...children.map(child => (
                <View style={[itemGroupStyles[type]]} key={Math.random()}>
                    {child}
                </View>
            )),
        );
    else childArray = children;
    return <View style={[itemGroupStyles.view]}>{childArray}</View>;
}

export default AvatarList;
