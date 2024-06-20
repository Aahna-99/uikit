import LoginProcess from '../models/LoginProcess';
import TokenModel from '../models/User/TokenModel';

export interface IAuthServices {
    logIn(user: string, password: string, domain: string): Promise<TokenModel>;
    logProcess(domain: string): Promise<LoginProcess>;
}
