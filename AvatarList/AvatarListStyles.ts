import { StyleSheet } from 'react-native';
import constColors from 'utils/constants/constColors';

const itemGroupStyles = StyleSheet.create({
    // dynamic background
    stacked: {
        marginRight: -10,
        borderColor: constColors.bgWhite,
        borderWidth: 2,
        borderRadius: 50,
    },

    spaced: {
        marginRight: 8,
        borderColor: 'none',
        borderWidth: 0,
        borderRadius: 0,
    },

    view: {
        // flexWrap: 'wrap',
        flexDirection: 'row',
    },
});

export { itemGroupStyles };
