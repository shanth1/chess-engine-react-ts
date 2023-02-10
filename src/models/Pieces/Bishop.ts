import { Colors, PieceNames, PieceTypes } from "./../_enums";
import { Piece } from "./Piece";

import iconWhite from "./../../assets/pixel/wB.png";
import iconBlack from "./../../assets/pixel/bB.png";

export class Bishop extends Piece {
    readonly type: PieceTypes = PieceTypes.BISHOP;
    readonly name: PieceNames = PieceNames.BISHOP;
    readonly color: Colors;
    icon: string;

    constructor(color: Colors) {
        super();
        this.color = color;
        this.icon = color === Colors.WHITE ? iconWhite : iconBlack;
    }
}
