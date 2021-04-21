export interface IUserLogin {
    id: string,
    token: string,
    tokenExpires: string
}

export interface IUserRegister {
    id: string,
    token: string,
    tokenExpires: string
}

export interface IUserCreate {
    uid: string
}

export interface IUserDelete {
    uid: string
}

export interface IUserBrif {
    _id: string;
    username: string;
}

export interface IUserDisbale extends IUserinfo {
    loginDisabled: boolean
}

export interface IUserinfo {
    _id: string;
    createdAt: string;
    services: Services;
    username: string;
    emails?: (EmailsEntity)[] | null;
    isAdmin: boolean | null;
    boards?: (BoardsEntity)[] | null;
    profile: Profile;
}

interface Services {
    password: Password;
    email: Email;
    resume: Resume;
}

interface Password {
    bcrypt: string;
}

interface Email {
    verificationTokens?: (VerificationTokensEntity)[] | null;
}

interface VerificationTokensEntity {
    token: string;
    address: string;
    when: string;
}

interface Resume {
    loginTokens?: (LoginTokensEntity)[] | null;
}

interface LoginTokensEntity {
    when: string;
    hashedToken: string;
}

interface EmailsEntity {
    address: string;
    verified: boolean;
}

interface BoardsEntity {
    isAdmin: boolean;
    isActive: boolean;
    isNoComments: boolean;
    isCommentOnly: boolean;
    isWorker: boolean;
    boardId: string;
}

interface Profile {
    boardView: string;
    listSortBy: string;
    templatesBoardId: string;
    cardTemplatesSwimlaneId: string;
    listTemplatesSwimlaneId: string;
    boardTemplatesSwimlaneId: string;
}