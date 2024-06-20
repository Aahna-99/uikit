import { NameId } from '../User/UserModel';

export interface FeedbackType {
    id: number;
    name: string;
    active: boolean;
    icon: string;
    organisation: NameId;
    created_at: string;
    updated_at: string;
}
