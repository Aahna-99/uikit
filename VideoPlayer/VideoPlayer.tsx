import React, { useEffect, useState } from 'react';
import RNVideoPlayer from 'react-native-video-player';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import Snackbar from 'react-native-snackbar';

import { Screen, Icon, View } from 'uikit';
import constColors from 'utils/constants/constColors';
import { downloadFile } from 'utils/hooks/downloadFile';

import { ICONS } from 'utils/models/IconsType';
import { NavigationRef } from 'utils/navigation/NavigationRef';
import { setTabVisible } from 'processors/actions/appActions';
import { videoPlayerStyles as styles } from './VideoPlayerStyle.ts';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';

const VideoPlayer = (props: any) => {
    let { route, navigation } = props;
    let { videoUri = route?.params?.videoUri } = route;
    const [show, setshow] = useState(false);

    const download = async () => {
        let originalUrl = '';
        const imagesUri = videoUri;
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

    useEffect(() => {
        props.setTabVisible(false);
        return () => {
            if (route?.params?.hideAppDrawer) props.setTabVisible(false);
            else props.setTabVisible(true);
        };
    }, []);

    const renderContent = () => {
        return (
            <View style={{ backgroundColor: 'black', flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <ReactNativeZoomableView
                        maxZoom={1.5}
                        minZoom={1}
                        zoomStep={0.5}
                        initialZoom={1}
                        bindToBorders={true}
                        doubleTapZoomToCenter={true}
                        zoomEnabled={true}
                        captureEvent={true}>
                        <RNVideoPlayer
                            autoplay
                            video={{ uri: videoUri }}
                            videoHeight={400}
                            videoWidth={400}
                            thumbnail={{
                                uri: 'https://cdn.engagedly.com/v1/images/social/Video-Thumbnail.png',
                            }}
                        />
                    </ReactNativeZoomableView>
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
                            color={constColors.bgWhite}
                        />
                    )}
                </View>
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
        />
    );
};

const mapStateToProps = (state: any) => {
    return {};
};

export default connect(mapStateToProps, {
    setTabVisible,
})(VideoPlayer);
