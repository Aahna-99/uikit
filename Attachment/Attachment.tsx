import React from 'react';
import { Linking, Alert, TouchableOpacity, Platform } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';

import { View, Text, Icon } from 'uikit';
import { downloadFile } from 'utils/hooks/downloadFile';
import constColors from 'utils/constants/constColors';
import { ICONS } from 'utils/models/IconsType';

import AttachmentStyle from './AttachmentStyles';

const Attachment = (props: any) => {
    const { item, style } = props;
    const itemName = item.name || item.file_name || item.title;
    const itemURI =
        item.uri ||
        item.file_urls?.original ||
        item.url?.original ||
        item.link ||
        item.url;
    const itemExtension = item.extension;
    const itemContentType = item.content_type || item.type;
    const mode = props.mode || 'view';
    const handleRemoval = props.handleRemoval;
    const isLoading = props.isLoading;
    const render = () => {
        const onPressFileMedia = async () => {
            if (mode == 'view') {
                Linking.canOpenURL(itemURI).then(res => {
                    if (res) {
                        downloadFile(itemURI, itemName);
                        if (Platform.OS === 'ios') {
                            InAppBrowser.open(itemURI, {
                                modalPresentationStyle: 'fullScreen',
                            });
                        } else {
                            Linking.openURL(itemURI);
                        }
                    } else {
                        Alert.alert(
                            `Something went wrong: couldn't download the file.`,
                        );
                    }
                });
            } else {
                handleRemoval(item);
            }
        };

        const fileIcon = () => {
            switch (true) {
                case /video\/.+/.test(itemContentType):
                    return ICONS.Video;
                case /image\/.+/.test(itemContentType):
                    return ICONS.Image;
            }

            switch (true) {
                case /pdf/.test(itemExtension):
                    return ICONS.PDF;
                case /xls|csv/.test(itemExtension):
                    return ICONS.Spreadsheet;
                case /doc/.test(itemExtension):
                    return ICONS.Doc;
                case /ppt/.test(itemExtension):
                    return ICONS.PPT;
            }

            return ICONS.MiscellaneousFile;
        };
        const truncateTitle = (title: any) => {
            const maxLength = 30;
            if (title.length > maxLength) {
                return title.substring(0, maxLength) + '...';
            } else {
                return title;
            }
        };

        return (
            <View style={[AttachmentStyle.fileBadgeContainer, style]}>
                <TouchableOpacity
                    onPress={() => {
                        onPressFileMedia();
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon
                            size={14}
                            icon={fileIcon()}
                            color={constColors.textTitle}
                            style={{ marginRight: 8, width: 14, flexShrink: 0 }}
                        />
                        <Text
                            headingType={'h6'}
                            fontWeight={'normal'}
                            numberOfLines={1}
                            color={constColors.textPlaceholder}
                            wrapperStyle={{ flexGrow: 1, paddingRight: 12 }}>
                            {truncateTitle(itemName)}
                            {/* {itemName} */}
                        </Text>
                    </View>
                </TouchableOpacity>
                {isLoading ? (
                    <ActivityIndicator
                        color={constColors.bgStatusBar}
                        size="small"
                    />
                ) : (
                    <TouchableOpacity
                        onPress={() => {
                            onPressFileMedia();
                        }}
                        style={{ paddingLeft: 12 }}>
                        {mode == 'edit' ? (
                            <Icon
                                size={16}
                                icon={ICONS.TRASH}
                                color={constColors.textTitle}
                                style={{ padding: 4 }}
                            />
                        ) : (
                            <Icon
                                size={16}
                                icon={ICONS.DOWNLOAD}
                                color={constColors.textTitle}
                                style={{ padding: 4 }}
                            />
                        )}
                    </TouchableOpacity>
                )}
            </View>
        );
    };

    return render();
};

export default Attachment;
