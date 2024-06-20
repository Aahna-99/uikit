import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import {
    text,
    color,
    boolean,
    textColor,
    object,
    number,
    select,
} from '@storybook/addon-knobs';
import { StyleSheet, View, Text } from 'react-native';

import Frame from '../Frame';
import FrameList from '.';

const handleClick = () => {
    console.log('hello');
};

const data = [
    {
        id: 1,
        size: 48,
        userImage: 'https://app.mastmojo.com/zeroheight/profile_pic.jpg',
        icon: 'briefcase',
        text: 'Gaming',
        isNotify: 'notify',
    },
    {
        id: 2,
        size: 48,
        userImage: 'https://app.mastmojo.com/zeroheight/profile_pic.jpg',
        icon: 'briefcase',
        text: 'Gaming',
        isNotify: 'notify',
    },
    {
        id: 3,
        size: 48,
        userImage: 'https://app.mastmojo.com/zeroheight/profile_pic.jpg',
        icon: 'briefcase',
        text: 'Gaming',
        isNotify: 'notify',
    },
    {
        id: 4,
        size: 48,
        userImage: 'https://app.mastmojo.com/zeroheight/profile_pic.jpg',
        icon: 'briefcase',
        text: 'Gaming',
        isNotify: 'notify',
    },
    {
        id: 5,
        size: 48,
        userImage: 'https://app.mastmojo.com/zeroheight/profile_pic.jpg',
        icon: 'briefcase',
        text: 'Gaming',
        isNotify: 'notify',
    },
    {
        id: 6,
        size: 48,
        userImage: 'https://app.mastmojo.com/zeroheight/profile_pic.jpg',
        icon: 'briefcase',
        text: 'Gaming',
        isNotify: 'notify',
    },
    {
        id: 7,
        size: 48,
        userImage: 'https://app.mastmojo.com/zeroheight/profile_pic.jpg',
        icon: 'briefcase',
        text: 'Gaming',
        isNotify: 'notify',
    },
    {
        id: 8,
        size: 48,
        userImage: 'https://app.mastmojo.com/zeroheight/profile_pic.jpg',
        icon: 'briefcase',
        text: 'Gaming',
        isNotify: 'notify',
    },
    {
        id: 9,
        size: 48,
        userImage: 'https://app.mastmojo.com/zeroheight/profile_pic.jpg',
        icon: 'briefcase',
        text: 'Gaming',
        isNotify: 'notify',
    },
    {
        id: 10,
        size: 48,
        userImage: 'https://app.mastmojo.com/zeroheight/profile_pic.jpg',
        icon: 'briefcase',
        text: 'Gaming',
        isNotify: 'notify',
    },
    {
        id: 11,
        size: 48,
        userImage: 'https://app.mastmojo.com/zeroheight/profile_pic.jpg',
        icon: 'briefcase',
        text: 'Gaming',
        isNotify: 'notify',
    },
    {
        id: 12,
        size: 48,
        userImage: 'https://app.mastmojo.com/zeroheight/profile_pic.jpg',
        icon: 'briefcase',
        text: 'Gaming',
        isNotify: 'notify',
    },
    {
        id: 13,
        size: 48,
        userImage: 'https://app.mastmojo.com/zeroheight/profile_pic.jpg',
        icon: 'briefcase',
        text: 'Gaming',
        isNotify: 'notify',
    },
    {
        id: 14,
        size: 48,
        userImage: 'https://app.mastmojo.com/zeroheight/profile_pic.jpg',
        icon: 'briefcase',
        text: 'Gaming',
        isNotify: 'notify',
    },
];

storiesOf('FrameList', module)
    .addDecorator(story => <View style={styles.Decorator}>{story()}</View>)
    .add('Space with 4 items', () => <FrameList data={data} />);
const styles = StyleSheet.create({
    Decorator: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
