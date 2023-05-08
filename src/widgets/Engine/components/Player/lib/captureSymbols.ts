import { PieceTypes } from "shared/enums";
import { getPieceType } from "shared/pieceInfo";

export const getCaptureSymbols = (relativeCaptures: number[]) => {
    return relativeCaptures.reduce((previousValue, currentValue) => {
        switch (getPieceType(currentValue)) {
            case PieceTypes.QUEEN:
                return previousValue + "♛ ";
            case PieceTypes.ROOK:
                return previousValue + "♜ ";
            case PieceTypes.KNIGHT:
                return previousValue + "♞ ";
            case PieceTypes.BISHOP:
                return previousValue + "♝ ";
            case PieceTypes.PAWN:
                return previousValue + "♟︎ ";
            default:
                alert("unknown piece type in getCaptureText");
                return previousValue + "";
        }
    }, "");
};
