import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { select, text, color, object, boolean } from '@storybook/addon-knobs';
import { StyleSheet, View } from 'react-native';
import { headingConst, fontWeightConst } from 'utils/constants/constTypography';
import Avatar from '../Avatar';
import TextInput from '.';
import { ICONS } from 'utils/models/IconsType.ts';
import Icon from '../Icon';
import { Button } from '../Button/Button';
import { debounce } from 'utils/hooks/debounce.ts';
import constColors from 'utils/constants/constColors';

const handleClick = value => {
    console.log(value);
};

const avatar = (
    <Avatar
        avatarSize={32}
        userName={'Story Book'}
        userImage={'https://app.mastmojo.com/zeroheight/profile_pic.jpg'}
        type={''}
        badgeBgColor={constColors.dynamicBlue6}
        badgeIcon={'briefcase'}
        badgeTextColor={''}
    />
);

const iconComp1 = (
    <Icon color={constColors.dynamicJetgrey6} size={14} icon={ICONS.EMAIL} />
);
const iconComp2 = (
    <Icon color={constColors.dynamicJetgrey6} size={14} icon={ICONS.HIDE} />
);
const iconComp3 = (
    <Icon color={constColors.textWhite} size={17} icon={ICONS.SEND} />
);
const button1 = (
    <Button
        style={{
            borderRadius: 2,
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            backgroundColor: constColors.textCaption2,
        }}
        rounded
        onPress={handleClick}>
        {iconComp3}
    </Button>
);

storiesOf('Input', module)
    .addDecorator(story => <View style={styles.Decorator}>{story()}</View>)
    .add('Text Input With Button', () => (
        <TextInput
            error={boolean('error:', false)}
            placeholder={text('placeholder:', 'Enter your Comment...')}
            button={button1}
            errorText={text('errorText', '')}
            bgColor={color('bgColor:', constColors.textWhite)}
        />
    ))
    .add('Text Input', () => (
        <TextInput
            multiline={boolean('multiline:', false)}
            error={boolean('error:', false)}
            avatar={iconComp1}
            icon={iconComp2}
            placeholder={text('placeholder:', 'Enter your Comment...')}
            errorText={text(
                'errorText',
                'Error: e.g. Your hint or prompt goes here',
            )}
            onChange={handleClick}
            text={text('text:', 'example')}
            editable={boolean('editable:', true)}
        />
    ))
    .add('Text Input With Avatar', () => (
        <TextInput
            multiline={boolean('multiline:', false)}
            error={boolean('error:', false)}
            placeholder={text('placeholder:', 'Add your response...')}
            avatar={avatar}
            errorText={text(
                'errorText',
                'Error: e.g. Your hint or prompt goes here',
            )}
            onChange={handleClick}
        />
    ));

const styles = StyleSheet.create({
    Decorator: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
});
