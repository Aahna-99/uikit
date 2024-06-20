import { StyleSheet } from 'react-native';
import constColors from 'utils/constants/constColors';
import { fontWeightConst, headingConst } from 'utils/constants/constTypography';

const style = {
    border: {
        borderRadius: 8,
    },
    margin: {
        marginVertical: 0,
        marginHorizontal: 0,
    },
};

const optionStyle = StyleSheet.create({
    option: {
        ...style.border,
        borderColor: constColors.bgBorder,
        backgroundColor: 'white',
        marginRight: 12,
        marginBottom: 8,
        borderWidth: 1,
    },
    optionSelected: {
        ...style.border,
        borderColor: constColors.textCaption2,
        backgroundColor: constColors.dynamicBlue1,
        marginRight: 12,
        marginBottom: 8,
        borderWidth: 1,
    },
    text: {
        ...style.margin,
        fontSize: headingConst.h6,
        color: constColors.textTitle,
        fontWeight: fontWeightConst.regular,
        paddingVertical: 7.5,
        paddingHorizontal: 8,
    },
    textSelected: {
        ...style.margin,
        fontSize: headingConst.h6,
        color: constColors.textCaption2,
        fontWeight: fontWeightConst.regular,
        paddingVertical: 7.5,
        paddingHorizontal: 8,
    },
    viewStyle: {
        flexDirection: 'row',
    },
    iconContainer: {
        padding: 12,
        borderWidth: 1,
        borderRadius: 8,
        height: 48,
        width: 48,
    },
});

export { optionStyle };
