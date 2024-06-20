import { StyleSheet } from 'react-native';

import constColors from '../constants/constColors';

const styles = StyleSheet.create({
    nameStyle: {
        marginTop: 4,
        fontWeight: 'normal',
    },
    safeAreaViewStyle: {
        flexDirection: 'row',
        backgroundColor: constColors.bgWhite,
        elevation: 2,
        paddingTop: 16,
    },
    segment: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 8,
    },
    header: {
        flex: 0,
        backgroundColor: constColors.bgStatusBar,
        paddingTop: 0,
    },
    mainHeader: {
        flex: 1,
        backgroundColor: constColors.bgWhite,
        paddingTop: 0,
        position: 'relative',
    },
    portrait: {
        paddingTop: 0,
    },
    landscape: {
        paddingRight: 0,
        paddingLeft: 0,
    },
    content: {
        backgroundColor: 'white',
        borderRadius: 8,
    },
    background: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    popoverContent: {
        minWidth: 230,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    quickAction: {
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
    },
    navMainView: {
        elevation: 5,
        borderColor: constColors.bgBorder,
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        position: 'relative',
        alignItems: 'center',
    },
    plusIcon: {
        position: 'absolute',
        bottom: 50,
        elevation: 5,
        borderColor: constColors.bgBorder,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 20,
    },
    iconButton: {
        backgroundColor: constColors.brandOrange600,
        margin: 0,
    },
    progress: { flex: 1, justifyContent: 'center' },
});

export default styles;
