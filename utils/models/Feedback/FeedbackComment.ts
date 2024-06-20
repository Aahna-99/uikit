import { Picture } from '../User/UserModel';

export type Creator = {
    id: string;
    name: string;
    email: string;
    display_picture?: Picture;
};

export interface FeedbackComment {
    id: number;
    comment: string;
    creator: Creator;
    created_at: string;
    updated_at: string;
}
