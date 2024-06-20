import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, TextInput, Icon } from 'uikit';
import { Option } from '../Option';
import { FlatList } from '../FlatList';
import { selectStyle, checkBox } from './SelectStyle';

interface Props {
    header: any;
    items: any;
    onPress: () => void;
    selected?: any;
    service_details: any;
}

function SelectCheckBox({
    header,
    items,
    onPress,
    selected: selectedProp = [],
    service_details,
}: Props) {
    const [selected, setSelected] = useState(selectedProp);
    const [selectAllToogle, setselectAllToogle] = useState(
        selectedProp.length === items.length ? false : true,
    );
    const [clearAllToogle, setclearAllToogle] = useState(
        selectedProp.length ? true : false,
    );
    const [itemList, setItemList] = useState(items ? items : '');

    useEffect(() => {
        if (service_details) {
            getFilterItems();
        }
    }, []);

    const getFilterItems = async () => {
        let _itemsList = [];
        try {
            let response;
            if (service_details && service_details.service_params) {
                response = await service_details.service(
                    service_details.service_params,
                );
            } else {
                response = await service_details.service();
            }
            if (response.success) {
                response.data.forEach(item =>
                    _itemsList.push({
                        name: item.name,
                        value: item.id,
                        id: item.id.toString(),
                    }),
                );
            }
        } catch {
        } finally {
            setItemList(_itemsList);
        }
    };

    const handleSelectAll = () => {
        if (selectAllToogle) {
            setSelected(items.map(item => item.value));
            onPress(items.map(item => item.value));
            setselectAllToogle(false);
            setclearAllToogle(true);
        }
    };

    const handleClearAll = () => {
        if (clearAllToogle) {
            setSelected([]);
            onPress([]);
            setclearAllToogle(false);
            setselectAllToogle(true);
        }
    };

    const handleCheckboxChange = value => {
        if (selected.includes(value)) {
            setSelected(selected.filter(item => item !== value));
            onPress(selected.filter(item => item !== value));
            setselectAllToogle(true);
            if (selected.filter(item => item !== value).length <= 0)
                setclearAllToogle(false);
        } else {
            setSelected([...selected, value]);
            onPress([...selected, value], itemList);
            setclearAllToogle(true);

            let select = [...selected, value];
            let itemValue = items.map(item => item.value);
            if (
                select.every(item => itemValue.includes(item)) &&
                itemValue.every(item => select.includes(item))
            ) {
                setselectAllToogle(false);
            }
        }
    };

    const renderCheckBox = (item: any) => {
        return (
            <View key={item.item.value} style={[selectStyle.padding]}>
                <Option.Checkbox
                    size={'h5'}
                    isSelected={selected.includes(item.item.value)}
                    onPress={() => handleCheckboxChange(item.item.value)}
                    text={item.item.name}
                />
            </View>
        );
    };

    const renderHeader = () => {
        if (!header) return <></>;
        return (
            <>
                <View style={[checkBox.view]}>
                    <TouchableOpacity
                        onPress={handleSelectAll}
                        activeOpacity={0.9}>
                        <Text
                            wrapperStyle={[
                                selectAllToogle
                                    ? checkBox.text
                                    : checkBox.textDisabled,
                            ]}>
                            Select all
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleClearAll}
                        activeOpacity={0.9}
                        style={checkBox.margin}>
                        <Text
                            wrapperStyle={[
                                clearAllToogle
                                    ? checkBox.text
                                    : checkBox.textDisabled,
                            ]}>
                            Clear all
                        </Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    };

    return (
        <View>
            <FlatList
                wrapperStyle={selectStyle.wrapperStyle}
                ListHeaderComponent={renderHeader}
                data={service_details ? itemList : items}
                renderItem={renderCheckBox}
                ItemSeparatorComponent={true}
                listType={'vertical'}
                stickyHeaderIndices={[0]}
            />
        </View>
    );
}

export { SelectCheckBox };
