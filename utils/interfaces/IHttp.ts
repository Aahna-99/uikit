import { IHttpResponse } from './IHttpResponse';
export interface IHttp {
    get<T>(
        path: string,
        args?: RequestInit,
        json?: boolean,
    ): Promise<IHttpResponse<T>>;
    post<T>(
        path: string,
        args?: RequestInit,
        json?: boolean,
    ): Promise<IHttpResponse<T>>;
    put<T>(
        path: string,
        args?: RequestInit,
        json?: boolean,
    ): Promise<IHttpResponse<T>>;
    deletefn<T>(
        path: string,
        args?: RequestInit,
        json?: boolean,
    ): Promise<IHttpResponse<T>>;
    patch<T>(
        path: string,
        args?: RequestInit,
        json?: boolean,
    ): Promise<IHttpResponse<T>>;
}
