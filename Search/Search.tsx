import React, { useEffect, useState } from 'react';

import { View, Screen, Icon, TextInput } from 'uikit';

import constColors from 'utils/constants/constColors';

import { NavigationRef } from 'utils/navigation/NavigationRef';
import { debounce } from 'utils/hooks/debounce.ts';
import { ICONS } from 'utils/models/IconsType';

import styles from './styles';

const Search = props => {
    let ref = React.createRef();

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        if (searchText.length) {
            console.log(searchText);
        }
    }, [searchText]);

    let renderSearchBar = () => {
        const handleInputChangeWithDebounce = debounce(setSearchText, 800);

        return (
            <View>
                <TextInput
                    _ref={input => {
                        ref.current = input;
                    }}
                    autoFocus={true}
                    text={searchText}
                    style={{
                        ...styles.textInput,
                        textInputStyle: styles.textInputNative,
                    }}
                    placeholder={'Search by name'}
                    onChange={handleInputChangeWithDebounce}
                    icon={
                        <Icon
                            onPress={() => {
                                setSearchText('');
                                ref.current.clear();
                            }}
                            style={styles.closeIcon}
                            color={constColors.textTitle}
                            size={12}
                            icon={ICONS.CLOSE}
                        />
                    }
                />
            </View>
        );
    };

    const renderContent = () => {
        let _props = {
            ...props,
            searchText: searchText,
        };

        return React.createElement(props.route.params.renderScene, {
            ..._props,
        });
    };

    let onPress = () => {
        NavigationRef.current.goBack();
    };

    let navigationAction = [
        <Icon
            icon={ICONS.CHEVRON_LEFT}
            size={16}
            color={constColors.bgWhite}
            onPress={onPress}
        />,
    ];

    return (
        <Screen
            mode={searchText.length ? 2 : 0}
            title={renderSearchBar}
            renderContent={renderContent}
            navigationAction={navigationAction}
            padding={false}
        />
    );
};

export default Search;
