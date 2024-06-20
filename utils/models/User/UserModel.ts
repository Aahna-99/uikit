export type NameId = {
    id: string;
    name: string;
};

export type NameIdAdmin = {
    id: string;
    name: string;
    is_admin: boolean;
};

export type NameIdType = {
    id: string;
    name: string;
    type: string;
};

export type Picture = {
    medium: string;
    small: string;
    large: string;
    passport: string;
    thumb: string;
};

export default interface UserModel {
    id: string;
    name: string;
    first_name: string;
    middle_name?: any;
    last_name: string;
    employee_id: string;
    status: string;
    email: string;
    display_picture?: Picture;
    job_title: NameId;
    business_unit: NameId[];
    employee_type?: any;
    location?: NameId;
    birthdate: string;
    departments: NameIdAdmin[];
    everyone_group: NameIdType;
    interest_groups: NameId[];
    primary_reporter?: UserModel;
    direct_reports?: UserModel[];
    education: string;
    about_me?: string;
    phone_number?: any;
    level?: any;
    secondary_phone_number: string;
    joining_date: string;
    promotion_date?: any;
    review_date?: any;
    is_admin: boolean;
}

export interface UserSearch {
    id: string;
    name: string;
    type: string;
    display_picture?: Picture;
    job_title?: NameId;
    group_type?: string;
}
