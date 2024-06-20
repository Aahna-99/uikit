import React from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import Media from '.';
import Avatar from '../Avatar';
import Text from '../Text/Text';
import Card from '../Card';
import Separator from '../Separator/Separator';
import Icon from '../../../components/shared/Icon';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import { ICONS } from '../../../models/IconsType';
import constColors from 'utils/constants/constColors';

storiesOf('Media', module)
    .addDecorator(story => (
        <View style={styles.wrapperStyle}>
            <View style={styles.Decorator}>{story()}</View>
        </View>
    ))
    .add('Media without Footer', () => (
        <Media avatar={avatarComp} body={bodyComp} />
    ))
    .add('Media with Footer', () => (
        <Media avatar={avatarComp} body={bodyComp2} footer={footerComp} />
    ))
    .add('Media with Title and Subtitle', () => (
        <Media
            avatar={avatarComp}
            title={text('Title:', 'Title Check')}
            subtitle={text('Subtitle:', 'Check Subtitle')}
            footer={footerComp}
        />
    ))
    .add('Media with Card', () => (
        <Card
            color={[
                constColors['gradientGreen'].start,
                constColors['gradientGreen'].end,
            ]}
            gradient={true}
            body={<Media avatar={avatarComp} body={bodyComp} />}
        />
    ));

const styles = StyleSheet.create({
    Decorator: {
        flex: 1,
    },
    bodHeading: {
        paddingBottom: 4,
    },
    wrapperStyle: { height: 150, justifyContent: 'center', padding: 8 },
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

const bodyComp = (
    <View>
        <View style={styles.bodHeading}>
            <Text
                headingType={'h6'}
                fontWeight={'semibold'}
                wrapperStyle={{ alignItems: 'flex-start' }}>
                Celebration Example
            </Text>
        </View>
        <Text
            color={constColors.textPlaceholder}
            headingType={'h6'}
            wrapperStyle={{ alignItems: 'flex-start' }}>
            Dear Himanshu Kumar Tanty,Your contribution to the company for the
            last 2 years is greatly appreciated. Wish you much more success in
            the years ahead.
        </Text>
    </View>
);

const bodyComp2 = (
    <View>
        <View style={styles.bodHeading}>
            <Text
                headingType={'h6'}
                fontWeight={'semibold'}
                wrapperStyle={{ alignItems: 'flex-start' }}>
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
