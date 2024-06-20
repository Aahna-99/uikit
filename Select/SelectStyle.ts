import { StyleSheet } from 'react-native';
import constColors from 'utils/constants/constColors';
import { headingConst } from 'utils/constants/constTypography';

const selectStyle = StyleSheet.create({
    parentHorizontal: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    childView: {
        // marginHorizontal: '0.5%',
    },

    lastChildView: {
        marginRight: 0,
    },
    wrapperStyle: {
        flex: 0,
    },
    padding: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    userSearch: {
        backgroundColor: constColors.bgWhite,
        borderWidth: 0,
        borderBottomWidth: 1,
        // marginTop: 8,
        flexDirection: 'row',
        borderRadius: 4,
        borderColor: constColors.bgBorder,
    },
});

const textStyle = {
    text: {
        fontWeight: '600',
        fontSize: headingConst.h6,
    },
};

const checkBox = StyleSheet.create({
    view: {
        flexDirection: 'row',
        borderBottomColor: constColors.bgBorder,
        borderBottomWidth: 1,
        minWidth: '100%',
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: constColors.bgWhite,
    },
    margin: {
        marginLeft: 'auto',
    },
    text: {
        ...textStyle.text,
        color: constColors.textTitle,
    },
    textDisabled: {
        ...textStyle.text,
        color: constColors.textDisabled,
    },
});

const Star = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    stars: {
        flex: 1,
        flexDirection: 'row',
    },
    starContainer: {
        marginHorizontal: 8,
        padding: 14,
        borderWidth: 1,
        borderRadius: 8,
    },
});

export { selectStyle, checkBox, Star };
