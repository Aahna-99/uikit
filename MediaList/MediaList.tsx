import React from 'react';
import { ScrollView } from 'react-native';
import { View } from '../View';
import { mediaListStyles } from './MediaListStyles';

interface Props {
    children: React.ReactNode;
    border: string;
}

function MediaList({ children, border = '' }: Props) {
    let childArray = new Array();
    let mediaListStyle = {
        ...mediaListStyles.listStyle,
        ...(border ? mediaListStyles.borderStyle : []),
    };

    if (children.length > 1) {
        childArray.push(
            ...children?.map(child => (
                <View style={mediaListStyle} key={Math.random()}>
                    {child}
                </View>
            )),
        );
    } else childArray = children;

    return <ScrollView>{childArray}</ScrollView>;
}

export default MediaList;
