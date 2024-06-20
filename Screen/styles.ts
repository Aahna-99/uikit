import { StyleSheet } from 'react-native';

import constColors from 'utils/constants/constColors';

const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        paddingTop: 16,
        paddingBottom: 16,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: constColors.bgCanvas1,
    },
    headerContainer: {
        height: 60,
        justifyContent: 'center',
        backgroundColor: constColors.bgStatusBar,
    },
    header: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: -16,
    },
    navigationContainer: {
        marginRight: 8,
    },
    buttonSpacing: { marginLeft: -16, paddingLeft: 16 },
    titleContainer: {
        flex: 1,
        marginLeft: 8,
        marginVertical: 10,
        justifyContent: 'center',
    },
    titleText: {
        justifyContent: 'center',
    },
    actionButtonContainer: {
        paddingRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    landscape: {
        paddingRight: 48,
        paddingLeft: 48,
    },
    portrait: {
        paddingRight: 16,
        paddingLeft: 16,
    },
    loader: { flex: 1, justifyContent: 'center' },
});

export default styles;
