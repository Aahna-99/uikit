import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import {
    text,
    color,
    boolean,
    textColor,
    select,
    number,
    radios,
} from '@storybook/addon-knobs';
import { StyleSheet, View } from 'react-native';
import constColors from 'utils/constants/constColors';
import { ICONS } from 'utils/models/IconsType.ts';
import { Button } from './Button';
import Text from '../Text';
import Icon from '../Icon';

const handleClick = () => {
    console.log('hello');
};

const mode = {
    default: '',
    outlined: 'outlined',
    text: 'text',
};

storiesOf('Button', module)
    .addDecorator(story => <View style={styles.Decorator}>{story()}</View>)
    .add('Icon on Left', () => {
        const disabled = boolean('disabled:', false);
        const stretch = boolean('stretch:', false);
        const modes = select('mode:', mode, '');
        const color =
            modes == '' ? constColors.textWhite : constColors.textCaption2;

        const textComp1 = (
            <Text
                color={color} // just for storybook example
                headingType={'h5'}
                fontWeight={'semibold'}>
                {'Button'}
            </Text>
        );

        const iconComp1 = (
            <Icon
                color={color} // just for storybook example
                size={16}
                icon={ICONS.PLUS}
            />
        );

        return (
            <Button
                disabled={disabled}
                stretch={stretch}
                mode={modes}
                icon={() => iconComp1}
                onPress={handleClick}
                // contentStyle={{ flexDirection: 'row-reverse' }}
            >
                {textComp1}
            </Button>
        );
    })
    .add('Icon on right', () => {
        const disabled = boolean('disabled:', false);
        const stretch = boolean('stretch:', false);
        const modes = select('mode:', mode, '');
        const color =
            modes == '' ? constColors.textWhite : constColors.textCaption2;

        const textComp1 = (
            <Text
                color={color} // just for storybook example
                headingType={'h5'}
                fontWeight={'semibold'}>
                {'Button'}
            </Text>
        );

        const iconComp1 = (
            <Icon
                color={color} // just for storybook example
                size={14}
                icon={ICONS.PLUS}
            />
        );

        return (
            <Button
                disabled={disabled}
                stretch={stretch}
                mode={modes}
                icon={() => iconComp1}
                onPress={handleClick}
                contentStyle={{ flexDirection: 'row-reverse' }}>
                {textComp1}
            </Button>
        );
    })
    .add('With Icon', () => {
        const disabled = boolean('disabled:', false);
        const stretch = boolean('stretch:', false);
        const modes = select('mode:', mode, '');
        const color =
            modes == '' ? constColors.textWhite : constColors.textCaption2;

        const iconComp1 = (
            <Icon
                color={color} // just for storybook example
                size={16}
                icon={ICONS.SEND}
            />
        );

        return (
            <Button
                rounded
                disabled={disabled}
                stretch={stretch}
                mode={modes}
                onPress={handleClick}
                // contentStyle={{flexDirection: 'row-reverse'}}
            >
                {iconComp1}
            </Button>
        );
    })
    .add('With Counter', () => {
        const disabled = boolean('disabled:', false);
        const stretch = boolean('stretch:', false);
        const modes = select('mode:', mode, '');
        const color =
            modes == '' ? constColors.textParagraph : constColors.textCaption2;

        const textComp1 = (
            <Text
                color={color} // just for storybook example
                headingType={'h5'}
                fontWeight={'semibold'}>
                {'+3'}
            </Text>
        );

        return (
            <Button
                rounded
                style={{
                    backgroundColor: constColors.dynamicJetgrey1,
                }}
                disabled={disabled}
                stretch={stretch}
                mode={modes}
                onPress={handleClick}
                // contentStyle={{flexDirection: 'row-reverse'}}
            >
                {textComp1}
            </Button>
        );
    });
const styles = StyleSheet.create({
    container: { justifyContent: 'space-around', flex: 1 },
    Decorator: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
});
