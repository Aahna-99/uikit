import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import {
    select,
    text,
    object,
    number,
    boolean,
    color,
} from '@storybook/addon-knobs';
import { StyleSheet, View } from 'react-native';
import { headingConst, fontWeightConst } from 'utils/constants/constTypography';
import { ICONS } from 'utils/models/IconsType.ts';

import Icon from '.';

const optionSize = {
    range: true,
    min: 14,
    max: 24,
    step: 2,
};

const Icons = {
    None: '',
    ...ICONS,
};

const handleClick = () => {
    console.log('icon clicked');
};

storiesOf('Icons', module)
    .addDecorator(story => <View style={styles.Decorator}>{story()}</View>)
    .add('Custom Icon Example', () => (
        <Icon
            noMargin={boolean('noMargin:', true)}
            selected={boolean('selected:', false)}
            icon={select('Icon:', Icons, ICONS.HOME)}
            color={color('color:', '#000A16')}
            iconAfterClick={select('iconAfterClick:', Icons, '')}
            selectedColor={color('selectedColor:', '#E24C1C')}
            size={number('size:', 16, optionSize)}
            onPress={handleClick}
        />
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
