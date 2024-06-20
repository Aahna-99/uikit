import React from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import constColors from 'utils/constants/constColors';
import CardList from '.';
import { Card } from '../Card';
import Text from '../Text';

const listTypeOptions = {
    Horizontal: 'Horizontal',
    Vertical: 'Vertical',
};

const cardOptions = [
    'cardDefault',
    'gradientYellow',
    'gradientBlue',
    'gradientPurple',
    'gradientRed',
    'gradientOrange',
    'gradientGreen',
];

storiesOf('Card List', module)
    .addDecorator(story => <View style={styles.Decorator}>{story()}</View>)
    .add('Card List Templates', () => (
        <CardList type={select('List Type:', listTypeOptions, 'Horizontal')}>
            {cardCompList}
        </CardList>
    ));

const styles = StyleSheet.create({
    Decorator: {
        paddingHorizontal: 16,
        paddingVertical: 24,
        flex: 1,
    },
});

const headerComp = <Text headingType={'h3'}>Header Component</Text>;

const bodyComp = <Text headingType={'h5'}>Body Component Text</Text>;

const footerComp = <Text headingType={'h4'}>Footer Component</Text>;

const cardCompList = cardOptions.map(cardOption => (
    <Card
        gradient={true}
        color={[constColors[cardOption].start, constColors[cardOption].end]}
        shadow={true}
        header={headerComp}
        body={bodyComp}
        footer={footerComp}
        key={Math.random()}
    />
));
