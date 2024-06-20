import React from 'react';
import { View, FlatList as RNFlatList } from 'react-native';
import { Separator } from 'uikit';
import constColors from 'utils/constants/constColors';
import { flatListStyles } from './FlatListStyles';

function FlatList(Props: any) {
    let {
        wrapperStyle,
        data,
        renderItem,
        ItemSeparatorComponent = false,
        listType = '',
        _ref,
        ...props
    } = Props;
    const renderSeparator = () => {
        if (ItemSeparatorComponent === true) {
            return <Separator type={'hyphen'} color={constColors.bgBorder} />;
        } else if (ItemSeparatorComponent === false) {
            return (
                <View
                    style={
                        listType === 'Horizontal'
                            ? flatListStyles.horizontalList
                            : flatListStyles.verticalList
                    }
                />
            );
        } else {
            return ItemSeparatorComponent;
        }
    };

    return (
        <View style={[flatListStyles.listWrapper, wrapperStyle]}>
            <RNFlatList
                ref={_ref}
                horizontal={listType === 'Horizontal'}
                data={data}
                renderItem={renderItem}
                initialNumToRender={data?.length ? data.length : 0}
                keyExtractor={(item, index) => index}
                ItemSeparatorComponent={renderSeparator}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                {...props}
            />
        </View>
    );
}

export { FlatList };
