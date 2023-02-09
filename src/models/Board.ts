import { Square } from "./Square";

export class Board{
    readonly squares: Array<Square>

    constructor(squares: Array<Square>){
        this.squares = squares
    }
}