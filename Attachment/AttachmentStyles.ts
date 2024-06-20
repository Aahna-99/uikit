import { StyleSheet } from 'react-native';
import constColors from 'utils/constants/constColors';

const AttachmentStyle = StyleSheet.create({
    fileBadgeContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: constColors.bgCanvas1,
        height: 40,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginVertical: 8,
    },
});

export default AttachmentStyle;
