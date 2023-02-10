import { Colors, PieceNames, PieceTypes } from "../_enums";
import { Piece } from "./Piece";

import iconWhite from "./../../assets/pixel/wP.png";
import iconBlack from "./../../assets/pixel/bP.png";

export class Pawn extends Piece {
    readonly type: PieceTypes = PieceTypes.PAWN;
    readonly name: PieceNames = PieceNames.PAWN;
    readonly color: Colors;
    icon: string;

    constructor(color: Colors) {
        super();
        this.color = color;
        this.icon = color === Colors.WHITE ? iconWhite : iconBlack;
    }
}
