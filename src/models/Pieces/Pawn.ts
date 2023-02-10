import { Colors, PieceNames, PieceTypes } from "../_enums";
import { Piece } from "./Piece";

export class Pawn extends Piece {
    readonly type: PieceTypes = PieceTypes.PAWN;
    readonly name: PieceNames = PieceNames.PAWN;
    readonly color: Colors;

    constructor(color: Colors) {
        super();
        this.color = color;
    }
}
