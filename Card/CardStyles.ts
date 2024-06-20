import { StyleSheet } from 'react-native';

const cardStyles = StyleSheet.create({
    shadowStyle: {
        flex: 1,
        elevation: 3,
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        borderRadius: 16,
    },
    cardStyle: {
        flex: 1,
        padding: 16,
        borderRadius: 16,
    },
    borderRadius: {
        borderRadius: 16,
    },
    headerStyle: {
        marginBottom: 16,
    },
    bodyStyle: {
        flex: 1,
    },
    footerStyle: {
        marginTop: 16,
        justifyContent: 'flex-end',
    },
    imageBackground: {
        flex: 1,
        borderRadius: 16,
    },
});

export { cardStyles };
