export interface IRetriveSwimlaneCard {

}

export interface ISwimlaneInfo {
    _id: string;
    title: string;
    boardId: string;
    archived: boolean;
    createdAt: string;
    updatedAt: string;
    modifiedAt: string;
    type: string;
    sort: number;
    archivedAt?: string | null;
}