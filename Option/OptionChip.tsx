import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Chip } from 'react-native-paper';

import { Icon, Text } from 'uikit';

import { ICONS } from 'utils/models/IconsType';
import constColors from 'utils/constants/constColors';

import { optionStyle } from './OptionChipStyles';

interface Props {
    text: string;
    isSelected: boolean;
    onPress: () => void;
    value: string;
    icon?: any;
    disabled?: boolean;
    chipTitle?: string;
    style?: any;
}

function OptionChip({
    icon,
    text = 'Somewhat',
    isSelected = false,
    value = '',
    onPress,
    disabled = false,
    chipTitle,
    style,
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
        <View value={value} style={[optionStyle.viewStyle, { flex: 1 }]}>
            {icon ? (
                <View
                    style={{
                        alignItems: 'center',
                        flex: 1,
                        marginHorizontal: 1,
                    }}>
                    <TouchableOpacity
                        style={{
                            ...optionStyle.iconContainer,
                            borderColor: selected
                                ? constColors.textCaption2
                                : constColors.bgBorder,
                            backgroundColor: selected
                                ? constColors.dynamicBlue1
                                : constColors.bgWhite,
                        }}
                        disabled={disabled}
                        onPress={handleClick}>
                        <Icon
                            icon={ICONS[icon]}
                            size={24}
                            selected={true}
                            style={{
                                backgroundColor: selected
                                    ? constColors.dynamicYellow1
                                    : constColors.bgWhite,
                            }}
                        />
                    </TouchableOpacity>
                    {selected && chipTitle ? (
                        <Text
                            headingType={'s1'}
                            wrapperStyle={{
                                alignSelf: 'center',
                                flex: 1,
                                marginTop: 8,
                            }}>
                            {chipTitle
                                .split('_')
                                .map(word => {
                                    return (
                                        word?.slice(0, 1).toUpperCase() +
                                        word?.slice(1, word?.length)
                                    );
                                })
                                .join(' ')}
                        </Text>
                    ) : (
                        <></>
                    )}
                </View>
            ) : (
                <Chip
                    style={[
                        selected
                            ? {
                                  ...optionStyle.optionSelected,
                                  ...style?.chipStyle,
                              }
                            : { ...optionStyle.option, ...style?.chipStyle },
                    ]}
                    mode="outlined"
                    textStyle={[
                        selected
                            ? {
                                  ...optionStyle.textSelected,
                                  ...style?.textStyle,
                              }
                            : { ...optionStyle.text, ...style?.textStyle },
                    ]}
                    disabled={disabled}
                    showSelectedOverlay={false}
                    onPress={handleClick}>
                    {text}
                </Chip>
            )}
        </View>
    );
}

export default OptionChip;
