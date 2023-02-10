import { Colors, PieceNames, PieceTypes } from "../_enums";
import { Piece } from "./Piece";

import iconWhite from "./../../assets/pixel/wK.png";
import iconBlack from "./../../assets/pixel/bK.png";

export class King extends Piece {
    readonly type: PieceTypes = PieceTypes.KING;
    readonly name: PieceNames = PieceNames.KING;
    readonly color: Colors;
    icon: string;

    constructor(color: Colors) {
        super();
        this.color = color;
        this.icon = color === Colors.WHITE ? iconWhite : iconBlack;
    }
}
