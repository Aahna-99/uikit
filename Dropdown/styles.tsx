import { StyleSheet } from 'react-native';

import constColors from 'utils/constants/constColors';

const fieldStyles = StyleSheet.create({
    dropdown: {
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 13,
        flexDirection: 'row',
        borderRadius: 4,
        borderColor: constColors.bgBorder,
    },
    placeholder: {
        flexDirection: 'row',
        overflow: 'hidden',
        flex: 1,
    },
    downIcon: { marginLeft: 'auto' },
});

export default fieldStyles;
