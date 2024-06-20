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
import { constColors } from 'utils/constants/constColors.ts';
import Text from '../Text';
import Icon from '../Icon';
import Chip from '.';

const compText = (
    <Text headingType={'h6'} fontWeight={'regular'}>
        {'Tab Title'}
    </Text>
);

const compText2 = (
    <Text color="#E68205" headingType={'h6'} fontWeight={'semibold'}>
        {'Recommended'}
    </Text>
);

const compLeft = <Icon color="red" size={12} icon={'expand'} />;
const compRight = <Icon color="red" size={12} icon={'home'} />;

storiesOf('Chip', module)
    .addDecorator(story => <View style={styles.Decorator}>{story()}</View>)
    .add('Chip Example 1', () => (
        <Chip
            selected={boolean('selected:', false)}
            leftContent={compLeft}
            // rightContent = {compRight}
            disabled={boolean('disabled:', false)}>
            {compText}
        </Chip>
    ))
    .add('Chip Example 2', () => (
        <Chip
            style={{
                backgroundColor: '#FFF4E6',
            }}>
            {compText2}
        </Chip>
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
