export interface TaskModel {
    id: number;
    title: string;
    notes?: any;
    start_date?: any;
    end_date: string;
    creator_id?: any;
    creator_type: string;
    assigned_by?: any;
    assigned_to: string;
    status: string;
    priority?: any;
    position?: any;
    parent_id?: any;
    source: string;
    about: TaskAboutModel;
    task_type: string;
    organisation_id: string;
    metadata: TaskMetadataModel;
    created_at: string;
    updated_at: string;
    group_id?: any;
    labels: string[];
    sub_tasks: any[];
    lastRow?: boolean;
    hasMore?: boolean;
    typeRow?: string;
}

export interface TaskMetadataModel {
    state?: string;
    cycle_id?: number;
    reviewee?: NameKey;
    reviewer?: NameKey;
    created_at?: string;
    cycle_name?: string;
    updated_at?: string;
    pending_type?: string;
    reviewer_type?: string;
    cycle_end_date?: string;
    cycle_start_date?: string;
    assignment_status?: string;
    pending_action_id?: number;
    appraisal_form_assignment_id?: number;
    author?: NameKey;
    initiator?: NameKey;
    survey_id?: number;
    start_date?: string;
    access_code?: string;
    survey_title?: string;
    assignment_id?: string;
    survey_version?: string;
    from?: TaskFromModel;
    requested_by?: NameKey;
    checkin_title?: string;
    title?: string;
    course_title: string;
}

export interface NameKey {
    name: string;
    access_key: string;
}

export interface TaskAboutModel {
    profile_picture: ProfilePictureModel;
    designation: string;
    name: string;
    email: string;
}

export interface ProfilePictureModel {
    profile_pic_reduced: string;
    profile_pic_large_thumbnail: string;
    profile_pic_croppable: string;
    profile_pic_postpic: string;
    profile_pic_passport: string;
    profile_pic_passport_thumb: string;
    profile_pic_post_thumb: string;
    profile_pic_post_small: string;
    profile_pic_thumb: string;
    profile_pic_thumb_preview: string;
    profile_pic_small: string;
}

export interface TaskUpcoming {
    end_date?: string;
    about: TaskAboutModel;
    labels: string[];
}

export interface TaskFromModel {
    name: string;
    id: string;
    email: string;
}
