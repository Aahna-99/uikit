import React from 'react';
import { View as RNView, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { select, boolean } from '@storybook/addon-knobs';
import { Text, View, Media, Avatar, Icon, Card, Frame } from 'uikit';
import constColors from 'utils/constants/constColors';
import { ICONS } from 'utils/models/IconsType';
import { FlatList } from '.';
import { flatListStyles } from './FlatListStyles';

const MEDIA_DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        subtitle: 'First Subtitle First Subtitle',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        subtitle: 'Second Subtitle Second Subtitle',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        subtitle: 'Third Subtitle Third Subtitle',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d71',
        title: 'Fourth Item',
        subtitle: 'Fourth Subtitle Fourth Subtitle',
    },
];

const CARD_DATA = [
    {
        id: 1,
        color: 'cardDefault',
    },
    {
        id: 2,
        color: 'gradientYellow',
    },
    {
        id: 3,
        color: 'gradientBlue',
    },
    {
        id: 4,
        color: 'gradientPurple',
    },
    {
        id: 5,
        color: 'gradientRed',
    },
    {
        id: 6,
        color: 'gradientOrange',
    },
    {
        id: 7,
        color: 'gradientGreen',
    },
];

const listTypeOptions = {
    Horizontal: 'Horizontal',
    Vertical: 'Vertical',
};

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

const footerComp = (
    <Icon
        icon={ICONS.CHEVRON_RIGHT}
        size={18}
        color={constColors.textPlaceholder}
    />
);

const renderMediaItems = ({ item }) => {
    return (
        <Media
            key={Math.random()}
            avatar={avatarComp}
            title={item.title}
            subtitle={item.subtitle}
            footer={footerComp}
        />
    );
};

const cardHeader = <Text headingType={'h3'}>Header Component</Text>;

const cardBody = <Text headingType={'h5'}>Body Text Component</Text>;

const cardFooter = <Text headingType={'h4'}>Footer Component</Text>;

const renderCardItems = ({ item }) => {
    return (
        <Card
            gradient={true}
            color={[constColors[item.color].start, constColors[item.color].end]}
            shadow={true}
            header={cardHeader}
            body={cardBody}
            footer={cardFooter}
            key={Math.random()}
        />
    );
};

storiesOf('FlatList', module)
    .addDecorator(story => (
        <View style={flatListStyles.wrapper}>{story()}</View>
    ))
    .add('MediaList', () => {
        return (
            <FlatList
                data={MEDIA_DATA}
                renderItem={renderMediaItems}
                ItemSeparatorComponent={boolean('Border:', false)}
            />
        );
    })
    .add('CardList', () => {
        return (
            <FlatList
                data={CARD_DATA}
                renderItem={renderCardItems}
                listType={select('List Type:', listTypeOptions, 'Horizontal')}
            />
        );
    });
