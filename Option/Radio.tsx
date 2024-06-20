import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { mainStyle, style } from './CheckboxRadioStyles';
import Text from '../Text/Text';
import Icon from '../Icon';
import { headingConst } from 'utils/constants/constTypography';
import { ICONS } from 'utils/models/IconsType.ts';

interface Props {
    text: string;
    size: string;
    isSelected: boolean;
    onPress: () => void;
    value: string;
}

function Radio({
    text,
    isSelected = false,
    size = 'h5',
    value = '',
    onPress,
}: Props) {
    const [selected, setSelected] = useState(isSelected);

    useEffect(() => {
        setSelected(isSelected);
    }, [isSelected]);

    const handleClick = () => {
        // selected ? setSelected(false) : setSelected(true);
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
                        icon={ICONS.radio_active}
                        size={headingConst[size]}
                    />
                ) : (
                    <Icon
                        style={[mainStyle.margin]}
                        icon={ICONS.radio}
                        size={headingConst[size]}
                    />
                )}
                {text ? (
                    <Text
                        color={selected ? style.selected : ''}
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

export default Radio;
