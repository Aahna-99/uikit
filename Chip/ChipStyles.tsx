import { StyleSheet } from 'react-native';
import constColors from 'utils/constants/constColors';

const underlay = {
    disabled: constColors.textDisabled,
    selected: constColors.bgStatusBar,
    unSelected: constColors.textTitle,
    bgColor: constColors.dynamicJetgrey1,
    selectedBG: constColors.primaryBlue2,
};

const chipStyle = StyleSheet.create({
    parentView: {
        flexDirection: 'row',
    },
    withLeftContent: {
        paddingLeft: 8,
    },
    withoutLeftContent: {
        paddingLeft: 0,
    },
    bgColorSelected: {
        backgroundColor: constColors.primaryBlue2,
    },
    bgColor: {
        backgroundColor: constColors.dynamicJetgrey1,
    },
});

const chipTextStyle = StyleSheet.create({
    withLeftContent: {
        marginLeft: 8,
    },
    withoutLeftContent: {
        marginLeft: 12,
    },
    withRightContent: {
        marginRight: 0,
    },
    withoutRightContent: {
        marginRight: 12,
    },
});

export { chipStyle, chipTextStyle, underlay };
