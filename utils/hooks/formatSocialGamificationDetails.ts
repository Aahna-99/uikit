import AppColors from '../../../config/AppColors';
import { ICONS } from '../models/IconsType';

export const ALL_POST_TYPES: any = {
    f_status_update: {
        color: AppColors.SocialStatusYellow,
        icon: ICONS.StatusUpdate,
        subTitle:
            'Share your thoughts and earn 1 point. Earn extra points for every like (+1) and comment (+1) on the post.',
        title: 'Share Status',
        backgroundColor: AppColors.SocialStatusBackground,
        id: 'StatusUpdate',
        label: 'add_status',
        key: 'f_status_update',
    },
    f_questions: {
        color: AppColors.SocialHelp,
        icon: ICONS.AskForHelp,
        subTitle:
            'You will receieve the replies in the comments section of the post. For each comment your colleagues will earn 5 points and your acknowlegement, will earn them 10 points.',
        title: 'Ask for Help',
        backgroundColor: AppColors.SocialHelpBackground,
        id: 'AskForHelp',
        label: 'ask_for_help',
        key: 'f_questions',
    },
    f_ideas: {
        color: AppColors.SocialIdeaCardTitleOrange,
        icon: ICONS.ShareAnIdea,
        subTitle:
            'Share your idea and earn 5 points. Earn extra points for every comment (+1) on the post.',
        title: 'Share an Idea',
        backgroundColor: AppColors.SocialIdeaBackground,
        id: 'ShareIdea',
        label: 'share_idea',
        key: 'f_ideas',
    },
    f_knowledge: {
        color: AppColors.SocialKnowledge,
        icon: ICONS.ShareKnowledge,
        subTitle:
            'Share Knowledge and earn 1 point. Earn extra points for every like (+1) and comment (+1) on the post.',
        title: 'Share Knowledge',
        backgroundColor: AppColors.SocialKnowledgeBackground,
        id: 'ShareKnowledge',
        label: 'share_knowledge',
        key: 'f_knowledge',
    },
};

export const formatSocialFamificationDetails = (rules: any[]) => {
    const subTitleMessages = {
        f_status_update: {
            message: '',
            points: 0,
            content: '',
        },
        f_questions: {
            message: '',
            points: 0,
            content: '',
        },
        f_ideas: {
            message: '',
            points: 0,
            content: '',
        },
        f_knowledge: {
            message: '',
            points: 0,
            content: '',
        },
    };
    rules.forEach(r => {
        if (r.rule_filter_display_name.toLowerCase().includes('status')) {
            subTitleMessages.f_status_update.message = `Share your thoughts and earn ${r.rules[0].value} point. Earn extra points for every like (+${r.rules[1].value}) and comment (+${r.rules[2].value}) on the post.`;
            subTitleMessages.f_status_update.points = r.rules[0].value;
            subTitleMessages.f_status_update.content =
                r.rule_filter_display_name;
        }
        if (r.rule_filter_display_name.toLowerCase().includes('help')) {
            subTitleMessages.f_questions.message = `You will receieve the replies in the comments section of the post. For each comment your colleagues will earn ${r.rules[2].value} points and your acknowlegement, will earn them ${r.rules[4].value} points.`;
            subTitleMessages.f_questions.points = r.rules[0].value;
            subTitleMessages.f_questions.content = r.rule_filter_display_name;
        }
        if (r.rule_filter_display_name.toLowerCase().includes('idea')) {
            subTitleMessages.f_ideas.message = `Share your idea and earn ${r.rules[0].value} points. Earn extra points for every comment (+${r.rules[1].value}) on the post.`;
            subTitleMessages.f_ideas.points = r.rules[0].value;
            subTitleMessages.f_ideas.content = r.rule_filter_display_name;
        }
        if (r.rule_filter_display_name.toLowerCase().includes('knowledge')) {
            subTitleMessages.f_knowledge.message = `Share Knowledge and earn ${r.rules[0].value} point. Earn extra points for every like (+${r.rules[1].value}) and comment (+${r.rules[2].value}) on the post.`;
            subTitleMessages.f_knowledge.points = r.rules[0].value;
            subTitleMessages.f_knowledge.content = r.rule_filter_display_name;
        }
    });
    return subTitleMessages;
};
