import axios from "axios";
import {IListBrif, IListInfo, IAddList, IDelList} from "./types/list";

export class List {
    public url: string;
    public dbpath: string;

    constructor(url: string, dbpath = "mongodb://127.0.0.1:27017") {
        this.url = url;
        this.dbpath = dbpath;
    }

    async retriveAll(token: string, boardid: string): Promise<Array<IListBrif>> {
        return axios({
            url: [this.url, "api", "boards", boardid, "lists"].join("/"),
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": ["Bearer", token].join(" ")
            }
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan retriveAll list error");
            throw err;
        });
    }

    async retrive(token: string, boardid: string, listId: string): Promise<IListInfo> {
        return axios({
            url: [this.url, "api", "boards", boardid, "lists", listId].join("/"),
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": ["Bearer", token].join(" ")
            }
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan retrive card by list error");
            throw err;
        });
    }

    async add(token: string, boardid: string, title: string): Promise<IAddList> {
        return axios({
            url: [this.url, "api", "boards", boardid, "lists"].join("/"),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": ["Bearer", token].join(" ")
            },
            data: {title}
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan add list error");
            throw err;
        });
    }

    async delete(token: string, boardid: string, listId: string): Promise<IDelList> {
        return axios({
            url: [this.url, "api", "boards", boardid, "lists", listId].join("/"),
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": ["Bearer", token].join(" ")
            }
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan delete list error");
            throw err;
        });
    }
}