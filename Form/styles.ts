import { StyleSheet } from 'react-native';

import constColors from 'utils/constants/constColors';

const fieldStyles = StyleSheet.create({
    container: {
        padding: 16,
    },
    chip: {
        backgroundColor: constColors.brandBlue200,
        maxWidth: 100,
        marginRight: 8,
    },
    countIcon: {
        borderRadius: 50,
        height: 34,
        paddingHorizontal: 4,
        width: 34,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: constColors.brandBlue200,
    },
    countText: {
        alignSelf: 'center',
        textAlign: 'center',
    },
    dropdown: {
        borderWidth: 1,
        width: '100%',
        marginTop: 8,
        paddingHorizontal: 16,
        paddingVertical: 13,
        flexDirection: 'row',
        borderRadius: 4,
        borderColor: constColors.bgBorder,
    },
    placeholder: {
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center',
        flex: 1,
    },
    downIcon: { marginLeft: 'auto' },
    apply: { marginTop: 16 },
    modalHeight: { maxHeight: 440 },
});

const fieldSetStyles = StyleSheet.create({
    container: {
        borderRadius: 8,
        backgroundColor: 'white',
        width: '100%',
        marginTop: 8,
    },
});

export { fieldStyles, fieldSetStyles };
