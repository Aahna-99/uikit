import { StyleSheet } from 'react-native';
import constColors from 'utils/constants/constColors';

const colorConst = {
    default: constColors.textTitle,
    active: constColors.brandOrange600,
};

const videoPlayerStyles = StyleSheet.create({
    gallery: {
        flex: 1,
        backgroundColor: constColors.textTitle,
    },
    screenBg: {
        backgroundColor: constColors.bgWhite,
    },
});

export { videoPlayerStyles, colorConst };
