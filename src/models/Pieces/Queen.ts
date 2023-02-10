import { Colors, PieceNames, PieceTypes } from "../_enums";
import { Piece } from "./Piece";

export class Queen extends Piece {
    readonly type: PieceTypes = PieceTypes.QUEEN;
    readonly name: PieceNames = PieceNames.QUEEN;
    readonly color: Colors;

    constructor(color: Colors) {
        super();
        this.color = color;
    }
}
