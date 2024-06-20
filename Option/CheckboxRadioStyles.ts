import { StyleSheet } from 'react-native';
import constColors from 'utils/constants/constColors';

const style = {
    selected: constColors.textCaption2,
    unSelected: constColors.textParagraph,
};

const mainStyle = StyleSheet.create({
    touchableStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    margin: {
        marginRight: 16,
    },
});

export { mainStyle, style };
