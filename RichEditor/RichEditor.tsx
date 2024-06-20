import React, { useRef } from 'react';
import { View } from 'react-native';
import {
    RichEditor as PellRichEditor,
    RichToolbar,
    actions,
} from 'react-native-pell-rich-editor';

import { styles, FontFamilyStyleSheet } from './RichEditorStyles';

const RichEditor = ({
    _ref,
    wrapperStyle,
    style,
    toolbarActions,
    ...props
}: any) => {
    const richEditor = useRef();

    const setRichEditorRef = (el: any) => {
        richEditor.current = el;
        if (_ref) _ref.current = el;
    };

    return (
        <View style={[styles.containerStyle, wrapperStyle]}>
            <RichToolbar
                editor={richEditor}
                selectedIconTint="#873c1e"
                iconTint="#312921"
                actions={
                    toolbarActions?.length
                        ? toolbarActions
                        : [
                              actions.setBold,
                              actions.setItalic,
                              actions.setUnderline,
                              actions.insertBulletsList,
                              actions.insertOrderedList,
                              actions.insertLink,
                              actions.setStrikethrough,
                          ]
                }
                style={styles.toolbarStyle}
            />
            <PellRichEditor
                ref={setRichEditorRef}
                editorStyle={{
                    initialCSSText: `${FontFamilyStyleSheet}`,
                    contentCSSText: `font-family: Lato`,
                }}
                style={[styles.editorStyle, style]}
                {...props}
            />
        </View>
    );
};

export default RichEditor;
