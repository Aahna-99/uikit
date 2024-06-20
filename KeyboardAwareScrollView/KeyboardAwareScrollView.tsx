import React, { useRef, useEffect } from 'react';
import { ScrollView } from 'react-native';

let keyboardAwareScrollViewRef: any;

const KeyboardAwareScrollView = ({ children, ...props }: any) => {
    const _ref = useRef<ScrollView>();

    useEffect(() => {
        keyboardAwareScrollViewRef = _ref.current;
    }, []);

    return (
        <ScrollView ref={_ref} {...props}>
            {children}
        </ScrollView>
    );
};

const scrollToLocation = (height: any) => {
    setTimeout(() => {
        !!height
            ? keyboardAwareScrollViewRef?.scrollTo({
                  y: height,
                  animated: true,
              })
            : keyboardAwareScrollViewRef?.scrollToEnd({ animated: true });
    }, 300);
};

export { scrollToLocation, KeyboardAwareScrollView };
