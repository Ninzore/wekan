export interface IAddList {
    _id: string;
}

export interface IDelList {
    _id: string;
}

export interface IListBrif {
    _id: string;
    title: string;
}

export interface IListInfo {
    _id: string;
    title: string;
    boardId: string;
    sort: number;
    type: string;
    starred: boolean;
    archived: boolean;
    createdAt: string;
    updatedAt: string;
    modifiedAt: string;
    wipLimit: WipLimit;
    archivedAt: string;
    swimlaneId: string;
}

interface WipLimit {
    value: number;
    enabled: boolean;
    soft: boolean;
}
