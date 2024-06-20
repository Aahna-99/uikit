import { StyleSheet } from 'react-native';
import constColors from 'utils/constants/constColors';

const colorConst = {
    default: constColors.textTitle,
    active: constColors.brandOrange600,
    white: constColors.bgWhite,
};

const imageSliderStyles = StyleSheet.create({
    gallery: {
        flex: 1,
        backgroundColor: constColors.textTitle,
    },
    screenBg: {
        backgroundColor: constColors.bgWhite,
    },
    downloadContainer: {
        alignItems: 'center',
        padding: 20,
    },
});

export { imageSliderStyles, colorConst };
