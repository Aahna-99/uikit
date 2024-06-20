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
import { Select } from '.';

const handleClick = value => {
    console.log(value);
};

const onCheckBoxSelected = params => {
    console.log(params);
};

const onRadioSelected = params => {
    console.log(params);
};

const optionType = {
    singleSelect: 'singleSelect',
    multiSelect: 'multiSelect',
};

const checkBox = [
    { name: 'Account Management', value: '1' },
    { name: 'Administration', value: '2' },
    { name: 'Business Development', value: '3' },
    { name: 'Customer Experience', value: '4' },
    { name: 'Customer Support', value: '5' },
    { name: 'DevOps & IT', value: '6' },
    { name: 'Engineering', value: '7' },
    { name: 'Experience Design', value: '8' },
];

const chipOption = [
    { name: 'Yes', value: '1' },
    { name: 'Maybe', value: '2' },
    { name: 'No', value: '3' },
];

storiesOf('Select', module)
    .addDecorator(story => <View style={styles.Decorator}>{story()}</View>)
    .add('CheckBox', () => (
        <Select.CheckBox onPress={onCheckBoxSelected} items={checkBox} />
    ))
    .add('Chip', () => (
        <Select.Chip
            type={select('Type: ', optionType, 'singleSelect')}
            onPress={onCheckBoxSelected}
            items={chipOption}
        />
    ))
    .add('Radio', () => (
        <Select.Radio onPress={onRadioSelected} items={checkBox} />
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
