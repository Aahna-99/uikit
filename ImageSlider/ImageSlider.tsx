import React, { useEffect, useState, useRef } from 'react';
import { FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import Snackbar from 'react-native-snackbar';

import { Screen, Icon, View, Text } from 'uikit';
import constColors from 'utils/constants/constColors';
import { downloadFile } from 'utils/hooks/downloadFile';

import { ICONS } from 'utils/models/IconsType';
import { NavigationRef } from 'utils/navigation/NavigationRef';
import { setTabVisible } from 'processors/actions/appActions';
import {
    colorConst,
    imageSliderStyles as styles,
} from './ImageSliderStyles.ts';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

const ImageSlider = (props: any) => {
    let { route, navigation } = props;
    let {
        images = route?.params?.images,
        initial = 0,
        items = route?.params?.items,
    } = route;

    const flatListRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(initial);
    const [show, setshow] = useState(false);
    const customImages = images;
    const sliderImagess = customImages.map((image: any) => image.uri);
    let formattedImages = sliderImagess.map((url: any) => ({
        source: { uri: url },
    }));

    if (route?.params?.initial) {
        const slicedData = formattedImages.slice(route?.params?.initial);
        const remainingData = formattedImages.slice(0, route?.params?.initial);
        formattedImages = [...slicedData, ...remainingData];
    }

    const download = async () => {
        let originalUrl = '';
        const imagesUri = images[currentIndex].uri;
        if (imagesUri) {
            originalUrl = imagesUri;
            const filenameWithExtension: any = originalUrl.split('/').pop();
            setshow(true);
            const r = await downloadFile(originalUrl, filenameWithExtension);
            setshow(false);
            if (r?.success) {
                Snackbar.show({
                    text: r.message,
                    duration: Snackbar.LENGTH_LONG,
                });
            } else {
                Snackbar.show({
                    text: r?.message ?? 'error',
                    duration: Snackbar.LENGTH_LONG,
                });
            }
        }
    };

    const handleClick = (index: any) => {
        if (items[index].content_type.includes('video')) {
            props.setTabVisible(false);
            NavigationRef.current.navigate('VideoPlayer', {
                videoUri: items[index].url.original,
                showNavigationButtons: true,
                hideAppDrawer: true,
            });
        }
    };

    useEffect(() => {
        props.setTabVisible(false);
        return () => {
            props.setTabVisible(true);
        };
    }, []);

    const scrollToIndex = () => {
        if (flatListRef.current && initial >= 0) {
            flatListRef.current.scrollToIndex({
                index: initial,
                animated: false,
            });
        }
    };

    useEffect(() => {
        scrollToIndex();
    }, [initial]);

    const handleScrollToIndexFailed = (info: any) => {
        const wait = new Promise(resolve => setTimeout(resolve, 700));
        wait.then(() => {
            scrollToIndex();
        });
    };

    const handleScroll = event => {
        const xOffset = event.nativeEvent.contentOffset.x;
        const index = Math.round(xOffset / Dimensions.get('window').width);
        if (index !== currentIndex) {
            setCurrentIndex(index);
        }
    };

    const renderImageItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => handleClick(index)}>
                <Image
                    source={item.source}
                    style={{
                        backgroundColor: 'black',
                        width: Dimensions.get('window').width,
                        height: '100%',
                    }}
                    resizeMode="contain"
                    onLoadStart={() => setshow(true)}
                    onLoadEnd={() => setshow(false)}
                />
            </TouchableOpacity>
        );
    };

    const renderContent = () => {
        return (
            <View>
                <View>
                    <ReactNativeZoomableView
                        maxZoom={1.5}
                        minZoom={1}
                        zoomStep={0.5}
                        initialZoom={1}
                        bindToBorders
                        doubleTapZoomToCenter={true}
                        zoomEnabled={true}
                        captureEvent={true}>
                        <FlatList
                            ref={flatListRef}
                            style={{ backgroundColor: 'black' }}
                            data={formattedImages}
                            renderItem={renderImageItem}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            pagingEnabled
                            initialScrollIndex={initial}
                            onScrollToIndexFailed={handleScrollToIndexFailed}
                            onScroll={handleScroll}
                            onMomentumScrollEnd={handleScroll}
                        />
                    </ReactNativeZoomableView>
                </View>
                {show && (
                    <ActivityIndicator
                        size="small"
                        style={{
                            padding: 8,
                            backgroundColor: 'rgba(52, 52, 52, 0.6)',
                            borderRadius: 100,
                            position: 'absolute',
                            top: '50%',
                            left: '45%',
                        }}
                        color={colorConst.white}
                    />
                )}
            </View>
        );
    };

    let actionButtons: any[] = [
        <Icon
            icon={ICONS.DOWNLOAD}
            size={16}
            color={constColors.bgWhite}
            key={Math.random()}
            onPress={() => {
                download();
            }}
        />,
    ];

    let navigationAction = [
        <Icon
            icon={ICONS.CHEVRON_LEFT}
            size={16}
            key={Math.random()}
            color={constColors.bgWhite}
            onPress={() => {
                NavigationRef.current.goBack();
            }}
        />,
    ];

    return (
        <Screen
            title={''}
            mode={2}
            renderContent={renderContent}
            actionButtons={actionButtons}
            navigationAction={
                route?.params?.showNavigationButtons && navigationAction
            }
            padding={false}
            style={styles.screenBg}
            enableSafeArea={true}
        />
    );
};

const mapStateToProps = (state: any) => {
    return {};
};

export default connect(mapStateToProps, {
    setTabVisible,
})(ImageSlider);
