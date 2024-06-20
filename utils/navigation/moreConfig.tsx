import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';

import { TranslateFn } from '../hooks/useTranslations';
import { AppsType } from '../models/AppsType';
import { FeatureType } from '../models/FeatureType';
import { FeedbackTabName } from '../views/Feedback';
import { MoreStackParamList } from './types';

import checkModuleEnabled from '../hooks/checkModuleEnabled';

type ScreenNavigationProp = StackNavigationProp<MoreStackParamList, 'MoreView'>;

export type OptionKey =
    | 'INCOMING_REQUESTS'
    | 'OUTGOING_FEEDBACK'
    | 'FEEDBACK_WALL'
    | 'PRAISE_WALL'
    | 'GROUPS'
    | 'PENDING_CHECK_INS'
    | 'AT_RISK'
    | 'BEHIND'
    | 'OPEN'
    | 'CLOSED'
    | 'INTEREST';

type IncominProps = {
    showElementSelected: (
        route: keyof MoreStackParamList,
        params?: MoreStackParamList[keyof MoreStackParamList],
    ) => void;
    t: TranslateFn;
    navigation: ScreenNavigationProp;
    showOpenGroups: boolean;
    showClosedGroups: boolean;
    showInterestGroups: boolean;
    showDirectory: boolean;
    survey: boolean;
    engagementSurvey: boolean;
    showGoals: boolean;
    showGroups: boolean;
    showNotes: boolean;
    showFeedback: boolean;
};

type MenuOption = {
    title: string;
    type: FeatureType;
    optionKey: OptionKey;
    tabName: FeedbackTabName;
};

export const getMoreMenuBasicConfig = ({
    showElementSelected,
    t,
    navigation,
}: IncominProps) => {
    let {
        isGroupsEnabled,
        isEngagementSurveyEnabled,
        isSurveyEnabled,
        isGoalsEnabled,
        isNotesEnabled,
        isFeedbackEnabled,
        isTeamPulseEnabled,
        isGoalsTwoEnabled,
        isLearningEnabled,
        isIDPEnabled,
        isResourcesEnabled,
    } = new checkModuleEnabled({});

    const feedbackOptions: MenuOption[] = [
        {
            title: t({ name: 'incoming_requests' }),
            type: FeatureType.F_FEEDBACK,
            optionKey: 'INCOMING_REQUESTS',
            tabName: 'Requests',
        },
        {
            title: t({ name: 'outgoing_requests' }),
            type: FeatureType.F_FEEDBACK,
            optionKey: 'OUTGOING_FEEDBACK',
            tabName: 'Requests',
        },
        {
            title: t({ name: 'praise_wall' }),
            type: FeatureType.F_PRAISE,
            optionKey: 'PRAISE_WALL',
            tabName: 'PraiseWall',
        },
    ];

    const goalsOptions: MenuOption[] = [
        {
            title: t({
                name: 'pending_check_ins',
                defaultValue: 'Pending Check Ins',
            }),
            type: FeatureType.UNDEFINED,
            optionKey: 'PENDING_CHECK_INS',
            tabName: 'Requests',
        },
        {
            title: t({ name: 'at_risk' }),
            type: FeatureType.UNDEFINED,
            optionKey: 'AT_RISK',
            tabName: 'Requests',
        },
        {
            title: t({ name: 'behind' }),
            type: FeatureType.UNDEFINED,
            optionKey: 'BEHIND',
            tabName: 'PraiseWall',
        },
    ];

    return [
        isGoalsEnabled() && {
            title: t({ name: 'Goals' }),
            type: AppsType.GOAL,
            name: 'GOALS',
            onSelect: (title: string) => {
                if (title === 'PENDING_CHECK_INS') {
                    showElementSelected('GoalsView', {
                        selectedTab: title,
                    });
                    navigation.navigate('PendingCheckIn');
                } else {
                    showElementSelected('GoalsView', {
                        selectedTab: title,
                    });
                }
            },
            options: goalsOptions,
        },
        isFeedbackEnabled() && {
            title: t({ name: 'Feedback' }),
            type: AppsType.FEEDBACK,
            name: 'FEEDBACK',

            onSelect: (title: string) => {
                const tabName: string = 'Wall';
                const optionKey: OptionKey = 'FEEDBACK_WALL';
                let optionSelected;
                if (title !== 'FEEDBACK') {
                    optionSelected = feedbackOptions.filter(
                        x => x.optionKey === title,
                    )[0];
                }
                showElementSelected('FeedbackView', {
                    selectedTab:
                        optionSelected && optionSelected.tabName
                            ? optionSelected.tabName
                            : tabName,
                    selectedFilter:
                        optionSelected && optionSelected.optionKey
                            ? optionSelected.optionKey
                            : optionKey,
                });
            },
            options: feedbackOptions,
        },
        isGroupsEnabled() && {
            title: t({ name: 'Groups' }),
            type: AppsType.GROUPS,
            name: 'GROUPS',
            onSelect: (title: string) => {
                showElementSelected('Groups', {});
            },
        },
        isNotesEnabled() && {
            title: t({ name: 'Notes' }),
            type: AppsType.PNS,
            name: 'QUICK_NOTE',
            onSelect: (title: string) => {
                showElementSelected('NotesView');
            },
            options: [],
        },
        (isSurveyEnabled() || isEngagementSurveyEnabled()) && {
            title: t({ name: 'Surveys' }),
            type: AppsType.SURVEY,
            name: 'SURVEYS',
            onSelect: (title: string) => {
                showElementSelected('SurveyView');
            },
            options: [],
        },

        isTeamPulseEnabled() && {
            title: t({ name: 'Team Pulse' }),
            type: AppsType.PNS,
            name: 'TEAM_PULSE',
            onSelect: (title: string) => {
                showElementSelected('TeamPulse', {}, true);
            },
            options: [],
        },

        isIDPEnabled() && {
            title: t({ name: 'Growth' }),
            type: AppsType.GROWTH,
            name: 'Growth',
            onSelect: (title: string) => {
                showElementSelected('IDP', {}, true);
            },
        },

        isGoalsTwoEnabled() && {
            title: t({ name: 'Goals' }),
            type: AppsType.GOAL,
            name: 'GOALS_TWO',
            onSelect: (title: string) => {
                showElementSelected('GoalsTwo', {}, true);
            },
            options: [],
        },

        isLearningEnabled() && {
            title: t({ name: 'Learning' }),
            type: AppsType.LEARNING,
            name: 'LearningV2',
            onSelect: (title: string) => {
                showElementSelected('LearningMainScreen', {}, true);
            },
        },

        isResourcesEnabled() && {
            title: t({ name: 'Resources' }),
            type: AppsType.PNS,
            name: 'RESOURCES',
            onSelect: (title: string) => {
                showElementSelected('Resources');
            },
            options: [],
        },
    ];
};
