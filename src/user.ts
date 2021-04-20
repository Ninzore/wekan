import axios from "axios";
import {IUserLogin, IUserRegister, IUserCreate, IUserDelete, IUserinfo, IWekanError, IUserBrif, IUserDisbale} from "./types/user";

export class User {
    public url: string;

    constructor(url: string) {
        this.url = url;
    }

    async register(username: string, email: string, password: string): Promise<IUserRegister> {
        return axios({
            url: [this.url, "/users/register"].join(""),
            method: "POST",
            headers: {"Content-Type": "application/json"},
            data: {username, email, password}
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan userRegister error");
            throw err;
        });
    }

    async login(username: string, password: string): Promise<IUserLogin> {
        return axios({ 
            url: [this.url, "/users/login"].join(""),
            method: "POST",
            headers: {"Content-Type": "application/json"},
            data: {username, password}
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan userLogin error");
            throw err;
        });
    }

    async loggedIn(token: string): Promise<IUserinfo> {
        return axios({
            url: [this.url, "/api/user"].join(""),
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": ["Bearer", token].join(" ")
            }
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan userLoggedIn error");
            throw err;
        });
    }

    async create(token: string, username: string, email: string, password: string): Promise<IUserCreate> {
        return axios({
            url: [this.url, "/api/users"].join(""),
            method: "POST",
            headers: {
                "Authorization": ["Bearer", token].join(" "),
                "Content-Type": "application/json"
            },
            data: {username, email, password}
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan userCreate error");
            throw err;
        });
    }

    async delete(token: string, uid: string): Promise<IUserDelete> {
        return axios({
            url: [this.url, "/api/users/", uid].join(""),
            method: "DELETE",
            headers: {"Authorization": ["Bearer", token].join(" ")},
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan userDelete error");
            throw err;
        });
    }

    async info(token: string, uid: string): Promise<IUserinfo> {
        return axios({
            url: [this.url, "/api/users/", uid].join(""),
            method: "GET",
            headers: {"Authorization": ["Bearer", token].join(" ")},
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan userInfo error");
            throw err;
        });
    }

    async list(token: string): Promise<Array<IUserBrif>> {
        return axios({
            url: [this.url, "/api/users"].join(""),
            method: "GET",
            headers: {"Authorization": ["Bearer", token].join(" ")}
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan userList error");
            throw err;
        });
    }

    async disable(token: string, uid: string): Promise<IUserDisbale> {
        return axios({
            url: [this.url, "/api/users/", uid].join(""),
            method: "PUT",
            headers: {"Authorization": ["Bearer", token].join(" ")},
            data: {action: "disableLogin"}
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan userDisable error");
            throw err;
        });
    }

    async enable(token: string, uid: string): Promise<IUserinfo> {
        return axios({
            url: [this.url, "/api/users/", uid].join(""),
            method: "PUT",
            headers: {"Authorization": ["Bearer", token].join(" ")},
            data: {action: "enableLogin"}
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan userEnable error");
            throw err;
        });
    }
}