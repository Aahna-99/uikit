import { StyleSheet } from 'react-native';
import constColors from 'utils/constants/constColors';

const colorConst = {
    default: constColors.textTitle,
    active: constColors.brandOrange600,
};

const iconStyles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconMargin: {
        marginRight: 8,
    },
    iconPadding: {
        padding: 4,
    }
});

export { iconStyles, colorConst };
