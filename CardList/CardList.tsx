import React from 'react';
import { ScrollView } from 'react-native';
import { View } from '../View';
import { cardListStyles, listStyles } from './CardListStyles';

interface Props {
    children: React.ReactNode;
    type: string;
}

function CardList({ type, children }: Props) {
    let childArray = new Array();
    childArray.push(
        ...children?.map(child => (
            <View style={{ ...cardListStyles[type] }} key={Math.random()}>
                {child}
            </View>
        )),
    );
    return (
        <ScrollView
            horizontal={type === 'Horizontal'}
            contentContainerStyle={listStyles[type]}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            {childArray}
        </ScrollView>
    );
}

export default CardList;
