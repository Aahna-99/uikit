import { StyleSheet } from 'react-native';

const mediaStyles = StyleSheet.create({
    wrapperStyle: {
        flexDirection: 'row',
    },
    mediaStyle: {
        flexDirection: 'row',
    },
    avatarStyle: {
        flex: 0,
        // justifyContent: 'center',
    },
    titleStyle: {
        flex: 0,
    },
    subtitleStyle: {
        paddingTop: 4,
        flex: 0,
    },
    bodyStyle: {
        // flex: 0.6,
        marginLeft: 16,
        justifyContent: 'center',
    },
    footerStyle: {
        flex: 0,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export { mediaStyles };
