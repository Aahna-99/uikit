import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { Text, Icon, Select, Chip, Button } from 'uikit';
import { StyledFooterModal } from 'shared';

import { ICONS } from 'utils/models/IconsType';
import { NavigationRef } from 'utils/navigation/NavigationRef';

import constColors from 'utils/constants/constColors';
import Close from 'utils/assets/drawables/close.svg';

import { setDirectoryFilters } from '../../processors/actions/directoryActions';
import {
    setFilterActions,
    setFilterList,
} from 'processors/actions/filterActions';
import store from 'processors/store';

import { fieldStyles as styles } from './styles';
import { ActivityIndicator } from 'react-native-paper';

let Field = (props: any) => {
    let { filters_list, filters } = props.filters;
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState(
        props.selectedOptions
            ? props.selectedOptions
            : props.route.params.selectedOptions,
    );
    let { CARET_DOWN } = ICONS;

    const getDropdownData = () => {
        if (props.field.service_details) {
            if (!filters_list[props.field.filter_type]?.length) {
                getData();
            }
        } else {
            props.setFilterList(props.field.filter_type, props.field.choices);
        }
    };

    useEffect(() => {
        setSelected(
            props.selectedOptions
                ? props.selectedOptions
                : props.route.params.selectedOptions,
        );
        getDropdownData();
    }, [
        props.selectedOptions
            ? props.selectedOptions
            : props.route.params.selectedOptions,
    ]);

    useEffect(() => {
        props.setFilterActions(selected, props.field.filter_type);
    }, [selected]);

    const getData = async () => {
        let _data = [];
        try {
            let response;
            if (
                props.field.service_details &&
                props.field.service_details.service_params
            ) {
                response = await props.field.service_details.service(
                    props.field.service_details.service_params,
                );
            } else {
                response = await props.field.service_details.service();
            }
            if (response.success) {
                response.data.forEach(item =>
                    _data.push({ name: item.name, value: item.id }),
                );
            }
        } catch {
        } finally {
            props.setFilterList(props.field.filter_type, _data);
        }
    };

    let onPress = params => {
        if (typeof params == 'string') {
            params = [params];
        }
        setSelected(params);
        if (props?.field?.autoClose) {
            setModalVisible(false);
        }
    };

    let closeModal = () => {
        setModalVisible(false);
    };

    let renderModal = () => {
        return (
            <StyledFooterModal
                style={styles.modalHeight}
                modalContentMinHeight={230}
                borderRadius={false}
                showModal={modalVisible}
                closeModal={closeModal}>
                {filters_list[props.field.filter_type]?.length ? (
                    props.field.question_type === 'single_choice' ? (
                        <Select.Radio
                            onPress={onPress}
                            items={filters_list[props.field.filter_type]}
                            selected={selected[0] || ''}
                            url={props.field.url ? props.field.url : ''}
                        />
                    ) : (
                        <Select.CheckBox
                            onPress={onPress}
                            items={filters_list[props.field.filter_type]}
                            selected={selected || []}
                            url={props.field.url ? props.field.url : ''}
                        />
                    )
                ) : (
                    <ActivityIndicator />
                )}
            </StyledFooterModal>
        );
    };

    let renderTitle = () => {
        return props.field.title ? (
            <Text headingType={'h5'} fontWeight={'semibold'}>
                {props.field.title}
            </Text>
        ) : (
            <></>
        );
    };

    let renderDropdown = () => {
        let filterItems: any[] = [];
        if (filters_list[props.field.filter_type]?.length) {
            filterItems = filters_list[props.field.filter_type]?.filter(item =>
                selected.includes(item.value),
            );
        }
        let renderPlaceHolder = () => {
            return filterItems?.length ? (
                filterItems
                    .map((item, index) => {
                        let onPress = id => {
                            if (selected === 'string') {
                                setSelected('');
                                // setChipSelected([]);
                            } else {
                                setSelected(
                                    selected.filter(item => item !== id),
                                );
                                // setChipSelected(
                                //     chipSelected.filter(x => x.id !== id),
                                // );
                            }
                        };

                        let chip =
                            props.field.question_type === 'single_choice' ? (
                                <Text
                                    key={item.name}
                                    fontWeight={'regular'}
                                    color={constColors.bgStatusBar}
                                    headingType={'h5'}>
                                    {item.name}
                                </Text>
                            ) : (
                                <Chip
                                    key={Math.random()}
                                    onClose={onPress}
                                    chipId={item.value}
                                    onPress={onPress}
                                    rightContent={<Close />}
                                    size={24}
                                    style={styles.chip}>
                                    <Text
                                        fontWeight={'semibold'}
                                        color={constColors.bgStatusBar}
                                        headingType={'h6'}>
                                        {item.name}
                                    </Text>
                                </Chip>
                            );

                        let countIcon = (
                            <View key={Math.random()} style={styles.countIcon}>
                                <Text
                                    wrapperStyle={styles.countText}
                                    color={constColors.bgStatusBar}
                                    fontWeight={'semibold'}
                                    headingType={'h6'}>
                                    {`+${
                                        selected.length < 100
                                            ? selected.length - 2
                                            : 99
                                    }`}
                                </Text>
                            </View>
                        );

                        return index < 2
                            ? chip
                            : index === 2
                            ? countIcon
                            : null;
                    })
                    .filter(key => key)
            ) : (
                <Text color={constColors.textPlaceholder} headingType={'h5'}>
                    {props.field.placeholder}
                </Text>
            );
        };

        const onPress = () => {
            if (props.field.service_details) {
                if (!filters_list[props.field.filter_type]?.length) {
                    getData();
                }
            } else {
                props.setFilterList(
                    props.field.filter_type,
                    props.field.choices,
                );
            }
            getDropdownData();
            setModalVisible(true);
        };

        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPress}
                style={styles.dropdown}>
                <View style={styles.placeholder}>{renderPlaceHolder()}</View>
                <Icon
                    icon={CARET_DOWN}
                    size={16}
                    color={constColors.bgStatusBar}
                    style={styles.downIcon}
                />
            </TouchableOpacity>
        );
    };

    return props.field.dependentOn ? (
        props.filters?.filters?.[
            Object.keys(props.field?.dependentOn)?.[0]
        ]?.[0] === Object.values(props.field.dependentOn)?.[0] ? (
            <View
                style={
                    props.field.title
                        ? { padding: 16 }
                        : { paddingHorizontal: 16, paddingVertical: 8 }
                }>
                {renderModal()}
                {renderTitle()}
                {renderDropdown()}
            </View>
        ) : (
            <></>
        )
    ) : (
        <View
            style={
                props.field.title
                    ? { padding: 16 }
                    : { paddingHorizontal: 16, paddingVertical: 8 }
            }>
            {renderModal()}
            {renderTitle()}
            {renderDropdown()}
        </View>
    );
};

const mapStateToProps = (state: any) => {
    return {
        filters: {
            filters_list: state.filters.filters_list,
            filters: state.filters.filters,
        },
    };
};

export default connect(mapStateToProps, {
    setDirectoryFilters,
    setFilterActions,
    setFilterList,
})(Field);
