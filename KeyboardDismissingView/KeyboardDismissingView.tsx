import React from 'react';
import {
    Platform,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

const KeyboardDismissingView = ({ children, style, ...props }: any) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[{ flex: 1 }, style || {}]}
            {...props}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1 }}>{children}</View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default KeyboardDismissingView;
