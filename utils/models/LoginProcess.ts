import Model from './Model';

type LoginProcessType = {
    sso_enabled: boolean;
    url?: string;
};

export default interface LoginProcess extends Model {
    data: LoginProcessType;
    success: boolean;
}
