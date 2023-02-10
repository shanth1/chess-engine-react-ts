import { Colors, PieceNames, PieceTypes } from "../_enums";
import { Piece } from "./Piece";

import iconWhite from "./../../assets/pixel/wN.png";
import iconBlack from "./../../assets/pixel/bN.png";

export class Knight extends Piece {
    readonly type: PieceTypes = PieceTypes.KNIGHT;
    readonly name: PieceNames = PieceNames.KNIGHT;
    readonly color: Colors;
    icon: string;

    constructor(color: Colors) {
        super();
        this.color = color;
        this.icon = color === Colors.WHITE ? iconWhite : iconBlack;
    }
}
