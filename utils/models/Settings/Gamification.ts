export type GamificationServiceResponse = {
    organisation: GamificationOrganisation;
    action_details: GamificationActionDetails;
};

type GamificationOrganisation = {
    tariff_plan: any;
    id: string;
    organisation_uuid: string;
    name: string;
    selected_currency: string;
    currency_weight: string;
    reward_vendor_id: string;
    rebranding: any;
    organisation_admin_setting: any;
    rank_updated_at: string;
    settings: any;
};

type GamificationActionDetails = {
    Social: GamificationDetail[];
    HRM: GamificationDetail[];
    Gamification: GamificationDetail[];
    Learning: GamificationDetail[];
    Referral: GamificationDetail[];
};

export type GamificationDetail = {
    rule_filter_display_name: string;
    rule_filter_translation_key: string;
    application_defined: string;
    rules: any[];
};
