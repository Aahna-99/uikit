export type Group = {
    admins: Admin[];
    admins_count: number;
    can_delete: boolean;
    can_edit: boolean;
    created_at: string;
    creator: any;
    description: string;
    display_picture: any;
    group_rules: any[];
    id: string;
    is_group_admin: boolean;
    is_member: boolean;
    members_count: number;
    name: string;
    pending_requests_count: number;
    request_status?: string;
    type: string;
    updated_at: string;
};

export type Admin = {
    email: string;
    id: string;
    full_name: string;
    is_group_admin: boolean;
    profile_pic: any;
};

export class GroupQuery {
    public static createQuery(queryString: string, objs: string[]): string {
        let query = '';
        objs?.forEach(value => (query += `&${queryString}[]=${value}`));
        return query;
    }
}

export const DEFAULT_GROUP_TYPE_IMAGES: any = {
    department: 'https://cdn.engagedly.com/v1/images/groups/Department.svg',
    'smart group': 'https://cdn.engagedly.com/v1/images/groups/SmartGroup.svg',
    business: 'https://cdn.engagedly.com/v1/images/groups/Business.svg',
    group: 'https://cdn.engagedly.com/v1/images/groups/Group.svg',
    'smart-group': 'https://cdn.engagedly.com/v1/images/groups/SmartGroup.svg',
    open: 'https://cdn.engagedly.com/v1/images/groups/Group.svg',
    interest: 'https://cdn.engagedly.com/v1/images/groups/Group.svg',
    closed: 'https://cdn.engagedly.com/v1/images/groups/Group.svg',
    'system-segments':
        'https://cdn.engagedly.com/v1/images/groups/SmartGroup.svg',
    'system segments':
        'https://cdn.engagedly.com/v1/images/groups/SmartGroup.svg',
    list: 'https://cdn.engagedly.com/v1/images/groups/SmartGroup.svg',
};
