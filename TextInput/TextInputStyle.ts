import { StyleSheet } from 'react-native';
import constColors from 'utils/constants/constColors';

const colorText = {
    placeholder: constColors.textPlaceholder,
    alert: constColors.systemStatusAlert,
};

const textStyles = StyleSheet.create({
    input: {
        flex: 1,
        fontFamily: 'Lato',
        color: '#000A16',
        // minWidth: '100%',
        // maxWidth: '100%',
        paddingHorizontal: 8,
    },
    inputWithButton: {
        paddingVertical: 0,
        paddingRight: 0,
    },
    avatar: {
        paddingHorizontal: 8,
    },
    inputAvatar: {
        minWidth: '100%',
        maxWidth: '100%',
        borderWidth: 1,
        borderColor: constColors.bgBorder,
        // paddingVertical: 8,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },

    inputWithAvatar: {
        padding: 0,
    },
    inputAvatarFocus: {
        borderWidth: 0,
        borderBottomWidth: 1,
    },
    onFocus: {
        borderColor: constColors.ctaPrimary,
    },
    onError: {
        borderColor: colorText.alert,
    },
    border: {
        borderTopEndRadius: 4,
        borderBottomEndRadius: 4,
    },
    errorText: {
        paddingTop: 8,
        alignItems: 'flex-start',
    },
    avatarContainer: {
        marginVertical: 8,
    },
});

export { colorText, textStyles };
