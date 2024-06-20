import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { mainStyle, style } from './CheckboxRadioStyles';
import Icon from '../Icon';
import Text from '../Text/Text';
import { headingConst } from 'utils/constants/constTypography';
import { ICONS } from 'utils/models/IconsType.ts';

interface Props {
    text: string;
    size: string;
    isSelected: boolean;
    onPress: () => void;
    value: string;
    textColor: string;
}

function Checkbox({
    text,
    isSelected = false,
    size = 'h5',
    value = '',
    onPress,
    textColor,
}: Props) {
    const [selected, setSelected] = useState(isSelected);

    useEffect(() => {
        setSelected(isSelected);
    }, [isSelected]);

    const handleClick = () => {
        selected ? setSelected(false) : setSelected(true);
        onPress();
    };

    return (
        <View value={value}>
            <TouchableOpacity
                style={[mainStyle.touchableStyle]}
                onPress={handleClick}
                activeOpacity={0.9}>
                {selected ? (
                    <Icon
                        style={[mainStyle.margin]}
                        icon={ICONS.checkbox_active}
                        size={headingConst[size]}
                    />
                ) : (
                    <Icon
                        style={[mainStyle.margin]}
                        icon={ICONS.checkbox}
                        size={headingConst[size]}
                    />
                )}
                {text ? (
                    <Text
                        color={textColor || (selected ? style.selected : '')}
                        headingType={size}
                        fontWeight={selected ? 'semibold' : 'regular'}>
                        {text}
                    </Text>
                ) : (
                    <></>
                )}
            </TouchableOpacity>
        </View>
    );
}

export default Checkbox;
