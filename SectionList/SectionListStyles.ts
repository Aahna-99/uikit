import { StyleSheet } from 'react-native';
import constColors from 'utils/constants/constColors';

const sectionListStyles = StyleSheet.create({
    wrapperStyle: { flex: 1, margin: 16 },
    header: {
        backgroundColor: constColors.dynamicOrange1,
    },
    item: {
        padding: 4,
        marginVertical: 0,
    },
    container: {
        marginHorizontal: 16,
    },
    sectionFooter: { paddingBottom: 8 },
});

export { sectionListStyles };
