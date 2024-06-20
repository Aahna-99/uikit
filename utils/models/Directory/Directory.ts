export type Badges = {
    name: string;
    display_name: string;
    level: number;
    available_at: number;
    logo: string;
};

export type Players = {
    id: string;
    name: string;
    points: number;
    rank: number;
    redeemable_points: number;
    f_ranks: boolean;
};

export type Gamifications = {
    name: string;
    display_name: string;
    description: string;
    active: boolean;
    type: string;
    logo: string;
    points: number;
    badges: Badges[];
    highest_level: number;
};

export type Designations = {
    id: number;
    name: string;
    description: string;
    responsibilities: string;
    created_on: string;
};

export type ProfilePhoto = {
    id: string;
    name: string;
};
