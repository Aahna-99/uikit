import { StyleSheet } from 'react-native';

const listStyles = StyleSheet.create({
    Horizontal: {
        flexDirection: 'row',
    },
    Vertical: {
        flexDirection: 'column',
    },
});

const cardListStyles = StyleSheet.create({
    Horizontal: {
        marginHorizontal: 8,
    },
    Vertical: {
        marginVertical: 8,
    },
});

export { listStyles, cardListStyles };
