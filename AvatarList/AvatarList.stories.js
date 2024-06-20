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

import Avatar from '../Avatar';
import Icon from '../Icon';
import { Button } from '../Button/Button';
import AvatarList from '.';

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
const optionItemGroup = {
    spaced: 'spaced',
    stacked: 'stacked',
};
const optionSizeIcon = {
    range: true,
    min: 8,
    max: 72,
    step: 4,
};

const typeOptionsIcon = {
    primary: 'primary',
    secondary: 'secondary',
};

const iconName = {
    plus: 'plus',
    addUser: 'user-plus',
    more: 'ellipsis-h',
};

const iconComp = <Icon color={'#ffffff'} size={19} icon={'plus'} />;

storiesOf('AvatarList', module)
    .addDecorator(story => <View style={styles.Decorator}>{story()}</View>)
    .add('Spaced and Stacked', () => (
        <AvatarList type={select('Group Type:', optionItemGroup, 'spaced')}>
            <Avatar
                avatarSize={number('Size:', 48, optionSize)}
                userName={text('User Name1:', 'Story Book')}
                userImage={text('User Image1:', '')}
                type={select('Type1:', optionType, '')}
                badgeBgColor={color('Badge Bg Color:', '#5279E4')}
                badgeIcon={text('Badge Icon:', 'briefcase')}
                badgeTextColor={color('Badge color:', '')}
            />
            <Avatar
                avatarSize={number('Size:', 48, optionSize)}
                userName={'Story Book'}
                userImage={''}
                type={''}
            />
            <Avatar
                avatarSize={number('Size:', 48, optionSize)}
                userName={'Story Book'}
                userImage={
                    'https://app.mastmojo.com/zeroheight/profile_pic.jpg'
                }
                type={select('Type3:', optionType, '')}
                counterValue={number('Counter Value3:', 0)}
            />
            <Button
                style={{
                    backgroundColor: '#0558CE',
                }}>
                {iconComp}
            </Button>
        </AvatarList>
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
