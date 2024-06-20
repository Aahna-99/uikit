import { StyleSheet } from 'react-native';
import constColors from 'utils/constants/constColors';

const colorConst = {
    default: constColors.textTitle,
    active: constColors.brandOrange600,
};

const imageGridStyles = StyleSheet.create({
    gridContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    firstImageContainer: {
        marginRight: 7,
        marginBottom: 8,
    },
    imageContainer: {
        marginRight: 8,
        marginBottom: 8,
    },
    counter: {
        color: constColors.bgWhite,
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    thumbnail: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 5,
        borderRadius: 5,
    },
    imageStyle: {
        borderRadius: 5,
    },
    gallery: {
        flex: 1,
        backgroundColor: constColors.textTitle,
    },
});

export { imageGridStyles, colorConst };
