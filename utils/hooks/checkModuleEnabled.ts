import store from 'processors/store';

class CheckModuleEnabled {
    state: any;
    store: any;
    settings: any;
    subscriptions: any;

    constructor(props: any) {
        this.store = store.getState().app;
        this.settings = store.getState().app.settings.settings;
        this.subscriptions = store.getState().app.settings.subscriptions;
    }

    isSocialEnabled = () => {
        const { apps, features } = this.settings;

        let {
            f_status_update,
            f_questions,
            f_knowledge,
            f_ideas,
            f_initiative,
            f_distribution_list,
            f_album,
        } = features;

        return apps.app_social &&
            (f_status_update ||
                f_questions ||
                f_knowledge ||
                f_ideas ||
                f_initiative ||
                f_distribution_list ||
                f_album)
            ? true
            : false;
    };

    isGroupsEnabled = () => {
        let { apps, features } = this.settings;

        let { app_groups } = apps;
        let { f_interest_groups, f_closed_groups, f_open_groups } = features;

        return app_groups &&
            (f_interest_groups || f_closed_groups || f_open_groups)
            ? true
            : false;
    };

    isDirectoryEnabled = () => {
        let { apps } = this.subscriptions;

        let { app_organization_chart } = apps;

        return !!app_organization_chart;
    };

    isEngagementSurveyEnabled = () => {
        let { apps } = this.subscriptions;

        let { app_engagement_survey } = apps;

        return !!app_engagement_survey;
    };

    isSurveyEnabled = () => {
        let { apps } = this.subscriptions;

        let { app_survey } = apps;

        return !!app_survey;
    };

    isGoalsEnabled = () => {
        if (this.settings.all_settings.migrations.goals) {
            let oldUiVersionEnabled =
                this.settings.all_settings.migrations.goals
                    .old_ui_version_enabled;

            if (oldUiVersionEnabled === false) {
                return false;
            } else {
                return true;
            }
        }

        return true;
    };

    isGoalsTwoEnabled = () => {
        if (this.settings.all_settings.migrations.goals) {
            let oldUiVersionEnabled =
                this.settings.all_settings.migrations.goals
                    .old_ui_version_enabled;

            if (oldUiVersionEnabled === false) {
                return true; // Call isGoalsTwoEnabled if oldUiVersionEnabled is false
            } else {
                return false;
            }
        }

        return true; // Return true if oldUiVersionEnabled is true or not present
    };
    isNotesEnabled = () => {
        let { apps } = this.subscriptions;

        let { app_pns } = apps;

        return !!app_pns;
    };

    isFeedbackEnabled = () => {
        let { apps } = this.subscriptions;

        let { app_feedback } = apps;

        return !!app_feedback;
    };

    isTeamPulseEnabled = () => {
        let { apps } = this.settings;

        let { app_team_checkin } = apps;

        return !!app_team_checkin;
    };

    isIDPEnabled = () => {
        let { apps } = this.settings;

        let { app_growth } = apps;

        return !!app_growth;
    };
    isLearningEnabled = () => {
        let { apps } = this.settings;
        let { app_learning } = apps;
        return !!app_learning;
    };

    isResourcesEnabled = () => {
        let { features } = this.settings;

        let { f_document_library } = features;

        return !!f_document_library;
    };
}
export default CheckModuleEnabled;
