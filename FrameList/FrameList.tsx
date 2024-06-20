import React from 'react';
import { View, FlatList } from 'react-native';
import { frameListStyles } from './FrameListStyles';
import Frame from '../Frame/Frame';

interface Props {
    data: any;
    itemsCount: number;
}

function FrameList({ data, itemsCount = 0 }: Props) {
    const count = React.useMemo(() => {
        return itemsCount > 0 ? itemsCount : data.length;
    }, [itemsCount, data]);

    return (
        <View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                columnWrapperStyle={[frameListStyles.columnWrapperStyle]}
                numColumns={count}
                bounces={false}
                data={data}
                renderItem={({ item, index }) => (
                    <View style={[frameListStyles.item]} index={index}>
                        <Frame
                            size={item.size}
                            userImage={item.userImage}
                            icon={item.icon}
                            text={item.text}
                            isNotify={item.isNotify}
                        />
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default FrameList;
