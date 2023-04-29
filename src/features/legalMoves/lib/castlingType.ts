import { getPieceType } from "shared/pieceInfo";
import { PieceTypes } from "shared/enums";

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
