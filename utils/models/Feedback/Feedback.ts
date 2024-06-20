import { Creator } from './FeedbackComment';

export type RequestResponse = {
    id: string;
    request: string;
    from: BaseFeedbackIdentity;
    created_at: string;
    categories: { id: string; name: string }[];
};

export type BaseFeedback = {
    id: string;
    from: BaseFeedbackIdentity;
    feedback: string;
    about: FeedbackAbout[];
    aboutOriginal?: FeedbackAbout[];
    feedback_type: { id: string; name: string };
    to: FeedbackTo[];
    categories: { id: string; name: string }[];
    created_at: string;
    comments_count: number;
    attachments_count: number;
    comments: any[];
    attachments: any[];
    request: RequestResponse;
};

export type Attachments = {
    attachment: {
        id: number;
        file_name: string;
        file_type: string;
        file_extension: string;
        url: string;
        can_delete: boolean;
    };
    creator: Creator;
    created_at: string;
    updated_at: string;
};

export type FeedbackRequest = BaseFeedback & {
    request: string;
    is_ignored: boolean;
    responded: boolean;
    updated_at: string;
};

export type FeedbackTo = FeedbackAbout &
    BaseFeedbackIdentity & {
        anonymity: boolean;
        type: string;
        status: string;
        request_id: number;
    };

export type FeedbackAbout = BaseFeedbackIdentity & {
    responded: boolean;
    designation: {
        id: string;
        name: string;
    };
    hideInMembers?: boolean;
};

type BaseFeedbackIdentity = {
    profile_picture?: {
        small: string;
        medium: string;
        large: string;
    };
    display_picture?: {
        small: string;
        medium: string;
        large: string;
    };
    email: string;
    id: string;
    name: string;
    status: string;
};
