import { useEffect } from 'react';
import { BackHandler } from 'react-native';

const useBackHandler = (navigation: any) => {
    const handleBackButtonClick = () => {
        navigation.setParams({ visible: true });
        return false;
    };

    useEffect(() => {
        BackHandler.addEventListener(
            'hardwareBackPress',
            handleBackButtonClick,
        );
        return () =>
            BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButtonClick,
            );
    }, []);
};

export default useBackHandler;
