import { StyleSheet } from 'react-native';
import constColors from 'utils/constants/constColors';

const dynamicColor = [
    '#3EB7C8',
    '#5AAEDD',
    '#90A959',
    '#AABD8C',
    '#605C4E',
    '#F7B53F',
    '#F2A65A',
    '#96616B',
    '#D4A0A7',
    '#70A5C7',
    '#778EA2',
    '#71B48D',
    '#89937C',
    '#567568',
    '#FD7A7A',
    '#FFCB45',
    '#90708C',
    '#CF7B83',
    '#457B9D',
    '#80CED7',
    '#A7C957',
    '#61988E',
    '#83BCA9',
    '#F2732B',
    '#D56F3E',
    '#8E71B4',
    '#545586',
    '#4381C1',
    '#F29322',
    '#C8963E',
    '#7D84B2',
    '#586CAA',
    '#FF8C63',
    '#E16F7C',
    '#797596',
    '#546D8E',
    '#AF7595',
    '#72657B',
];

const dynamicBgColor =
    dynamicColor[Math.floor(Math.random() * dynamicColor.length)];

const colorConst = {
    bgWhite: constColors.bgWhite,
    textWhite: constColors.textWhite,
    textParagraph: constColors.textParagraph,
    bgGrey: constColors.dynamicJetgrey1,
    emptyUser: constColors.textDisabled,
};

const avatarStyles = StyleSheet.create({
    // dynamic background
    backColor: {
        backgroundColor: dynamicBgColor,
    },
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainStyle: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: constColors.neutralGrey5,
    },

    avatarBg: {
        backgroundColor: colorConst.bgGrey,
    },

    addUser1: {
        backgroundColor: constColors.brandBlue500,
    },

    badgePosition: {
        position: 'absolute',
        bottom: -2,
        right: 0,
        borderWidth: 1.5,
        borderColor: constColors.bgWhite,
        borderRadius: 50,
    },

    viewRelative: {
        position: 'relative',
    },
});

export { avatarStyles, colorConst, dynamicColor, dynamicBgColor };
