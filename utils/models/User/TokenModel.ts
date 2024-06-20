import Model from '../Model';

export default interface TokenModel extends Model {
    message?: string;
    errors?: string;
    id: string;
    organisation_id: string;
    token: string;
    everyone_group: string;
}
