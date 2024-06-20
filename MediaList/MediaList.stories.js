import React from 'react';
import { StyleSheet, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { radios, select, boolean } from '@storybook/addon-knobs';

import Icon from '../../../components/shared/Icon';
import { ICONS } from '../../../models/IconsType';
import constColors from 'utils/constants/constColors';

import Media from '../Media';
import Text from '../Text/Text';
import Separator from '../Separator/Separator';
import Avatar from '../Avatar';
import MediaList from '.';

storiesOf('MediaList', module)
    .addDecorator(story => <View style={styles.Decorator}>{story()}</View>)
    .add('Media List with Media card', () => (
        <MediaList border={boolean('Border:', false)}>{mediaComp}</MediaList>
    ));

const mediaCards = [1, 2, 3, 4, 5, 6];

const borderOptions = {
    none: false,
    border: true,
};

const styles = StyleSheet.create({
    Decorator: {
        // maxWidth: 375, //maxWidth hardcoded for storybook presentation purpose
        padding: 16,
    },
    bodyStyle: {
        alignItems: 'flex-start',
    },
});

const avatarComp = (
    <Avatar
        avatarSize={48}
        userName={'First Component'}
        userImage={'https://app.mastmojo.com/zeroheight/profile_pic.jpg'}
        type={'badge'}
        badgeBgColor={'#5279E4'}
        badgeIcon={'work_anniversary'}
    />
);

const bodyComp2 = (
    <View style={styles.bodyStyle}>
        <View>
            <Text headingType={'h6'} fontWeight={'semibold'}>
                Himanshu Kumar Tanty
            </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
            <Text color={constColors.textPlaceholder} headingType={'h6'}>
                Sept 18
            </Text>
            <Separator />
            <Text color={constColors.textPlaceholder} headingType={'h6'}>
                Birthday
            </Text>
        </View>
    </View>
);

const footerComp = (
    <Icon
        name={ICONS.ChevronRight}
        size={18}
        color={constColors.textPlaceholder}
    />
);

const mediaComp = mediaCards.map(card => (
    <Media
        key={Math.random()}
        avatar={avatarComp}
        body={bodyComp2}
        footer={footerComp}
    />
));
