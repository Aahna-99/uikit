import Model from './Model';
import { PaginationModel } from './PaginationModel';

export default interface ListResponseModel<T> extends Model {
    pagination: PaginationModel;
    data: T[];
}
