import { StyleSheet } from 'react-native';
import constColors from 'utils/constants/constColors';

const AttachmentImageStyle = StyleSheet.create({
    wrapperStyle: {
        overflow: 'hidden',
        backgroundColor: constColors.bgEmpty,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageWrapperStyle: {
        overflow: 'hidden',
        flex: 0,
    },
});

export default AttachmentImageStyle;
