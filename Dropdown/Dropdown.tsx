import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon } from 'uikit';

import { ICONS } from 'utils/models/IconsType';
import constColors from 'utils/constants/constColors';

import styles from './styles';

const Dropdown = ({
    renderPlaceHolder,
    onPress,
    style,
    dropButtonColor = constColors.bgStatusBar,
}: any) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            style={{ ...styles.dropdown, ...style }}>
            <View style={styles.placeholder}>{renderPlaceHolder()}</View>
            <Icon
                icon={ICONS.CARET_DOWN}
                size={16}
                color={dropButtonColor}
                style={styles.downIcon}
            />
        </TouchableOpacity>
    );
};
export default Dropdown;
