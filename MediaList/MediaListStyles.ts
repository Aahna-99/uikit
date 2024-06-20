import { StyleSheet } from 'react-native';
import constColors from 'utils/constants/constColors';

const mediaListStyles = StyleSheet.create({
    borderStyle: {
        borderBottomWidth: 1,
        borderBottomColor: constColors.bgBorder,
    },
    listStyle: {
        paddingVertical: 8,
    },
});

export { mediaListStyles };
