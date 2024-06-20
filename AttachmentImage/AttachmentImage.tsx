import React, { useEffect, useState } from 'react';
import { Image, Platform } from 'react-native';
import { View } from 'uikit';

import { SvgFromUri } from 'react-native-svg';
import RNBlobUtil from 'react-native-blob-util';
import { ActivityIndicator } from 'react-native-paper';
import UserPreference from 'config/UserPreferences';
import constColors from 'utils/constants/constColors';
import styles from './AttachmentImageStyles';

const AttachmentImage = (props: any) => {
    const {
        uri,
        defaultURI,
        DefaultImage,
        authToken,
        width,
        height,
        wrapperStyle,
    } = props;
    const [imageURI, setImageURI] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState(authToken || '');

    useEffect(() => {
        if (!!uri) {
            getImageFromAttachmentService(uri);
        } else if (defaultURI) {
            getImageFromAttachmentService(defaultURI);
        } else if (!!DefaultImage) {
            setIsLoading(false);
        }
    }, []);

    const getImageFromAttachmentService = async (uri: any) => {
        const cleanURI = uri.split('?')[0];
        const config = {
            fileCache: true,
            appendExt: cleanURI.slice(-3),
        };
        if (!!!token) await getToken();

        RNBlobUtil.config(config)
            .fetch('GET', uri, {
                EngagedlyAuth: token,
            })
            .then(response => {
                const path =
                    Platform.OS === 'android'
                        ? 'file://' + response.path()
                        : response.path();

                setIsLoading(false);
                setImageURI(path);
                console.log('Attachment Image saved to', path);
            })
            .catch(e => {
                console.error(`Image wasn't fetched: `, e.stack);
            });
    };

    const getToken = async () => {
        const tokenModel = await UserPreference.instance.getToken();
        if (tokenModel?.token) {
            setToken(tokenModel.token?.replace(/\r\n|\n|\r/gm, '') || '');
        }
    };

    const renderLoader = () => (
        <View style={[styles.wrapperStyle, { height, width }, wrapperStyle]}>
            <ActivityIndicator size={12} color={constColors.bgStatusBar} />
        </View>
    );

    const renderImageFromURI = () => {
        const extension = imageURI?.split('?')[0].slice(-3);
        return (
            <View style={[styles.imageWrapperStyle, wrapperStyle]}>
                {extension == 'svg' ? (
                    <SvgFromUri height={height} width={width} uri={imageURI} />
                ) : (
                    <Image
                        source={{ uri: imageURI }}
                        style={{ height, width }}
                    />
                )}
            </View>
        );
    };

    const render = () => {
        return !imageURI || imageURI.length == 0 ? (
            isLoading ? (
                renderLoader()
            ) : DefaultImage != undefined ? (
                <DefaultImage height={height} width={width} />
            ) : (
                <></>
            )
        ) : (
            renderImageFromURI()
        );
    };

    return render();
};

export default AttachmentImage;
