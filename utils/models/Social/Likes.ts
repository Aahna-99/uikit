import { Author } from './Activities';

export type Like = {
    action_date: string;
    action_type: string;
    activity: { id: number };
    author: Author;
    id: number;
};

export type UrlPreviewInfo = {
    description: string;
    image: string;
    title: string;
    url: string;
    errors?: [];
};
