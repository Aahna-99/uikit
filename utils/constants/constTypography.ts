import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const scale = SCREEN_WIDTH / 375; //375: viewport width for iphone13 mini as per design specifications

function normalize(size: any) {
    return size;
    // const newSize = size * scale;
    // if (Platform.OS === 'ios') {
    //     return Math.round(PixelRatio.roundToNearestPixel(newSize));
    // } else {
    //     return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    // }
}

const headingConst = {
    h1: normalize(26),
    h2: normalize(22),
    h3: normalize(20),
    h4: normalize(18),
    h5: normalize(16),
    h6: normalize(14),
    s1: normalize(12),
    captionSpacing: 0.4 * scale,
};

const fontWeightConst = {
    regular: '400',
    semibold: '700',
};

const lineHeightConst = {
    h1: normalize(26) * 1.5,
    h2: normalize(22) * 1.5,
    h3: normalize(20) * 1.5,
    h4: normalize(18) * 1.5,
    h5: normalize(16) * 1.5,
    h6: normalize(14) * 1.5,
};

export { headingConst, fontWeightConst, lineHeightConst };
