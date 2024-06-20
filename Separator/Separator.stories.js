import React from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { boolean, color, select } from '@storybook/addon-knobs';
import constColors from 'utils/constants/constColors';
import Separator from '.';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';
import { ICONS } from 'utils/models/IconsType.ts';

const separatorTypeOptions = {
    dot: 'dot',
    bar: 'bar',
    hyphen: 'hyphen',
};

const handleClick = () => {
    console.log('worked');
};

storiesOf('Separator', module)
    .addDecorator(story => <View style={styles.Decorator}>{story()}</View>)
    .add('Separator With Text', () => (
        <View style={{ flexDirection: 'row' }}>
            <Text color={constColors.textPlaceholder} headingType={'h6'}>
                Text 1
            </Text>
            <Separator
                type={select('Separator Type:', separatorTypeOptions, 'dot')}
                color={color('Separator Color:', constColors.textPlaceholder)}
            />
            <Text color={constColors.textPlaceholder} headingType={'h6'}>
                Text 2
            </Text>
        </View>
    ))
    .add('Separator With Icon', () => {

        type = select('Separator Type:', separatorTypeOptions, 'hyphen');
        direction = type == 'hyphen' ? 'column' : 'row';

        align = () => {
            return {
                alignItems : 'center',
            }
        }

        return(
        <View style={[type != 'hyphen' && align() , {flexDirection: direction}]}>
            <Icon
                noMargin={false}
                selected={boolean('selected:', false)}
                icon={ICONS.LIKE}
                size={16}
                onPress={handleClick}
            />
            <Text color={constColors.textPlaceholder} headingType={'h6'}>
                14 Liked
            </Text>
            <Separator
                type={type}
                color={color('Separator Color:', constColors.textPlaceholder)}
            />
            <Icon
                noMargin={false}
                selected={boolean('selected:', false)}
                icon={ICONS.COMMENT}
                size={16}
                onPress={handleClick}
            />
            <Text color={constColors.textPlaceholder} headingType={'h6'}>
                2 Comments
            </Text>
        </View>
        )
        });

const styles = StyleSheet.create({
    Decorator: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
