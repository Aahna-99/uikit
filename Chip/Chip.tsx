import React from 'react';
import { View } from 'react-native';
import { Chip as RNChip } from 'react-native-paper';
import Shimmer from '../Progress/Shimmer';
import { chipStyle, underlay, chipTextStyle } from './ChipStyles';

function Chip(props: any) {
    let {
        children,
        onPress,
        style,
        textstyle,
        leftContent,
        rightContent,
        wrapperStyle,
        selected,
        disabled,
        loading,
        onClose,
        chipId,
        ...prop
    } = props;

    const renderText = (item: any) => {
        return React.cloneElement(item, {
            color: disabled
                ? underlay.disabled
                : selected
                ? underlay.selected
                : item?.props?.color || underlay.unSelected,
            fontWeight: disabled
                ? item?.props?.fontWeight || 'regular'
                : selected
                ? 'semibold'
                : item?.props?.fontWeight || 'regular',
        });
    };

    const renderRightContent = () => {
        return () => rightContent;
    };

    const renderLeftContent = () => {
        return () => leftContent;
    };

    return (
        <View style={[chipStyle.parentView, wrapperStyle]}>
            <Shimmer
                style={{
                    height: 24,
                    marginBottom: 8,
                    borderRadius: 25,
                }}
                autoRun={true}
                visible={loading ? false : true}>
                <RNChip
                    style={[
                        disabled
                            ? chipStyle.bgColor
                            : selected
                            ? chipStyle.bgColorSelected
                            : chipStyle.bgColor,
                        leftContent
                            ? chipStyle.withLeftContent
                            : chipStyle.withoutLeftContent,
                        style,
                    ]}
                    textStyle={[
                        leftContent
                            ? chipTextStyle.withLeftContent
                            : chipTextStyle.withoutLeftContent,
                        rightContent
                            ? chipTextStyle.withRightContent
                            : chipTextStyle.withoutRightContent,
                        textstyle,
                    ]}
                    selectedColor={underlay.selectedBG}
                    icon={leftContent && renderLeftContent()}
                    onPress={onPress ? () => onPress(chipId) : ''}
                    disabled={disabled}
                    closeIcon={rightContent && renderRightContent()}
                    onClose={
                        rightContent
                            ? () => {
                                  onClose(chipId);
                              }
                            : false
                    }
                    {...prop}>
                    {renderText(children)}
                </RNChip>
            </Shimmer>
        </View>
    );
}
export default Chip;
