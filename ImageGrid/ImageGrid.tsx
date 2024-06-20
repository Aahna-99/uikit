import React, { useState } from 'react';
import {
    View,
    Image,
    FlatList as RNFlatlist,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { Text } from 'uikit';
import { imageGridStyles as styles } from './ImageGridStyles.ts';

const ImageGrid = (props: any) => {
    let { images, onPress } = props;
    const windowWidth = Dimensions.get('window').width;
    const mainWidth = windowWidth - 68;
    const mainHeight = mainWidth / 2 > 400 ? 400 : mainWidth;
    const bigLayout = images.length >= 2 && images.length < 5;
    const counterLimit = bigLayout ? 2 : 5;

    const dimension = {
        width: mainWidth / 4 - 8,
        height: mainHeight / 4 - 8,
    };
    const dimensionFirstImage = {
        width: mainWidth / 2 - 8,
        height: mainHeight / 2 - 8,
    };
    const singleImage = {
        width: mainWidth - 8,
        height: mainHeight / 1.4 - 8,
    };

    const imagePressed = (item: any) => {
        const initial = images.indexOf(item);
        if (onPress) {
            onPress(initial, item);
        }
    };

    const renderImage = ({ item, index }: any) => {
        const isLastItem = index === (bigLayout ? 0 : 3);
        const isFirstItem = index === 0;
        const containerStyle = isFirstItem
            ? styles.firstImageContainer
            : styles.imageContainer;

        let counter = images.length - counterLimit;

        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => imagePressed(item)}
                style={containerStyle}>
                <Image
                    source={{ uri: item.uri }}
                    style={[
                        styles.imageStyle,
                        bigLayout
                            ? { ...dimensionFirstImage }
                            : { ...dimension },
                    ]}
                />
                {isLastItem && counter ? (
                    <View
                        style={[
                            styles.thumbnail,
                            bigLayout
                                ? { ...dimensionFirstImage }
                                : { ...dimension },
                        ]}>
                        <Text
                            wrapperStyle={styles.counter}
                            headingType={'h1'}
                            fontWeight={'regular'}>
                            {`+${counter}`}
                        </Text>
                    </View>
                ) : (
                    <></>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.gridContainer}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.firstImageContainer}
                onPress={() => imagePressed(images[0])}>
                <Image
                    source={{ uri: images[0]?.uri }}
                    style={[
                        styles.imageStyle,
                        images.length == 1
                            ? { ...singleImage }
                            : { ...dimensionFirstImage },
                    ]}
                />
            </TouchableOpacity>
            <RNFlatlist
                data={images.slice(1, bigLayout ? 2 : 5)}
                renderItem={renderImage}
                numColumns={2}
                scrollEnabled={false}
            />
        </View>
    );
};

export default ImageGrid;
