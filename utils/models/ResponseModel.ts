import Model from './Model';

export default interface ResponseModel<T> extends Model {
    data: T;
}
