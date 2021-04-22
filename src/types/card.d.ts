export interface ICardinfo {
    _id: string;
    title: string;
    description: string;
    listId: string;
    assignees?: (null)[] | null;
}

export interface ICardId {
    _id: string;
}