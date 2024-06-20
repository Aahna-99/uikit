export type Author = {
    name: string;
    id: string;
    status?: string;
    display_picture: {
        large: string;
        original: string;
        reduced: string;
    };
    type?: string;
    designation?: string;
};

export type Audience = Author & {
    type: string;
    designation: string;
};

export type Tags = {
    code: string;
    label: string;
};

export type BadgeDetail = {
    category_image_url: string;
    category_name: string;
    level: string;
    type: string;
    message?: string;
};

export interface ActivityAttachmentUrl {
    original: string;
    reduced: string;
}

export interface ActivityAttachment {
    activity_id: number;
    activity_object_id: number;
    content_type: string;
    extension: string;
    file_name: string;
    id: number;
    title: string | null;
    url: ActivityAttachmentUrl | string;
}

export type Link = {
    callback_url: string;
    description: string;
    id: number;
    thumbnail: string;
    title: string;
    url: string;
};

export interface Activities {
    id: number;
    activity_type: string;
    created_at: string;
    updated_at: string;
    title?: string;
    content: string;
    author: Author;
    audience: Audience[];
    links: Link[];
    attachments: any[];
    tags: Tags[];
    comments_count: number;
    likes_count: number;
    liked?: boolean;
    pinned: boolean;
    can_edit: boolean;
    can_delete: boolean;
    reciever?: Author;
    recognized_actors?: Audience[];
    upvote_count: number;
    downvote_count: number;
    upvote_ratio: number;
    downvote_ratio: number;
    badge_details?: BadgeDetail;
    badge_details_v1?: BadgeDetail;
    awarded_to?: Author | Author[];
    award_details?: BadgeDetail;
    upvoted: boolean;
    downvoted: boolean;
}

export class ActivitySupport {
    public static createQuery(queryString: string, objs: string[]): string {
        let query = '';
        objs.forEach(value => (query += `&${queryString}[]=${value}`));
        return query;
    }
}

interface BaseCreateActivityBody {
    activity_type: string;
    attachment_ids: string[];
    audience_ids: string[];
    content: string;
    deleted_attachment_ids: string[];
}

export interface CreateActivityBody extends BaseCreateActivityBody {
    link: any[];
    tags: { name: string; code: string }[];
    description: string;
    recognized_user_ids?: string[];
}

export interface CreateCommentBody extends BaseCreateActivityBody {
    link: any;
    parent_id: number;
}
