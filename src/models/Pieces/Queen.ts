import { Colors, PieceNames, PieceTypes } from "../_enums";
import { Piece } from "./Piece";

import iconWhite from "./../../assets/pixel/wQ.png";
import iconBlack from "./../../assets/pixel/bQ.png";

export class Queen extends Piece {
    readonly type: PieceTypes = PieceTypes.QUEEN;
    readonly name: PieceNames = PieceNames.QUEEN;
    readonly color: Colors;
    icon: string;

    constructor(color: Colors) {
        super();
        this.color = color;
        this.icon = color === Colors.WHITE ? iconWhite : iconBlack;
    }
}
