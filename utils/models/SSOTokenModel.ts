import Model from './Model';

export default interface SSOTokenModel extends Model {
    id?: string;
    token: string;
    subdomain?: string;
}
