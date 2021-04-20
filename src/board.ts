import axios from "axios";
import {IAddMember} from "./types/board";

export class Board {
    public url: string;

    constructor(url: string) {
        this.url = url;
    }

    async addMember(token: string, boardid: string, userid: string, isAdmin = false, isNoComments = false, isCommentOnly = false, isWorker = false): Promise<IAddMember> {
        return axios({
            url: [this.url, "/api/boards/", boardid, "/members/", userid, "/add"].join(""),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": ["Bearer", token].join(" ")
            },
            data: {
                action: "add",
                isAdmin: isAdmin,
                isNoComments,
                isCommentOnly,
                isWorker
            }
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan userRegister error");
            throw err;
        });
    }

    async addMemberAdmin(token: string, boardid: string, userid: string): Promise<IAddMember> {
        return this.addMember(token, boardid, userid, true, false, false, false);
    }

    async addMemberNormal(token: string, boardid: string, userid: string): Promise<IAddMember> {
        return this.addMember(token, boardid, userid, false, false, false, false);
    }

    async addMemberNoComments(token: string, boardid: string, userid: string): Promise<IAddMember> {
        return this.addMember(token, boardid, userid, false, true, false, false);
    }

    async addMemberCommentOnly(token: string, boardid: string, userid: string): Promise<IAddMember> {
        return this.addMember(token, boardid, userid, false, false, true, false);
    }

    async addMemberWorker(token: string, boardid: string, userid: string): Promise<IAddMember> {
        return this.addMember(token, boardid, userid, false, false, true, true);
    }

    async rmMember(token: string, boardid: string, userid: string): Promise<IAddMember> {
        return axios({
            url: [this.url, "/api/boards/", boardid, "/members/", userid, "/add"].join(""),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": ["Bearer", token].join(" ")
            },
            data: {action: "remove"}
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan userRegister error");
            throw err;
        });
    }
}