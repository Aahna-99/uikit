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

const bgColor = dynamicColor[Math.floor(Math.random() * dynamicColor.length)];

const colorConst = {
    bgWhite: constColors.bgWhite,
    textWhite: constColors.textWhite,
    textParagraph: constColors.textParagraph,
    bgGrey: constColors.dynamicJetgrey1,
    emptyUser: constColors.textDisabled,
};

const frameStyles = StyleSheet.create({
    // dynamic background
    backColor: {
        backgroundColor: bgColor,
    },

    avatarBg: {
        backgroundColor: colorConst.bgGrey,
    },

    addUser1: {
        backgroundColor: constColors.brandBlue500,
    },

    emptyUser: {
        backgroundColor: constColors.bgEmpty,
    },

    badgePosition: {
        position: 'absolute',
        top: 0,
        right: 2,
        borderRadius: 50,
    },

    viewRelative: {
        position: 'relative',
    },

    padding: {
        paddingHorizontal: 16.5,
    },

    itemView: {
        marginBottom: 8,
        alignItems: 'center',
    },

    dotSeparator: {
        borderRadius: 25,
        backgroundColor: constColors.textCaption1,
    },
});

export { frameStyles, colorConst };
