import { StyleSheet } from 'react-native';
import constColors from 'utils/constants/constColors';

const underlay = {
    white: constColors.textWhite,
    textDisabled: constColors.dynamicJetgrey3,
};

const buttonStyle = StyleSheet.create({
    mainStyle: {
        borderRadius: 20,
        minWidth: 0,
        borderWidth: 1,
        borderColor: constColors.brandBlue600,
        elevation: 0,
        rippleColor: 'transparent',
        backgroundColor: constColors.brandBlue600,
    },
    defaultPressed: {
        backgroundColor: constColors.brandBlue400,
        borderColor: constColors.brandBlue400,
        borderWidth: 1,
    },
    defaultDisabled: {
        backgroundColor: constColors.dynamicJetgrey3,
        borderColor: constColors.dynamicJetgrey3,
        borderWidth: 1,
    },
    outlinedStyle: {
        backgroundColor: constColors.textWhite,
        borderColor: constColors.textCaption2,
        borderWidth: 1,
    },
    outlinedStylePressed: {
        backgroundColor: constColors.brandBlue100,
        borderColor: constColors.textCaption2,
        borderWidth: 1,
    },
    outlinedDisabled: {
        backgroundColor: constColors.textWhite,
        borderColor: constColors.dynamicJetgrey3,
        borderWidth: 1,
    },
    modeTextStyle: {
        backgroundColor: constColors.textWhite,
        borderColor: 'transparent',
        borderWidth: 0,
    },
    modeTextStylePressed: {
        backgroundColor: constColors.brandBlue100,
        borderColor: 'transparent',
        borderWidth: 0,
    },
    labelStyle: {
        letterSpacing: 0,
        fontWeight: '600',
        textTransform: 'none',
    },
    stretchStyle: {
        alignSelf: 'stretch',
    },
    touchableHighlight: {
        borderRadius: 50,
    },
    btnClicked: {
        elevation: 2,
        shadowColor: constColors.textTitle,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
    iconBtn: {
        backgroundColor: constColors.brandOrange600,
        margin: 0,
    },
});

export { underlay, buttonStyle };
