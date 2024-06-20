import CameraRoll from '@react-native-community/cameraroll';
import { Platform, PermissionsAndroid, Share } from 'react-native';
import RNBlobUtil from 'react-native-blob-util';
import DeviceInfo from 'react-native-device-info';
import UserPreference from 'config/UserPreferences';

type downloadFileResult = {
    message: string;
    success: boolean;
};

export const downloadFile = async (
    url: string,
    fileName: string,
): Promise<downloadFileResult | null> => {
    let path: string | null = null;
    fileName = fileName.toLowerCase();
    // fileName = fileName.replace("ios","")
    let b = fileName.split('.');
    b[0] = `${b[0]}eng`;
    const ext = b[b.length - 1].toLowerCase();
    fileName = `${b[0]}.${ext}`;
    if (Platform.OS == 'ios') {
        const validPlatforms = ['mp4', 'mp3', 'mov', 'm4v', 'webm', 'ogv'];
        if (validPlatforms.includes(ext)) {
            fileName = `${b[0]}.mp4`;
        }
    }
    // console.log(fileName)

    let message: string;
    let success: boolean;

    const hasAndroidPermission = async () => {
        const androidVersion = parseInt(DeviceInfo.getSystemVersion());
        if (androidVersion >= 13) return true;

        const permission =
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
            return true;
        }

        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
    };

    try {
        if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
            message = 'Access not granted';
            success = false;
        } else {
            const { dirs } = RNBlobUtil.fs;
            const dirToSave =
                Platform.OS == 'ios' ? dirs.DocumentDir : dirs.DownloadDir;

            let ext = fileName.split('.')[1];

            let imageVideoExt = ['png', 'jpg', 'mp3', 'gif'];
            let pathToDownload = `${dirToSave}/${fileName}`;

            const configfb = {
                fileCache: true,
                useDownloadManager: true,
                notification: true,
                mediaScannable: true,
                title: fileName,
                path: pathToDownload,
                appendExt: ext,
                addAndroidDownloads: {
                    useDownloadManager: true,
                    notification: true,
                    path: pathToDownload,
                    description: 'downloading_file',
                },
            };

            const configOptions = Platform.select({
                ios: {
                    fileCache: configfb.fileCache,
                    title: configfb.title,
                    path: configfb.path,
                    appendExt: ext,
                },
                android: configfb,
            });

            let fetchFile = async (onSuccess: any, configOptions: any) => {
                let token;
                const tokenModel = await UserPreference.instance.getToken();
                if (tokenModel?.token) {
                    token = tokenModel.token?.replace(/\r\n|\n|\r/gm, '');
                }
                RNBlobUtil.config(configOptions)
                    .fetch('GET', url, {
                        EngagedlyAuth: token,
                    })
                    .then(res => {
                        onSuccess(res);
                    })
                    .catch(e => {
                        console.log('File Could not be downloaded: ', e);
                    });
            };

            if (imageVideoExt.includes(ext.toLowerCase())) {
                let newImgUri = url.lastIndexOf('/');
                let imageName = url.substring(newImgUri);

                let dirs = RNBlobUtil.fs.dirs;
                let path =
                    Platform.OS === 'ios'
                        ? dirs['MainBundleDir'] + imageName
                        : dirs.PictureDir + imageName;

                let imageConfigOptions = {
                    fileCache: true,
                    appendExt: 'png',
                    indicator: true,
                    IOSBackgroundTask: true,
                    path: path,
                    addAndroidDownloads: {
                        useDownloadManager: true,
                        notification: true,
                        path: path,
                        description: 'Image',
                    },
                };

                let config =
                    Platform.OS === 'ios' ? configOptions : imageConfigOptions;

                console.log(
                    'The file saved to',
                    pathToDownload,
                    configfb,
                    dirs,
                );

                fetchFile((res: any) => {
                    RNBlobUtil.fs.writeFile(configfb.path, res.data, 'base64');
                    CameraRoll.save(pathToDownload, {
                        type: 'auto',
                        album: 'Engagedly',
                    });
                    console.log('The file saved to ', res);
                }, config);
            } else {
                console.log(
                    'The file saved to',
                    pathToDownload,
                    configfb,
                    dirs,
                );

                fetchFile((res: any) => {
                    if (Platform.OS === 'ios') {
                        // RNBlobUtil.fs.writeFile(
                        //     configfb.path,
                        //     RNBlobUtil.base64.encode(configfb.title),
                        //     'base64',
                        // );
                        const filePath = res.path();
                        const options = {
                            type: configfb.appendExt,
                            url: filePath,
                            saveToFiles: true,
                        };

                        Share.share(options)
                            .then((resp: any) => console.log(resp))
                            .catch((err: any) => console.log(err));
                        // RNBlobUtil.ios.previewDocument(configfb.path);
                    }
                }, configOptions);
            }
            message = 'Downloaded Successfully';
            success = true;
        }
    } catch (error) {
        console.error(
            `Error downloading file from ${url} to ${fileName}`,
            error,
        );
        message = `Error downloading file from ${url} to ${fileName}`;
        success = false;
    }
    return {
        message,
        success,
    };
};
