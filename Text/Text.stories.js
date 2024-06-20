import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { select, text, object } from '@storybook/addon-knobs';
import { StyleSheet, View } from 'react-native';
import { headingConst, fontWeightConst } from 'utils/constants/constTypography';

import Text from '.';
import Paragraph from '../Paragraph';

import CollapsibleText from '../../../components/shared/CollapsibleText';

const headingOptions = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    s1: 's1',
    caption: 'caption',
};

const fontWeightOptions = {
    regular: 'regular',
    semibold: 'semibold',
};

storiesOf('Typography', module)
    .addDecorator(story => <View style={styles.Decorator}>{story()}</View>)
    .add('Text Example', () => (
        <Text
            headingType={select('Heading Type:', headingOptions, 'h5')}
            fontWeight={select('Font Weight:', fontWeightOptions, 'regular')}
            numberOfLines={4}
            isCollapsible={true}
            text={text(
                'Text:',
                `By using useCallback, the navigateToSocial function reference will remain the same across renders unless the dependencies change. This can help prevent unnecessary re-renders of components that use this event handler. Repeat the same steps for other event handlers you want to optimize in your code.
            Please note that the code snippet you provided is a partial code snippet, and I've assumed the location and structure of the event handler based on the existing code. Make sure to adjust the implementation based on your specific requirements and the actual location of the event handler functions in your code.`,
            )}></Text>
    ))
    .add('Paragraph Example', () => (
        <Paragraph
            fontWeight={select('Font Weight:', fontWeightOptions, 'regular')}>
            {text(
                'Text:',
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehend',
            )}
        </Paragraph>
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
