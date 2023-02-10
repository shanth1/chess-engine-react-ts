import { Colors, PieceNames, PieceTypes } from "./../_enums";
import { Piece } from "./Piece";

export class Bishop extends Piece {
    readonly type: PieceTypes = PieceTypes.BISHOP;
    readonly name: PieceNames = PieceNames.BISHOP;
    readonly color: Colors;

    constructor(color: Colors) {
        super();
        this.color = color;
    }
}
