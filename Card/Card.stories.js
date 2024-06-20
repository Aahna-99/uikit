import React from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { select, text, object, boolean } from '@storybook/addon-knobs';
import { Card } from '.';
import Text from '../Text/Text';

const backdropOptions = {
    none: '',
    blue: 'blue',
    green: 'green',
    orange: 'orange',
};

storiesOf('Card', module)
    .addDecorator(story => <View style={styles.Decorator}>{story()}</View>)
    .add('Card Templates', () => {
        const start = text('Gradient Start:', 'yellow');
        const end = text('Gradient End:', 'orange');
        return (
            <Card
                gradient={boolean('Gradient', false)}
                color={[start, end]}
                shadow={boolean('Shadow', false)}
                backdrop={select('Backdrop:', backdropOptions, 'none')}
                header={headerComp}
                body={bodyComp}
                footer={footerComp}
            />
        );
    });

const styles = StyleSheet.create({
    Decorator: {
        padding: 16,
        height: 200,
    },
});

const headerComp = <Text headingType={'h3'}>Header Component</Text>;

const bodyComp = <Text headingType={'h5'}>Body Component</Text>;

const footerComp = <Text headingType={'h4'}>Footer Component</Text>;
