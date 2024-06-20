import { NameId, NameIdType } from '../User/UserModel';

export type BaseGoal = {
    id: number;
    aligned: boolean;
    archived: boolean;
    archived_on: string;
    assigned_at: string; //"2020-05-28T06:38:46.880Z"
    attachments: GoalAttachment[]; //[]
    category: Category; //[{id: "ec05eec68afc459aa64a", name: "Public Relations"}]
    checkin_due: string; //Date "2020-07-17"
    checkin_frequency: string; //"Weekly"
    children_count: number; // 0
    created_at: string; //"2020-05-28T06:38:46.878Z"
    creator: GoalUserModel; // {id: "0b4e5704-651e-4c4a-b2c2-0aa3c8154491", name: "Larisa Parker", profile_pic: {,…},…}
    cycle: Cycle; // null
    end_date: string; //"2020-08-27"
    last_check_at: string; //"2020-05-28T06:53:21.501Z"
    locked: boolean;
    measurement_type: string; //"Quantity"
    notes: string; //""
    owner: GoalUserModel;
    parent_id: number;
    position: number;
    progress: number;
    start_date: string; //"2020-05-28"
    status?: string; // "On Track"
    target_progress: number;
    target_quantity: number;
    target_unit?: TargetUnit;
    title: string; //"28-05-2020 goal"
    type: string; // "Employee"
    uniq_identifier: string; //"ENGAG-8620-2805202046"
    updated_at: string; //"2020-05-28T06:53:21.680Z"
    weightage: number; //"100.0"
    follow: boolean;
    ownerName: string;
    creatorName: string;
    resolveDate: string;
    organisation_unit: NameIdType;
};

export type GoalsRow = BaseGoal & {
    follow: boolean;
    start_date: string;
    end_date: string;
    created_on: string;
    last_checkin: string;
    assigned_on: string;
    checkin_by: string;
};

export type GoalUserModel = {
    id: string;
    name: string;
    email: string;
    status: string;
    profile_pic?: GoalProfilePicture;
    job_title: NameId;
    reports_to: NameId & {
        profile_pic?: GoalProfilePicture;
        job_title: NameId;
    };
};

export type GoalProfilePicture = {
    large: string;
    original: string;
    reduced: string;
};

export type TargetUnit = {
    id: number;
    name: string;
    symbol?: string;
};

export type Category = {
    id: number;
    title: string;
    notes: string;
    uniq_category_id: string;
};

export type Cycle = {
    id: number;
    title: string;
    start_date: string;
    end_date: string;
    hidden: boolean;
};

export type KeyResult = {
    attachments: string[]; //[]
    end_date: string; // null
    goal: BaseGoal; //{id: 8620}
    id: number; //12865
    last_checkin_at: string; //"2020-05-28T06:53:21.501Z"
    measurement_type: ResultType; //"Milestone"
    notes: string; //null
    position: string; //null
    progress: number; //"100.0"
    start_date: string; //null
    target_progress: number; //0
    target_quantity: number; //"100.0"
    target_unit?: TargetUnit; //null
    title: string; //"KR5"
    weightage: number; //"0.0"
};

export enum ResultType {
    Milestone = 'Milestone',
    Percentage = 'Percentage',
    Quantity = 'Quantity',
}

export type GoalFollower = {
    goal_id: number;
    id: number;
    follower: GoalUserModel;
};

export type GoalAttachment = {
    id: number;
    content_type: string;
    extension: string;
    file_name: string;
    url: string;
};

export type GoalDiscussion = {
    id: number; //3017,
    goal_id: number; // 8499,
    discussed_on: GoalDiscussedOn;
    comment: string; //"kjhgfcdghbjkl",
    user: GoalUserModel;
    attachments: GoalAttachment[];
    created_at: string; //"2020-05-06T06:38:37.159Z",
    updated_at: string; //"2020-05-06T06:38:37.159Z"
};

export type GoalDiscussedOn = {
    id: number;
    title: string;
    type: string;
};

export type GoalCheckin = {
    id: number; //13384,
    goal_id: number; // 8499,
    check_in_for: GoalCheckInFor;
    notes: string; //"",
    progress: GoalCheckinProgress;
    target_quantity: number; //100,
    target_progress: number; //null,
    status: string; //"Reject",
    user: GoalUserModel;
    check_in_at: string; //"2020-05-06",
    attachments: GoalAttachment[]; //[],
    updated_at: string; //"2020-05-06T06:37:55.340Z"
    created_at: string; //"2020-05-06T06:37:55.340Z",
    last_check_in_for: {
        id: number;
    };
};

export type GoalCheckinProgress = {
    from: number; //0,
    to: number; //10
};

export type GoalCheckInFor = {
    id: number; //12800,
    type: string; // "KeyResult",
    title: string; //"adfasdf"
};

export type GoalStatusHistory = {
    id: number; //2177,
    history_type: string; //"Objective",
    goal: BaseGoal;
    notes: string; //null,
    from: string; // "Not Started",
    to: string; //"On Track",
    user: GoalUserModel;
    created_at: string; //"2020-05-06T06:37:55.425Z",
    updated_at: string; //"2020-05-06T06:37:55.425Z"
};

export type GoalCycles = {
    id: number;
    cycle_name: string;
    start_date: string;
    end_date: string;
    is_hidden: boolean;
};
