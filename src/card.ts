import axios from "axios";
import {ICardinfo, ICardId} from "./types/card";

export class Card {
    public url: string;

    constructor(url: string) {
        this.url = url;
    }

    async retrive(token: string, boardId: string, swimlaneId: string): Promise<ICardinfo> {
        return axios({
            url: [this.url, "api" ,"boards", boardId, "swimlanes", swimlaneId, "cards"].join("/"),
            method: "GET",
            headers: {"Authorization": ["Bearer", token].join(" ")}
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan retrive card error");
            throw err;
        });
    }

    async add(token: string, boardId: string, listId: string, title: string, description = "", authorId: string, swimlaneId: string): Promise<ICardId> {
        return axios({
            url: [this.url, "api" ,"boards", boardId, "lists", listId, "cards"].join("/"),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": ["Bearer", token].join(" ")
            },
            data: {title, description, authorId, swimlaneId}
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan add card error");
            throw err;
        });
    }

    async update(token: string, cardId: string, boardId: string, fromListId: string, toListId: string, title: string, description = ""): Promise<ICardId> {
        return axios({
            url: [this.url, "api" ,"boards", boardId, "lists", fromListId, "cards", cardId].join("/"),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": ["Bearer", token].join(" ")
            },
            data: {title, toListId, description}
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan update card error");
            throw err;
        });
    }

    async delete(token: string, boardId: string, listId: string, cardId: string, authorId: string): Promise<ICardId> {
        return axios({
            url: [this.url, "api" ,"boards", boardId, "lists", listId, "cards", cardId].join("/"),
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": ["Bearer", token].join(" ")
            },
            data: {authorId}
        }).then(res => {
            return res.data;
        }).catch(err => {
            console.error("Wekan delete card error");
            throw err;
        });
    }
}