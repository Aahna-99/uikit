import {
    TransitionSpecs,
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';

import {
    RootStackParamList,
    HomeStackParamList,
    ActivityStackParamList,
    FeedStackParamList,
    FeedAttachmentLightBoxStackParamList,
} from './types';

export const transition = {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
};

export const CardStyleInterpolator = CardStyleInterpolators.forHorizontalIOS;
export const Stack = createStackNavigator<RootStackParamList>();
export const StackHome = createStackNavigator<HomeStackParamList>();
export const StackActivity = createStackNavigator<ActivityStackParamList>();
export const StackFeed = createStackNavigator<FeedStackParamList>();
export const StackFeedAttachmentLightBox =
    createStackNavigator<FeedAttachmentLightBoxStackParamList>();
