import { getPieceColor, getPieceType } from "shared/pieceInfo";
import { PieceTypes } from "shared/types";

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
