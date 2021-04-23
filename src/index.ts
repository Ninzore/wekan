import {User} from "./user";
import {Board} from "./board";
import {Swimlane} from "./swimlane";
import {List} from "./list";
import {Card} from "./card";

export class Wekan {
    public url:string;
    public user: User;
    public board: Board;
    public swimline: Swimlane;
    public list: List;
    public card: Card;

    constructor(url: string) {
        this.url = url;
        this.user = new User(url);
        this.board = new Board(url);
        this.swimline = new Swimlane(url);
        this.list = new List(url);
        this.card = new Card(url);
    }
}