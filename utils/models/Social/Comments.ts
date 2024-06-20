import { Author, Audience, ActivityAttachment, Tags } from './Activities';

export interface Comments {
    id: number;
    activity_type: string;
    created_at: string;
    updated_at: string;
    title?: string;
    content: string;
    author: Author;
    audience: Audience[];
    links: any[];
    attachments: ActivityAttachment[];
    tags: Tags[];
    comments_count: number;
    likes_count: number;
    liked: boolean;
    pinned: boolean;
    can_edit: boolean;
    can_delete: boolean;
    parent_activity: {
        id: number;
    };
    acknowledged: boolean;
}
