import QueryString from 'query-string';
export interface PaginationModel {
    size?: number;
    page: number;
    has_more?: boolean;
    total_records?: number;
}

export class PaginationSupport {
    public static getPaginationQuery(model: PaginationModel): string {
        return QueryString.stringify(model || { page: 1 }, {
            skipNull: true,
        });
    }
}
