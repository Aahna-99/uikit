import React from 'react';
import { Text, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { number, boolean, color, select, text } from '@storybook/addon-knobs';
import constColors from 'utils/constants/constColors';

import Progress from '.';

import styles from './styles';

const optionSize = {
    range: true,
    min: 0,
    max: 100,
    step: 1,
};

const status = {
    none: 'none',
    'on track': 'on track',
    'not started': 'not started',
    'in progress': 'in progress',
    behind: 'behind',
    achieved: 'achieved',
    'at risk': 'at risk',
};

storiesOf('Progress', module)
    .addDecorator(story => (
        <View style={[styles.storyContainer]}>{story()}</View>
    ))
    .add('Single', () => (
        <Progress.Bar
            value={number('Progress:', 0, optionSize)}
            height={number('Height:', 12, { range: false })}
            status={select('Status:', status, '')}
            headerLeft={<Text>{text('Header left:', '')}</Text>}
            headerRight={<Text>{text('Header right:', '')}</Text>}
            footerLeft={<Text>{text('Footer left:', '')}</Text>}
            footerRight={<Text>{text('Footer right:', '')}</Text>}
        />
    ));

storiesOf('Progress', module)
    .addDecorator(story => <View style={styles.storyContainer}>{story()}</View>)
    .add('Multi', () => {
        value1 = number('Value1:', 0, optionSize);
        color1 = color('Color1:', 'grey');

        value2 = number('Value2:', 0, optionSize);
        color2 = color('Color2:', 'grey');

        return (
            <Progress.Bar
                fill={boolean('Fill:', true)}
                values={[
                    {
                        value: value1,
                        color: color1,
                    },
                    {
                        value: value2,
                        color: color2,
                    },
                ]}
                height={number('Height:', 12, { range: false })}
                headerLeft={<Text>{text('Header left:', '')}</Text>}
                headerRight={<Text>{text('Header right:', '')}</Text>}
                footerLeft={<Text>{text('Footer left:', '')}</Text>}
                footerRight={<Text>{text('Footer right:', '')}</Text>}
            />
        );
    });
