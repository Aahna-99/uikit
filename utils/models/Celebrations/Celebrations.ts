import { NameId, Picture } from '../User/UserModel';

export type Celebration = {
    id: string;
    name: string;
    first_name: string;
    middle_name?: string;
    last_name: string;
    employee_id: string;
    status: string;
    email: string;
    display_picture?: Picture;
    job_title?: NameId;
    business_unit?: NameId;
    employee_type?: NameId;
    location?: NameId;
    birthdate: string;
    phone_number: string;
    education?: any;
    about_me?: any;
    level?: string;
    secondary_phone_number?: string;
    joining_date?: string;
    promotion_date?: string;
    review_date: string;
    is_admin: any;
};
