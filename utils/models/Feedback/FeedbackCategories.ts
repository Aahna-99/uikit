import { NameId } from '../User/UserModel';

export interface FeedbackCategories {
    id: number;
    title: string;
    description: string;
    organisation: NameId;
    uniq_category_id: string;
    created_at: string;
    updated_at: string;
}
