import axios from "axios";
import { IRetriveSwimlaneCard } from "./types/swimlane";

export class Swimlane {
    public url: string;

    constructor(url: string) {
        this.url = url;
    }

    async retriveBySwimlane(token: string, boardId: string, swimlaneId: string): Promise<IRetriveSwimlaneCard> {
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
}