import React from 'react';
import {
    View,
    SectionList as RNSectionList,
} from 'react-native';
import { Separator } from 'uikit';
import constColors from 'utils/constants/constColors';
import { sectionListStyles } from './SectionListStyles';

interface Props {
    data?: any;
    renderSectionHeader?: any;
    renderItem?: any;
    renderSectionFooter?: any;
}

function SectionList({
    data,
    renderItem,
    renderSectionHeader,
    renderSectionFooter,
}: Props) {
    const renderFooter = (row: any, index) => {
        let _data = data;
        let lastRow = _data[_data.length -1];
        if(lastRow != row.section){
             if (renderSectionFooter === true) {
                 return (
                     <View style={sectionListStyles.sectionFooter}>
                         <Separator
                             type={'hyphen'}
                             color={constColors.bgBorder}
                         />
                     </View>
                 );
             } else if (renderSectionFooter === false) {
                 return <View style={sectionListStyles.sectionFooter} />;
             } else {
                 return renderSectionFooter;
             }
        }
    };

    return (
        <View style={sectionListStyles.container}>
            <RNSectionList
                sections={data}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                renderSectionFooter={(section, index)=> renderFooter(section, index)}
            />
        </View>
    );
}

export { SectionList };
