import { PieceTypes } from "shared/enums";
import { getPieceType } from "shared/pieceInfo";

export const getPieceName = (piece: number) => {
    let name: string = "";
    switch (getPieceType(piece)) {
        case PieceTypes.KING:
            name = "♔";
            break;
        case PieceTypes.QUEEN:
            name = "♕";
            break;
        case PieceTypes.ROOK:
            name = "♖";
            break;
        case PieceTypes.KNIGHT:
            name = "♘";
            break;
        case PieceTypes.BISHOP:
            name = "♗";
            break;
        default:
            break;
    }
    return name;
};
