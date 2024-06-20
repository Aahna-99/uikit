import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import {
    select,
    text,
    object,
    number,
    boolean,
    color,
} from '@storybook/addon-knobs';
import { StyleSheet, View } from 'react-native';
import { headingConst, fontWeightConst } from 'utils/constants/constTypography';
import { ICONS } from 'utils/models/IconsType.ts';

import ImageGrid from '.';

const images = [
    {
        uri: 'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
    },
    { uri: 'http://i.imgur.com/XP2BE7q.jpg' },
    { uri: 'http://i.imgur.com/5nltiUd.jpg' },
    { uri: 'http://i.imgur.com/6vOahbP.jpg' },
    { uri: 'http://i.imgur.com/kj5VXtG.jpg' },
    {
        uri: 'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
    },
    {
        uri: 'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
    },
    {
        uri: 'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
    },
];

storiesOf('ImageGrid', module)
    .addDecorator(story => <View style={styles.Decorator}>{story()}</View>)
    .add('ImageGrid Example', () => {
        return <ImageGrid images={images} />;
    });

const styles = StyleSheet.create({
    Decorator: {
        backgroundColor: 'white',
        alignItems: 'center',
    },
});
