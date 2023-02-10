import { Colors, PieceNames, PieceTypes } from "../_enums";
import { Piece } from "./Piece";

export class Rook extends Piece {
    readonly type: PieceTypes = PieceTypes.ROOK;
    readonly name: PieceNames = PieceNames.ROOK;
    readonly color: Colors;

    constructor(color: Colors) {
        super();
        this.color = color;
    }
}
