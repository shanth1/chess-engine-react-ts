import { Colors, PieceNames, PieceTypes } from "../_enums";
import { Piece } from "./Piece";

export class King extends Piece {
    readonly type: PieceTypes = PieceTypes.KING;
    readonly name: PieceNames = PieceNames.KING;
    readonly color: Colors;

    constructor(color: Colors) {
        super();
        this.color = color;
    }
}
