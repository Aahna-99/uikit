// import React from 'react';
// import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
// import { Text } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import {
//     text,
//     color,
//     boolean,
//     textColor,
//     select,
//     number,
//     radios,
// } from '@storybook/addon-knobs';
// import { StyleSheet, View } from 'react-native';

// import OptionChip from './OptionChip';
// import Checkbox from './Checkbox';
// import Radio from './Radio';

// const handleClick = () => {
//     console.log('hello');
// };

// const size = {
//     h1: 'h1',
//     h2: 'h2',
//     h3: 'h3',
//     h4: 'h4',
//     h5: 'h5',
//     h6: 'h6',
//     s1: 's1',
//     caption: 'caption',
// };

// storiesOf('Options', module)
//     .addDecorator(story => <View style={styles.Decorator}>{story()}</View>)
//     .add('Chip', () => (
//         <OptionChip
//             value="1"
//             onPress={handleClick}
//             text={text('Text:', 'No')}
//             isSelected={boolean('Selected', true)}
//         />
//     ))
//     .add('Checkbox', () => (
//         <Checkbox
//             size={select('Size:', size, 'h5')}
//             isSelected={boolean('selected', false)}
//             onPress={handleClick}
//             text={text('Text:', 'A to Z')}
//         />
//     ))
//     .add('Radio', () => (
//         <Radio
//             size={select('Size:', size, 'h5')}
//             isSelected={boolean('selected', false)}
//             onPress={handleClick}
//             text={text('Text:', 'A to Z')}
//         />
//     ));
// const styles = StyleSheet.create({
//     Decorator: {
//         backgroundColor: 'white',
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingHorizontal: 16,
//     },
// });
