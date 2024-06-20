import React, { useState } from 'react';
import { View } from 'react-native';
import { Option } from '../Option';
import { selectStyle } from './SelectStyle';

interface Props {
    items: any;
    type: String;
    onPress: () => void;
    iconMap?: any;
    disabled?: boolean;
    selected?: any;
    style: any;
}

function SelectChip({
    items,
    onPress,
    type = 'multiSelect',
    iconMap,
    disabled,
    selected = '',
    style,
}: Props) {
    const [selectedSingle, setselectedSingle] = useState(selected);
    const [selectedMulti, setselectedMulti] = useState(selected);

    const handleChipChangeSingle = value => {
        if (
            selectedSingle.includes(value) &&
            selectedSingle.length === value.length
        ) {
            // setselectedSingle('');
            // onPress('');
        } else {
            setselectedSingle(value);
            onPress(value);
        }
    };

    // const handleChipChangeMulti = item => {
    //     const value = item.value;
    //     if (selectedMulti.length === 1 && selectedMulti[0] === value) return;
    //     if (selectedMulti.includes(value)) {
    //         setselectedMulti(selectedMulti.filter(item => item !== value));
    //         onPress(selectedMulti.filter(item => item !== value));
    //     } else {
    //         setselectedMulti([...selectedMulti, value, ...[item]]);
    //         onPress([...selectedMulti, value, ...[item]]);
    //     }
    // };

    const operableSelectedMultiDataType = typeof selectedMulti == 'object';

    const checkMultiOptionPresence = (obj: any, item: any) => {
        if (!operableSelectedMultiDataType) return false;
        return !!obj.filter((option: any) => {
            return item.id == option.id;
        }).length;
    };

    const handleChipChangeMulti = (item: any) => {
        if (selectedMulti.length === 1 && selectedMulti[0].id === item.id)
            return;
        if (
            operableSelectedMultiDataType &&
            selectedMulti.filter((option: any) => {
                return option.id == item.id;
            }).length
        ) {
            const predicate = selectedMulti.filter(
                (option: any) => option.id !== item.id,
            );
            setselectedMulti(predicate);
            onPress(predicate);
        } else {
            setselectedMulti([...selectedMulti, ...[item]]);
            onPress([...selectedMulti, ...[item]]);
        }
    };

    return (
        <View
            style={[
                iconMap
                    ? [selectStyle.parentHorizontal, { flex: 1 }]
                    : { ...selectStyle.parentHorizontal, flexWrap: 'wrap' },
            ]}>
            {items.map((item, index) => (
                <View
                    key={item.value}
                    style={[
                        {
                            ...selectStyle.childView,
                            marginHorizontal: 0,
                            flex: item.icon ? 1 : 0,
                        },
                    ]}>
                    {type === 'singleSelect' ? (
                        item.icon ? (
                            <View
                                style={{
                                    marginBottom: 8,
                                    flex: 1,
                                }}>
                                <Option.Chip
                                    icon={iconMap[item.icon]}
                                    chipTitle={item.icon}
                                    onPress={() =>
                                        handleChipChangeSingle(item.value)
                                    }
                                    isSelected={
                                        selectedSingle.includes(item.value) &&
                                        selectedSingle.length ===
                                            item.value.length
                                    }
                                    disabled={disabled}
                                />
                            </View>
                        ) : (
                            <Option.Chip
                                icon={item.icon}
                                onPress={() =>
                                    handleChipChangeSingle(item.value)
                                }
                                text={item.name}
                                isSelected={
                                    selectedSingle.includes(item.value) &&
                                    selectedSingle.length === item.value.length
                                }
                                disabled={disabled}
                            />
                        )
                    ) : (
                        <Option.Chip
                            icon={item.icon}
                            onPress={() => handleChipChangeMulti(item)}
                            text={item.name}
                            isSelected={checkMultiOptionPresence(
                                selectedMulti,
                                item,
                            )}
                            disabled={disabled}
                            style={item.style}
                        />
                    )}
                </View>
            ))}
        </View>
    );
}

export { SelectChip };
