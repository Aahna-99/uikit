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
import { ICONS } from 'utils/models/IconsType.ts';

import Avatar from '.';

const handleClick = () => {
    console.log('hello');
};

const defaultValue = { name: 'user', type: 'font-awesome' };
const containerStyle = { flex: 0, marginRight: 60 };
const optionSize = {
    range: true,
    min: 8,
    max: 72,
    step: 4,
};
const optionType = {
    none: '',
    badge: 'badge',
};

storiesOf('Avatar', module)
    .addDecorator(story => <View style={styles.Decorator}>{story()}</View>)
    .add('Avatar with image', () => (
        <Avatar
            avatarSize={number('Size:', 48, optionSize)}
            userName={text('User Name:', 'Story Book')}
            userImage={text(
                'User Image:',
                'https://app.mastmojo.com/zeroheight/profile_pic.jpg',
            )}
            type={select('Type:', optionType, '')}
            badgeBgColor={color('Badge Bg Color:', '#5279E4')}
            badgeIcon={text('Badge Icon:', 'briefcase')}
            badgeTextColor={color('Badge color:', '')}
        />
    ))
    .add('Avatar With Initials', () => (
        <Avatar
            avatarSize={number('Size:', 48, optionSize)}
            userName={text('User Name:', 'Story Book')}
            userImage={text('User Image:', '')}
            type={select('Type:', optionType, '')}
            badgeBgColor={color('Badge Bg Color:', '#5279E4')}
            badgeIcon={text('Badge Icon:', 'briefcase')}
            badgeTextColor={color('Badge color:', '')}
        />
    ))
    .add('Avatar With badge', () => (
        <Avatar
            avatarSize={number('Size:', 48, optionSize)}
            userName={text('User Name:', 'Story Book')}
            userImage={text('User Image:', '')}
            type={select('Type:', optionType, 'badge')}
            badgeBgColor={color('Badge Bg Color:', '#5279E4')}
            badgeIcon={text('Badge Icon:', ICONS.WORK_ANNIVERSARY)}
            badgeTextColor={color('Badge color:', '')}
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
