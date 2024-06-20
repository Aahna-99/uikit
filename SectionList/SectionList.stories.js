import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { select, boolean } from '@storybook/addon-knobs';
import { Avatar, Card, Icon, Media, Chip, Text } from 'uikit';
import { SectionList } from '.';
import constColors from 'utils/constants/constColors';
import { ICONS } from 'utils/models/IconsType';
import { sectionListStyles } from './SectionListStyles';

const DATA = [
    {
        title: 'Today',
        data: [
            {
                name: 'Himanshu Kumar Tanty',
                date: 'Sept 18',
                event: '2 Year Anniversary',
            },
            {
                name: 'Preethi Kanoji',
                date: 'Sept 18',
                event: 'Birthday',
            },
        ],
    },
    {
        title: 'Upcoming',
        data: [
            {
                name: 'Himanshu Kumar Tanty',
                date: 'Sept 18',
                event: '2 Year Anniversary',
            },
            {
                name: 'Preethi Kanoji',
                date: 'Sept 18',
                event: 'Birthday',
            },
        ],
    },
];

const avatarComp = (
    <Avatar
        avatarSize={48}
        userName={'Media Component'}
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

const renderSectionHeader = ({ section: { title } }) => {
    return (
        <Chip style={sectionListStyles.header}>
            <Text
                color={constColors.dynamicOrange6}
                headingType={'h6'}
                fontWeight={'semibold'}>
                {title}
            </Text>
        </Chip>
    );
};

const renderItem = ({ item }) => {
    return (
        <View style={sectionListStyles.item}>
            <Media
                key={Math.random()}
                avatar={avatarComp}
                title={item.name}
                subtitle={item.event}
                footer={footerComp}
            />
        </View>
    );
};

storiesOf('SectionList', module)
    .addDecorator(story => (
        //hardcoded height: 460 for presentation purpose
        <View style={{ height: 400 }}>
            <View style={sectionListStyles.wrapperStyle}>{story()}</View>
        </View>
    ))
    .add('SectionList', () => (
        <SectionList
            data={DATA}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            renderSectionFooter={boolean('Section Footer', true)}
        />
    ))
    .add('SectionList with Card', () => (
        <Card
            shodow={true}
            backdrop={'orange'}
            body={
                <SectionList
                    data={DATA}
                    renderItem={renderItem}
                    renderSectionHeader={renderSectionHeader}
                    renderSectionFooter={boolean('Section Footer', true)}
                />
            }
        />
    ));
