import { getPieceType } from "api/pieceInfo";
import { PieceTypes } from "types/Piece";

export const checkCastlingType = (
    selectedPiece: number,
    targetIndex: number,
    selectedIndex: number,
) => {
    return getPieceType(selectedPiece) === PieceTypes.KING &&
        Math.abs(targetIndex - selectedIndex) === 2
        ? true
        : false;
};
