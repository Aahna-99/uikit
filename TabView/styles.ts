import { StyleSheet } from 'react-native';

import { headingConst } from 'utils/constants/constTypography';
import constColors from 'utils/constants/constColors';

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
    },
    landscape: {
        paddingHorizontal: 48,
    },
    portrait: {
        paddingHorizontal: 16,
    },
    contentContainerStyle: {
        paddingRight: 16,
    },
    tabBarContainer: {
        flexGrow: 0,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingVertical: 16,
    },
    chipStyle: {
        marginRight: 8,
    },
    textStyle: {
        fontSize: headingConst.h6,
        marginHorizontal: 4,
        fontFamily: 'lato',
    },
    container: {
        flex: 0,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    actionsContainer: {
        paddingRight: 16,
        paddingLeft: 8,
        backgroundColor: 'white',
        paddingVertical: 16,
        flex: 0,
    },
    actionIcon: {
        borderWidth: 1,
        height: 32,
        width: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: constColors.textPlaceholder,
        flex: 0,
    },
});

export default styles;
