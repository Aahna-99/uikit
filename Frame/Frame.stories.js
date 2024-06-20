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
import { StyleSheet, View } from 'react-native';

import Frame from '.';

const handleClick = () => {
    console.log('hello');
};

const optionSize = {
    range: true,
    min: 8,
    max: 72,
    step: 2,
};
const optionType = {
    none: '',
    notify: 'notify',
};

storiesOf('Frame', module)
    .addDecorator(story => <View style={styles.Decorator}>{story()}</View>)
    .add('Frame with image', () => (
        <Frame
            size={number('Size:', 48, optionSize)}
            userImage={text(
                'User Image:',
                'https://app.mastmojo.com/zeroheight/profile_pic.jpg',
            )}
            icon={text('Icon:', 'briefcase')}
            text={text('Text:', 'Gaming')}
            isNotify={select('isNotify', optionType, 'notify')}
        />
    ));
const styles = StyleSheet.create({
    Decorator: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
});
