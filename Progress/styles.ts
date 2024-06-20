import { StyleSheet } from 'react-native';

import constColors from 'utils/constants/constColors';

const styles = StyleSheet.create({
    storyContainer: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        marginHorizontal: 0,
        justifyContent: 'center',
    },
    multiProgressContainer: {
        backgroundColor: constColors.dynamicJetgrey2,
        borderRadius: 8,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    progressContainer: {
        justifyContent: 'center',
        backgroundColor: constColors.dynamicJetgrey2,
        borderRadius: 8,
    },
    progressBar: {
        borderRadius: 8,
    },
    firstBar: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    roundedEdges: {
        borderTopLeftRadius: 8,
        borderRadius: 8,
    },
    finalBar: {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    statusContainer: {
        width: '100%',
        marginVertical: 4,
        flexDirection: 'row',
    },
    headerLeftContainer: {
        flex: 1,
    },
    headerRightContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    footerLeftContainer: {
        flex: 1,
    },
    footerRightContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    shimmerContainer: {
        overflow: 'hidden',
        borderRadius: 20,
    },
    shimmerChildren: {
        opacity: 0,
    },
});

export default styles;
