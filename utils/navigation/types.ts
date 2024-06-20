import { FeedbackRowType } from 'components/Feedback/SectionRow/FeedbackWall';
import { itemProp } from 'components/Feedback/SectionRow/Requests';

import { Toast } from 'components/Toasts';

import { Gamifications } from '../models/Directory/Directory';
import { FeedbackAbout } from '../models/Feedback/Feedback';
import { FeedbackComment } from '../models/Feedback/FeedbackComment';
import { GoalsRow } from '../models/Goal/Goal';
import { Group } from '../models/Groups/Group';
import { ActivityAttachment, Activities } from '../models/Social/Activities';
import UserModel from '../models/User/UserModel';

import { FeedbackTabName } from '../views/Feedback';
import { RowCommentType } from '../views/Feedback/Detail';

import { SocialTabName } from '../views/Social';
import { FeedAttachmentLightBoxPayload } from '../views/Social/AttachmentLightBox';

import { OptionKey } from './moreConfig';

export type RootStackParamList = {
    SubDomainView: { domainplace?: string; SubDomain?: string; url?: String };
    LoginView: {
        SubDomain?: string;
        Email?: string;
        BiometricToken?: string;
        emailplace?: string;
        password_policy?: any;
    };
    SsoLoginsView: { SsoLogins: string[] };
    HomeView: undefined;
    IntermediateView: {
        SsoLogins: string;
        SubDomain: string;
        is_engagedly_login: boolean;
        password_policy?: string;
    };
    ForgotPassword: { email: string };
    ForgotPasswordView: { url: string };
    InAppBrowser: { url: string };
};

export type HomeStackParamList = {
    Gamifications: { gamifications: Gamifications[] };
    HomeView: undefined;
    DetailUserDirectory: {
        item?: UserModel;
        showLogoutOption?: boolean;
    };
    SocialPostByUser: {
        user: UserModel;
        type: 'Prise' | 'Post';
    };
    FeedbackShared: {
        feedbackRequestId: string;
    };
    GoalDetails: {
        goalId: string;
    };
    NoteEditor: undefined;
    RequestDetail: {
        feedbackRequestId: any;
        userId: any;
    };
    MultimediaType: {
        attachments: ActivityAttachment[];
        onBack?: () => void;
        showLikesAndComments?: boolean;
        hideNavigation?: boolean;
    };
    MultimediaCarrousel: {
        attachments: ActivityAttachment[];
    };
    CommentsListSocial: {
        parentId: number;
        activity: Activities;
        showFooterOnDismiss: boolean;
    };
    CommentsListSocialFromPush: { parentId: number; activity: Activities };
    FeedAttachmentLightBoxView: FeedAttachmentLightBoxPayload;
};

export type ActivityStackParamList = {
    ActivityView: undefined;
    CommentsListSocialFromPush: { parentId: number; activity: Activities };
    FeedbackShared: {
        feedbackRequestId: string;
        userId?: string;
    };
    FeedbackDetail: {
        item: FeedbackRowType;
        feedbackId?: string;
        userId?: string;
    };
    NotesView: undefined;
    NoteInformation: undefined;
    GoalDetails: {
        goalId: string;
    };
    GroupsDetail: { groupId: string };
    RequestDetail: {
        feedbackRequestId: any;
        userId: any;
    };
    Celebrations: { type: string; date: string };
};

export type FeedStackParamList = {
    FeedView: { selectedTab: string };
    MultimediaType: {
        attachments: ActivityAttachment[];
        onBack?: () => void;
        showLikesAndComments?: boolean;
        hideNavigation?: boolean;
    };
    MultimediaCarrousel: {
        attachments: ActivityAttachment[];
    };
    CommentsListSocial: {
        parentId: number;
        activity: Activities;
        showFooterOnDismiss: boolean;
    };
    CommentsListSocialFromPush: { parentId: number; activity: Activities };
    FeedAttachmentLightBoxView: FeedAttachmentLightBoxPayload;
    GroupsView: { selectedTab: string; selectedFilter?: string };
    NotesView: undefined;
    GroupsDetail: {
        item: Group;
        onLeaveRoute: string;
        onLeaveCb: (message?: string) => void;
    };
    VideoPlayer: { uri: string };
    SearchSocial: {
        defaultFilter: string;
        isGroupsEnabled: boolean;
        tabName: string;
    };
    GroupsInformation: {
        item: Group;
        onLeaveRoute: string;
        onLeaveCb: (message?: string) => void;
    };
};

export type FeedAttachmentLightBoxStackParamList = {
    FeedAttachmentLightBoxView: FeedAttachmentLightBoxPayload;
};

export type MoreStackParamList = {
    MoreView: undefined;
    FeedbackView: { selectedTab: FeedbackTabName; selectedFilter: OptionKey };
    FeedbackSearch: { userId: string; tabName: string };
    FeedbackDetail: {
        item: FeedbackRowType;
        feedbackId?: string;
        userId?: string;
        updateChanges(): void;
    };
    Messages: {
        items: RowCommentType;
        feedback_id: string;
        onAdd(message: FeedbackComment): void;
        onDelete(messageId: number): void;
        onUpdate(messageId: number, text: string): void;
    };
    SocialView: { selectedTab: SocialTabName; selectedFilter: OptionKey };
    GoalsView: { selectedTab: string };
    GoalsTwo: { selectedTab: string };
    GoalDetails: {
        goalIdFromNotification: number;
        follow?: boolean;
        userId: string;
        refresh?(): void;
    };
    GoalCheckin: {
        item: GoalsRow;
        userId: string;
        refresh?: boolean;
    };
    FeedbackMembers: {
        toFrom: FeedbackAbout[];
        item: FeedbackRowType;
        showNotify: boolean;
        titleHeader: string;
    };
    GroupsView: { selectedTab: string; selectedFilter?: string };
    NotesView: undefined;
    DirectoryView: undefined;
    SurveyView: { selectedTab: string };
    DetailUserDirectory: {
        item?: UserModel;
        showLogoutOption?: boolean;
    };
    GroupsDetail: { item: Group };
    GroupsInformation: { item: Group };
    SocialPostByUser: {
        user: UserModel;
        type: 'Prise' | 'Post';
    };
    CommentsListSocial: {
        parentId: number;
        activity: Activities;
    };
    SearchDirectory: undefined;
    SearchGroups: { tabName: string };
    SearchSocial: undefined;
    VideoPlayer: { uri: string };
    FeedAttachmentLightBoxView: FeedAttachmentLightBoxPayload;
    GoalsSearch: { tabName: string };
    SurveySearch: { tabName: string };
    PendingCheckIn: undefined;
    NoteInformation: undefined;
    NoteEditor: undefined;
    SearchNote: undefined;
    RequestDetail: {
        item: itemProp;
        menuOptions: string[];
        requestButtonText: string;
        onDelete(id: string): void;
        ignoreFeedRequest(id: string): void;
        onEdit(refresh: boolean, toast?: Toast): void;
    };
    Gamifications: { gamifications: Gamifications[] };
};

export type DrawerStackParamList = {
    HomeView: undefined;
    SettingsView: undefined;
};
