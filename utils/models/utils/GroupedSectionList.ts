export interface GroupedSectionList<TDataItem, TTitle = string> {
    key?: string;
    title: TTitle;
    data: TDataItem[];
}
