const enum DEFAULT_BADGES_TEXT {
    engager = 'Congratulations, {{user_name}}! Appreciate the active participation in the day to day activities of our organization. \n \n We like your enthusiasm, and thank you, {{user_name}}, for your contributions!',
    einstein = 'Congratulations, {{user_name}}! Appreciate the innovative ideas. \n \n Thank you, {{user_name}}, for your contributions!',
    team_player = 'Congratulations, {{user_name}}! Appreciate the readiness to help your colleagues. \n \n Thank you, {{user_name}}, for your contributions!',
    guru = 'Congratulations, {{user_name}}!  The love for knowledge and sharing this knowledge with your colleagues is highly appreciated. \n \n Thank you, {{user_name}}, for your contributions!',
    rock_star = 'Congratulations, {{user_name}}! Appreciate being a valuable part of the organization and all these praises are well deserved. \n \n Thank you, {{user_name}}, for your contributions!',
    ambassador = 'Congratulations, {{user_name}}! Appreciate the readiness to refer candidates and help the organization in recruiting great talents from across the globe. \n \n Thank you, {{user_name}}, for your contributions!',
    wise_owl = 'Congratulations, {{user_name}}! Appreciate the longing for knowledge and learning. \n \n Thank you, {{user_name}}, for your contributions!',
    default_message = 'Congratulations, {{user_name}}! Appreciate your efforts. \n \n Thank you, {{user_name}}, for your contributions!',
}

const enum POST_TYPES {
    f_knowledge = 'ShareKnowledge',
    f_ideas = 'ShareIdea',
    f_status_update = 'StatusUpdate',
    f_questions = 'AskForHelp',
    f_discretionary_points = 'DiscretionaryPoint',
    f_praise = 'Praise',
    f_system_badges = 'BadgeUnlocked',
}

const enum ACTIVTY_TYPES_FOR_EDIT {
    Learning = 'f_knowledge',
    Question = 'f_questions',
    Post = 'f_status_update',
    birthday = 'f_status_update',
    Praise = 'f_praise',
    WorkAnniversary = 'f_status_update',
    Idea = 'f_ideas',
    BadgeUnlocked = 'BadgeUnlocked',
    DiscretionaryPointAwarded = 'DiscretionaryPointAwarded',
}

const enum SOCIAL_BADGES {
    praise = 'https://cdn.engagedly.com/v1/images/social/Praise.svg',
    engagement = 'https://cdn.engagedly.com/v1/images/social/Birthday.svg',
    idea = 'https://cdn.engagedly.com/v1/images/social/Idea.svg',
}

export {
    DEFAULT_BADGES_TEXT,
    POST_TYPES,
    SOCIAL_BADGES,
    ACTIVTY_TYPES_FOR_EDIT,
};
