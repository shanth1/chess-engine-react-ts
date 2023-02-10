import { Colors, PieceNames, PieceTypes } from "../_enums";
import { Piece } from "./Piece";

export class Knight extends Piece {
    readonly type: PieceTypes = PieceTypes.KNIGHT;
    readonly name: PieceNames = PieceNames.KNIGHT;
    readonly color: Colors;

    constructor(color: Colors) {
        super();
        this.color = color;
    }
}
