import { getPieceColor, getPieceType } from "api/pieceInfo";
import { PieceTypes } from "types/Piece";

export const getTargetIndex = (
    piecePlacement: Array<number>,
    index: number,
    activeColor: number,
): number => {
    let targetIndex = index;

    if (
        getPieceType(piecePlacement[index]) === PieceTypes.ROOK &&
        getPieceColor(piecePlacement[index]) === activeColor
    ) {
        targetIndex = index % 8 === 7 ? index - 1 : index + 2;
    }
    return targetIndex;
};
