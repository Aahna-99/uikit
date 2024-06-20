import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import constColors from '../utils/constants/constColors';

const SafeArea = props => {
    return props.enabled ? (
        <>
            <SafeAreaView
                style={[
                    {
                        flex: 0,
                        backgroundColor: constColors.bgStatusBar,
                        paddingTop: 0,
                    },
                    { paddingTop: 0 },
                ]}
            />
            <SafeAreaView
                style={[
                    {
                        flex: 1,
                        backgroundColor: constColors.bgWhite,
                        paddingTop: 0,
                        position: 'relative',
                    },
                    { paddingTop: 0 },
                ]}>
                {props.children}
            </SafeAreaView>
        </>
    ) : (
        props.children
    );
};

export default SafeArea;
