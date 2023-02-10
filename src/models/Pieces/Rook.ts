import { Colors, PieceNames, PieceTypes } from "../_enums";
import { Piece } from "./Piece";

import iconWhite from "./../../assets/pixel/wR.png";
import iconBlack from "./../../assets/pixel/bR.png";

export class Rook extends Piece {
    readonly type: PieceTypes = PieceTypes.ROOK;
    readonly name: PieceNames = PieceNames.ROOK;
    readonly color: Colors;
    icon: string;

    constructor(color: Colors) {
        super();
        this.color = color;
        this.icon = color === Colors.WHITE ? iconWhite : iconBlack;
    }
}
