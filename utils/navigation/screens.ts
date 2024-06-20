import { Platform } from 'react-native';

import { SubdomainScreen, SSOLoginScreen, LoginScreen } from 'Login';
import {
    HomeScreen,
    MenuScreen,
    AppsScreen,
    Notifications,
    Profile,
    About,
    Team,
} from 'Home';
import { Groups, GroupInfo } from 'Groups';
import { Resources } from 'Resources';
import {
    TeamPulse,
    Comments as PulseComments,
    History as PulseHistory,
    Pulse,
    DirectReportPulse,
    OrgPulse,
} from 'TeamPulse';
import {
    GoalsTwo,
    GoalDetailsScreen,
    MilestoneDetailsScreen,
    IndividualGoalDiscussion,
    GoalActivityScreen,
} from 'GoalsTwo';
import {
    LearningMainScreen,
    QuizIntermediateScreen,
    CourseContentMainScreen,
    LearningPathMainScreen,
    ExploreLibraryScreen,
    ExploreLibraryContentScreen,
    ExploreLibraryViewMoreScreen,
    ExploreGlobalSearchScreen,
    ExploreFilterScreen,
    ExploreLibraryMainScreen,
    CourseCalendar,
} from 'Learning';
import { SocialFeeds, Likes, Comments, CreatePost } from 'Social';
import { Celebrations } from 'Celebrations';
import { PendingActions } from 'PendingActions';
import { Filters, Search, ImageSlider, VideoPlayer } from 'uikit';
import { Directory, DirectoryProfile } from 'Directory';

import {
    IntermediateScreen,
    ForgotPasswordScreen,
    ResetPasswordScreen,
} from 'Login';
import {
    DetailUserDirectory,
    Gamifications,
    SearchDirectory,
    SocialPostByUser,
} from 'DirectoryView';
import {
    IDP,
    CreateIDP,
    IDPOverlay,
    IDPDetail,
    AddMilestone,
    MilestoneDetail,
    GrowthResources,
    EmployeeIDP,
    AspirationDetail,
    AspirationAnswerListing,
    EditAspirations,
    ViewHistory,
} from 'IDP';
import { GoalDetails, PendingCheckIn, GoalSearch } from 'GoalView';
import { GroupsDetail, GroupsInformation, SearchGroups } from 'GroupView';
import { UsersList, NoteInformation, NoteEditor, SearchNote } from 'NoteView';
import { SurveyDetail, SurveySearch } from 'SurveyView';

import {
    CommentsListSocialFromPush,
    CommentsListSocial,
    // CreatePost,
    AttachmentLightBox,
    MultimediaCarrousel,
    MultimediaType,
    SearchSocial,
} from 'SocialView';
import {
    Detail as DetailFeedback,
    FeedbackShared,
    PraiseWallForm,
    RequestFeedback,
    RequestDetail,
    FeedbackMembers,
    FeedbackSearch,
} from 'FeedbackView';

import {
    SsoLoginsView,
    InAppBrowser,
    SubDomainView,
    ForgotPassword,
    Activities,
    CelebrationView,
    DirectoryView,
    SurveyView,
    FeedbackView,
    GoalView,
    GroupView,
    MessageView,
    NoteView,
    PendingView,
    SocialView,
    MoreView,
    VideoPlayerContainer,
} from 'views';

import { TabNavigation } from './Navs';
import { transition, CardStyleInterpolator } from './config';
import Init from './Init';
import { TransitionSpecs } from '@react-navigation/stack';
//import { GoalDetailsScreen } from 'src/v2/modules/GoalsTwo/screens';

const options = {
    headerShown: false,
    transitionSpec: transition,
    cardStyleInterpolator: CardStyleInterpolator,
};

const resourcesScreens = [
    {
        name: 'Resources',
        component: Resources,
        options,
    },
];

const teamPulseScreens = [
    {
        name: 'TeamPulse',
        component: TeamPulse,
        options: options,
    },
    {
        name: 'PulseComments',
        component: PulseComments,
        options: options,
    },
    {
        name: 'PulseHistory',
        component: PulseHistory,
        options: options,
    },
    {
        name: 'Pulse',
        component: Pulse,
        options: options,
    },
    {
        name: 'DirectReportPulse',
        component: DirectReportPulse,
        options: options,
    },
    {
        name: 'OrgPulse',
        component: OrgPulse,
        options: options,
    },
];

const goalsTwoScreens = [
    {
        name: 'GoalsTwo',
        component: GoalsTwo,
        options: options,
    },
    {
        name: 'GoalDetailsScreen',
        component: GoalDetailsScreen,
        options: options,
    },
    {
        name: 'MilestoneDetailsScreen',
        component: MilestoneDetailsScreen,
        options: options,
    },
    {
        name: 'IndividualGoalDiscussion',
        component: IndividualGoalDiscussion,
        options: options,
    },

    {
        name: 'GoalActivityScreen',
        component: GoalActivityScreen,
        options: options,
    },
];

const idpScreens = [
    {
        name: 'IDP',
        component: IDP,
        options,
    },
    {
        name: 'CreateIDP',
        component: CreateIDP,
        options,
    },
    {
        name: 'IDPOverlay',
        component: IDPOverlay,
        options,
    },
    {
        name: 'IDPDetail',
        component: IDPDetail,
        options,
    },
    {
        name: 'AddMilestone',
        component: AddMilestone,
        options,
    },
    {
        name: 'MilestoneDetail',
        component: MilestoneDetail,
        options,
    },
    {
        name: 'GrowthResources',
        component: GrowthResources,
        options,
    },
    {
        name: 'EmployeeIDP',
        component: EmployeeIDP,
        options,
    },
    {
        name: 'AspirationDetail',
        component: AspirationDetail,
        options,
    },
    {
        name: 'AspirationAnswerListing',
        component: AspirationAnswerListing,
        options,
    },

    {
        name: 'EditAspirations',
        component: EditAspirations,
        options,
    },
    {
        name: 'ViewHistory',
        component: ViewHistory,
        options,
    },
];

const learningScreens = [
    {
        name: 'LearningMainScreen',
        component: LearningMainScreen,
        options: options,
    },
    {
        name: 'QuizIntermediateScreen',
        component: QuizIntermediateScreen,
        options: options,
    },
    {
        name: 'CourseContentMainScreen',
        component: CourseContentMainScreen,
        options: options,
    },
    {
        name: 'LearningPathMainScreen',
        component: LearningPathMainScreen,
        options: options,
    },
    {
        name: 'ExploreLibraryScreen',
        component: ExploreLibraryScreen,
        options: options,
    },
    {
        name: 'ExploreLibraryContentScreen',
        component: ExploreLibraryContentScreen,
        options: options,
    },
    {
        name: 'ExploreLibraryViewMoreScreen',
        component: ExploreLibraryViewMoreScreen,
        options: options,
    },
    {
        name: 'ExploreGlobalSearchScreen',
        component: ExploreGlobalSearchScreen,
        options: options,
    },
    {
        name: 'CourseCalendar',
        component: CourseCalendar,
        options,
    },
    {
        name: 'ExploreFilterScreen',
        component: ExploreFilterScreen,
        options: options,
    },
    {
        name: 'ExploreLibraryMainScreen',
        component: ExploreLibraryMainScreen,
        options: options,
    },
];

const globalScreens = [
    {
        name: 'Init',
        component: Init,
        options,
    },
    {
        name: 'Subdomain',
        component: SubdomainScreen,
        options: {
            ...options,
            animationEnabled: false,
        },
    },
    {
        name: 'SSOLoginScreen',
        component: SSOLoginScreen,
        options: {
            ...options,
        },
    },
    {
        name: 'Likes',
        component: Likes,
        options: {
            ...options,
            title: { name: 'Feed' },
        },
    },

    {
        name: 'ImageSlider',
        component: ImageSlider,
        options: options,
    },

    {
        name: 'ForgotPassword',
        component: ForgotPassword,
        options: {
            ...options,
            title: { name: 'org_sub_domain' },
        },
    },
    {
        name: 'SubDomainView',
        component: SubDomainView,
        options: {
            ...options,
            title: { name: 'org_sub_domain' },
        },
    },
    {
        name: 'SsoLoginsView',
        component: SsoLoginsView,
        options: {
            ...options,
            title: { name: 'select_one' },
        },
    },
    {
        name: 'ForgotPasswordScreen',
        component: ForgotPasswordScreen,
        options: {
            ...options,
            title: '',
        },
    },
    {
        name: 'ResetPasswordScreen',
        component: ResetPasswordScreen,
        options: {
            ...options,
            title: '',
        },
    },
    {
        name: 'InAppBrowser',
        component: InAppBrowser,
        options: {
            ...options,
            title: { name: 'select_one' },
        },
    },
    {
        name: 'LoginScreen',
        component: LoginScreen,
        options: {
            ...options,
            title: '',
        },
    },
    {
        name: 'IntermediateScreen',
        component: IntermediateScreen,
        options: {
            ...options,
            title: '',
        },
    },
    {
        name: 'HomeView',
        component: TabNavigation,
        options: {
            ...options,
            gestureEnabled: false,
        },
    },

    {
        name: 'UsersList',
        component: UsersList,
        options: options,
    },
    {
        name: 'DetailUserDirectory',
        component: DetailUserDirectory,
        options: options,
    },
    {
        name: 'RequestFeedback',
        component: RequestFeedback,
        options: options,
    },
    {
        name: 'RequestDetail',
        component: RequestDetail,
        options: options,
    },
    {
        name: 'FeedbackShared',
        component: FeedbackShared,
        options: options,
    },
    {
        name: 'FeedbackDetail',
        component: DetailFeedback,
        options: {
            ...options,
            gestureEnabled: true,
            title: 'Feedback Details',
        },
    },
    {
        name: 'NoteInformation',
        component: NoteInformation,
        options: {
            ...options,
            gestureEnabled: true,
            title: 'Note Information',
        },
    },
    {
        name: 'PraiseWallForm',
        component: PraiseWallForm,
        options: options,
    },
    {
        name: 'Profile',
        component: Profile,
        options: {
            ...options,
        },
    },

    {
        name: 'NoteEditor',
        component: NoteEditor,
        options: options,
    },
    {
        name: 'GoalDetails',
        component: GoalDetails,
        options: {
            ...options,
            gestureEnabled: true,
            title: {
                name: 'goal_details',
                defaultValue: 'goal_details',
            },
        },
    },
    {
        name: 'CommentsListSocialFromPush',
        component: CommentsListSocialFromPush,
        options: options,
    },
    {
        name: 'CommentsListSocial',
        component: CommentsListSocial,
        options: options,
    },
    {
        name: 'GroupsDetail',
        component: GroupsDetail,
        params: {
            goBack: () => {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'HomeView' }],
                    }),
                );
            },
        },
        options: {
            ...options,
            gestureEnabled: true,
            title: 'Group Details',
        },
    },
    {
        name: 'SurveyDetail',
        component: SurveyDetail,
        options: {
            ...options,
            title: { name: 'Survey' },

            gestureEnabled: false,
        },
    },
    ...learningScreens,
    ...resourcesScreens,
    ...teamPulseScreens,
    ...goalsTwoScreens,
    ...idpScreens,
];

const pendingScreens = [
    {
        name: 'PendingView',
        component: PendingView,
        options: {
            ...options,
            title: { name: 'pending' },
        },
    },
    {
        name: 'DetailUserDirectory',
        component: DetailUserDirectory,
        options: options,
    },
    {
        name: 'Gamifications',
        component: Gamifications,
        options: {
            ...options,
            gestureEnabled: true,
        },
    },
    {
        name: 'SocialPostByUser',
        component: SocialPostByUser,
        options: options,
    },
    {
        name: 'FeedbackShared',
        component: FeedbackShared,
        options: options,
    },
    {
        name: 'RequestDetail',
        component: RequestDetail,
        options: {
            ...options,
            title: '',
        },
    },
    {
        name: 'NoteEditor',
        component: NoteEditor,
        options: options,
    },
    {
        name: 'MultimediaType',
        component: MultimediaType,
        options: {
            headerShown: true,
            title: '',
        },
    },
    {
        name: 'MultimediaCarrousel',
        component: MultimediaCarrousel,
        options: {
            headerShown: true,
            title: '',
        },
    },
    {
        name: 'CommentsListSocial',
        component: CommentsListSocial,
        options: options,
    },
    {
        name: 'CommentsListSocialFromPush',
        component: CommentsListSocialFromPush,
        options: options,
    },
    {
        name: 'FeedAttachmentLightBoxView',
        component: AttachmentLightBox,
        options: {
            ...options,
            title: { name: 'Feed' },
        },
    },
];

const activityScreens = [
    {
        name: 'ActivityView',
        component: Activities,
        options: {
            ...options,
            title: { name: 'Activity' },
        },
    },
    {
        name: 'CommentsListSocialFromPush',
        component: CommentsListSocialFromPush,
        options: options,
    },
    {
        name: 'FeedbackShared',
        component: FeedbackShared,
        options: options,
    },
    {
        name: 'FeedbackDetail',
        component: DetailFeedback,
        options: {
            ...options,
            gestureEnabled: true,
            title: 'Feedback Details',
        },
    },
    {
        name: 'NotesView',
        component: NoteView,
        options: options,
    },
    {
        name: 'NoteInformation',
        component: NoteInformation,
        options: options,
    },
    {
        name: 'GoalDetails',
        component: GoalDetails,
        options: {
            ...options,
            gestureEnabled: true,
            title: {
                name: 'goal_details',
                defaultValue: 'goal_details',
            },
        },
    },
    {
        name: 'GroupsDetail',
        component: GroupsInformation,
        options: {
            ...options,
            gestureEnabled: true,
            title: 'Group Details',
        },
    },
    {
        name: 'RequestDetail',
        component: RequestDetail,
        options: {
            ...options,
            title: '',
        },
    },
    {
        name: 'Celebrations',
        component: CelebrationView,
        options: options,
    },
];

const feedScreens = [
    {
        // name: 'FeedView',
        // component: SocialView,
        name: 'SocialFeeds',
        component: SocialFeeds,
        options: {
            ...options,
            title: { name: 'Feed' },
        },
    },
    {
        name: 'Comments',
        component: Comments,
        options: {
            ...options,
            title: { name: 'Feed' },
        },
    },
    {
        name: 'Filters',
        component: Filters,
        options: options,
    },
    {
        name: 'Search',
        component: Search,
        options: options,
    },
    {
        name: 'CreatePost',
        component: CreatePost,
        options: {
            ...options,
            title: { name: 'Feed' },
        },
    },

    {
        name: 'VideoPlayer',
        component: VideoPlayer,
        options: options,
    },
    // {
    //     name: 'VideoPlayer',
    //     component: VideoPlayerContainer,
    //     options: {
    //         ...options,
    //         title: { name: 'Feed' },
    //     },
    // },
    {
        name: 'FeedAttachmentLightBoxView',
        component: AttachmentLightBox,
        options: {
            ...options,
            title: { name: 'Feed' },
        },
    },
    {
        name: 'MultimediaType',
        component: MultimediaType,
        options: {
            headerShown: true,
            title: '',
        },
    },
    {
        name: 'MultimediaCarrousel',
        component: MultimediaCarrousel,
        options: {
            headerShown: true,
            title: '',
        },
    },
    {
        name: 'CommentsListSocial',
        component: CommentsListSocial,
        options: options,
    },
    {
        name: 'GroupsDetail',
        component: GroupsDetail,
        options: {
            ...options,
            gestureEnabled: true,
            title: 'Feedback Details',
        },
    },
    {
        name: 'SearchSocial',
        component: SearchSocial,
        options: options,
    },
];

const homeScreen = [
    {
        name: 'Home',
        component: HomeScreen,
        options,
    },
    {
        name: 'CreatePost',
        component: CreatePost,
        options: {
            ...options,
            title: { name: 'Feed' },
        },
    },
    {
        name: 'FeedAttachmentLightBoxView',
        component: AttachmentLightBox,
        options: {
            ...options,
            title: { name: 'Feed' },
        },
    },
    {
        name: 'SocialFeeds',
        component: SocialFeeds,
        options: {
            ...options,
            title: { name: 'Feed' },
        },
    },
    {
        name: 'Menu',
        component: MenuScreen,
        options: {
            ...options,
            gestureDirection: 'horizontal-inverted',
        },
    },
    {
        name: 'Apps',
        component: AppsScreen,
        options: {
            ...options,
        },
    },
    {
        name: 'Groups',
        component: Groups,
        options: {
            ...options,
        },
    },
    {
        name: 'Celebrations',
        component: Celebrations,
        options: {
            ...options,
        },
    },
    {
        name: 'GroupsDetail',
        component: GroupsDetail,
        params: {
            goBack: () => {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'HomeView' }],
                    }),
                );
            },
        },
        options: {
            ...options,
            gestureEnabled: true,
            title: 'Group Details',
        },
    },
    {
        name: 'Notifications',
        component: Notifications,
        options: {
            ...options,
        },
    },
    {
        name: 'Directory',
        component: Directory,
        options: {
            ...options,
        },
    },
    {
        name: 'About',
        component: About,
        options: {
            ...options,
        },
    },
    {
        name: 'Team',
        component: Team,
        options: {
            ...options,
        },
    },
    {
        name: 'SocialPostByUser',
        component: SocialPostByUser,
        options: options,
    },
    {
        name: 'GroupInfo',
        component: GroupInfo,
        options: options,
    },
    {
        name: 'Pending Actions',
        component: PendingActions,
        options: options,
    },
    {
        name: 'Search',
        component: Search,
        options: options,
    },
    {
        name: 'Filters',
        component: Filters,
        options: options,
    },
    {
        name: 'DirectoryProfile',
        component: DirectoryProfile,
        options: {
            ...options,
        },
    },
];

const menuText =
    Platform.OS === 'ios' ? { name: 'more', defaultValue: 'Menu' } : '';

const appScreens = [
    {
        name: 'AppsScreen',
        component: AppsScreen,
        options: {
            ...options,
            title: menuText,
        },
    },
    {
        name: 'MoreView',
        component: MoreView,
        options: {
            ...options,
            title: menuText,
        },
    },
    {
        name: 'VideoPlayer',
        component: VideoPlayerContainer,
        options: {
            ...options,
            title: menuText,
        },
    },
    {
        name: 'FeedbackView',
        component: FeedbackView,
        options: {
            ...options,
            gestureEnabled: true,
            title: { name: 'feedback' },
            transitionSpec: {
                open: TransitionSpecs.ScaleFromCenterAndroidSpec,
                close: TransitionSpecs.ScaleFromCenterAndroidSpec,
            },
            cardStyleInterpolator: CardStyleInterpolator,
        },
    },
    {
        name: 'FeedbackDetail',
        component: DetailFeedback,
        options: {
            ...options,
            gestureEnabled: true,
            title: 'Feedback Details',
        },
    },

    {
        name: 'Messages',
        component: MessageView,
        options: {
            ...options,
            gestureEnabled: true,
            title: 'Messages',
        },
    },
    {
        name: 'GoalsView',
        component: GoalView,
        options: {
            ...options,
            gestureEnabled: true,
            title: { name: 'goals', defaultValue: 'goals' },
            transitionSpec: {
                open: TransitionSpecs.ScaleFromCenterAndroidSpec,
                close: TransitionSpecs.ScaleFromCenterAndroidSpec,
            },
            cardStyleInterpolator: CardStyleInterpolator,
        },
    },
    {
        name: 'FeedbackMembers',
        component: FeedbackMembers,
        options: {
            ...options,
            gestureEnabled: true,
            title: 'Messages',
        },
    },
    {
        name: 'MultimediaType',
        component: MultimediaType,
        options: {
            headerShown: true,
            title: '',
        },
    },
    {
        name: 'CommentsListSocial',
        component: CommentsListSocial,
        options: options,
    },
    {
        name: 'NotesView',
        component: NoteView,
        options: options,
    },
    {
        name: 'GroupsView',
        component: GroupView,
        options: options,
    },
    {
        name: 'DirectoryView',
        component: DirectoryView,
        options: options,
    },
    {
        name: 'DetailUserDirectory',
        component: DetailUserDirectory,
        options: options,
    },
    {
        name: 'SearchDirectory',
        component: SearchDirectory,
        options: options,
    },
    {
        name: 'SearchGroups',
        component: SearchGroups,
        options: options,
    },
    {
        name: 'GoalsSearch',
        component: GoalSearch,
        options: options,
    },
    {
        name: 'FeedbackSearch',
        component: FeedbackSearch,
        options: options,
    },
    {
        name: 'PendingCheckIn',
        component: PendingCheckIn,
        options: options,
    },
    {
        name: 'NoteInformation',
        component: NoteInformation,
        options: {
            ...options,
            gestureEnabled: true,
            title: 'Note Information',
        },
    },
    {
        name: 'MultimediaCarrousel',
        component: MultimediaCarrousel,
        options: {
            ...options,
            title: '',
        },
    },
    {
        name: 'RequestDetail',
        component: RequestDetail,
        options: {
            ...options,
            title: '',
        },
    },
    {
        name: 'SearchNote',
        component: SearchNote,
        options: {
            ...options,
            title: '',
        },
    },
    {
        name: 'Gamifications',
        component: Gamifications,
        options: {
            ...options,
            gestureEnabled: true,
        },
    },
    {
        name: 'SurveyView',
        component: SurveyView,
        options: options,
    },
    {
        name: 'SurveySearch',
        component: SurveySearch,
        options: options,
    },
    ...resourcesScreens,
    ...teamPulseScreens,
    ...goalsTwoScreens,
    ...homeScreen,
    ...learningScreens,
    ...idpScreens,
];

const directoryScreens = [
    {
        name: 'Directory',
        component: Directory,
        options: {
            ...options,
        },
    },
    {
        name: 'Search',
        component: Search,
        options: options,
    },
    {
        name: 'Filters',
        component: Filters,
        options: options,
    },
    {
        name: 'DirectoryProfile',
        component: DirectoryProfile,
        options: {
            ...options,
        },
    },
    {
        name: 'About',
        component: About,
        options: {
            ...options,
        },
    },
    {
        name: 'Team',
        component: Team,
        options: {
            ...options,
        },
    },
    {
        name: 'SocialPostByUser',
        component: SocialPostByUser,
        options: options,
    },
];

const initialRouteName = 'SubDomainView';

export {
    globalScreens,
    initialRouteName,
    pendingScreens,
    activityScreens,
    feedScreens,
    appScreens,
    homeScreen,
    directoryScreens,
    idpScreens,
};
