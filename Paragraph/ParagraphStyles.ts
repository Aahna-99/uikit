import { StyleSheet } from 'react-native';
import constColors from 'utils/constants/constColors';
import { headingConst, fontWeightConst } from 'utils/constants/constTypography';

const headingStyles = {
    h1: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontSize: headingConst.h1,
    },
    h2: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontSize: headingConst.h2,
    },
    h3: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontSize: headingConst.h3,
    },
    h4: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontSize: headingConst.h4,
    },
    h5: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontSize: headingConst.h5,
    },
    h6: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontSize: headingConst.h6,
    },
    s1: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontSize: headingConst.s1,
    },
    caption: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontSize: headingConst.h6,
        letterSpacing: headingConst.captionSpacing,
        textTransform: 'uppercase',
    },
};

const fontWeightStyle = {
    regular: {
        fontWeight: fontWeightConst.regular,
    },
    semibold: {
        fontWeight: fontWeightConst.semibold,
    },
};

const colorText = {
    color: constColors.textTitle,
};

const textStyles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { headingStyles, colorText, fontWeightStyle, textStyles };
