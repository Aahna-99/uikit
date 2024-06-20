import { StyleSheet } from 'react-native';

const marginStyle = {
    marginHorizontal: 8,
    alignItems: 'center',
};

const separatorStyles = StyleSheet.create({
    separatorStyle: {
        ...marginStyle,
    },
    dotSeparator: {
        ...marginStyle,
        height: 3,
        width: 3,
        borderRadius: 1.5,
        marginVertical: 8,
    },
    barSeparator: {
        ...marginStyle,
        height: '100%',
        width: 1,
    },
    hyphenSeparator: {
        ...marginStyle,
        marginHorizontal: 0,
        marginVertical: 8,
        height: 1,
    },
});

export { separatorStyles };
