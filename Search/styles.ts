import { StyleSheet } from 'react-native';

import constColors from 'utils/constants/constColors';

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: constColors.bgWhite,
        borderRadius: 24,
        borderWidth: 0,
    },
    textInputNative: { paddingHorizontal: 16 },
    closeIcon: { marginHorizontal: 16 },
});

export default styles;
