import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import AppColors from '../../../config/AppColors';
import constColors from 'utils/constants/constColors';

const StyledSpinner = styled.ActivityIndicator`
    align-items: center;
    flex: 1;
    background-color: ${props =>
        props.backgroundColor ? props.backgroundColor : AppColors.White};
    justify-content: center;
`;

type IncomingProps = {
    size?: 'large' | 'small';
    backgroundColor?: string;
    color?: string;
    height?: number;
};

const CustomSpinner: FunctionComponent<IncomingProps> = ({
    size,
    backgroundColor,
    height,
    color = constColors.primaryBlue12,
}) => (
    <View style={{ flex: 1, height }}>
        <StyledSpinner
            size={size}
            backgroundColor={backgroundColor}
            color={color}
        />
    </View>
);

export default CustomSpinner;
