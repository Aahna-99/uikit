import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../utils/assets/Engagedly-Icons-config.json';
import { iconStyles, colorConst } from './IconStyles';
import { ICONS_SVG, ICONS } from 'utils/models/IconsType';
import { iconSize } from 'utils/constants/constSizes';
import Shimmer from '../Progress/Shimmer';

function Icon(props: any) {
    let {
        noMargin = true,
        icon = 'home_def',
        iconAfterClick = '',
        size = iconSize.default,
        color = colorConst.default,
        selectedColor = colorConst.active,
        selected = false,
        onPress,
        style,
        loading = false,
        ...prop
    } = props;
    const afterClickIcon = iconAfterClick
        ? iconAfterClick
        : icon.includes('_active')
        ? icon.replace('_active', '')
        : icon + '_active';

    const VectorIcon = createIconSetFromFontello(fontelloConfig);
    const renderIcon = (item: any) => {
        return (
            <VectorIcon
                style={[!noMargin && iconStyles.iconMargin]}
                color={selected ? selectedColor : color}
                name={itemIsPresent(item) ? item : icon}
                size={size}
                {...prop}
            />
        );
    };

    const itemIsSvg = (item: any) => {
        return ICONS_SVG.hasOwnProperty(item);
    };

    const itemIsPresent = (item: any) => {
        return Object.values(ICONS).includes(item);
    };

    const render = (item: any) => {
        const Component = itemIsSvg(item) ? ICONS_SVG[item] : '';
        return itemIsSvg(item) ? (
            <Component
                style={[!noMargin && iconStyles.iconMargin]}
                width={size.toString()}
                height={size.toString()}
                {...prop}
            />
        ) : (
            renderIcon(item)
        );
    };

    const mainContent = () => {
        return (
            <View style={[iconStyles.wrapper, style]}>
                {onPress ? (
                    <TouchableOpacity
                        style={iconStyles.iconPadding}
                        onPress={onPress}
                        activeOpacity={0.9}>
                        {selected ? render(afterClickIcon) : render(icon)}
                    </TouchableOpacity>
                ) : selected ? (
                    render(afterClickIcon)
                ) : (
                    render(icon)
                )}
            </View>
        );
    };

    return loading ? (
        <Shimmer
            style={{
                borderRadius: 24,
                width: size,
                height: size,
            }}
            autoRun={true}
            visible={loading ? false : true}>
            {mainContent()}
        </Shimmer>
    ) : (
        mainContent()
    );
}
export default Icon;
