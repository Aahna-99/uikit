import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { Option } from '../Option';
import { FlatList } from '../FlatList';
import { selectStyle } from './SelectStyle';
import { TextInput, Icon } from 'uikit';
import { debounce } from 'utils/hooks/debounce.ts';
import constColors from 'utils/constants/constColors';
import { ICONS } from 'utils/models/IconsType';
interface Props {
    items: any;
    onPress: () => void;
    selected?: any;
}

function SelectRadio({ items, onPress, selected: selectedProp }: Props) {
    const [selected, setSelected] = useState(selectedProp);

    useEffect(() => {
        setSelected(selectedProp);
    }, [selectedProp]);

    const handleCheckboxChange = value => {
        setSelected(value);
        onPress(value);
    };

    const renderRadioBox = (item: any) => {
        return (
            <View key={item.item.value} style={[selectStyle.padding]}>
                <Option.Radio
                    size={'h5'}
                    isSelected={
                        selected?.includes(item.item.value) &&
                        selected.length === item.item.value.length
                    }
                    onPress={() =>
                        item.item.onPress
                            ? item.item.onPress()
                            : handleCheckboxChange(item.item.value)
                    }
                    text={item.item.name}
                />
            </View>
        );
    };

    return (
        <View>
            <FlatList
                wrapperStyle={selectStyle.wrapperStyle}
                data={items}
                renderItem={renderRadioBox}
                ItemSeparatorComponent={true}
                listType={'vertical'}
                keyExtractor={item => item.value}
            />
        </View>
    );
}

export { SelectRadio };
