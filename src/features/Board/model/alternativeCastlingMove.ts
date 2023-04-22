import { getPieceType } from "shared/pieceInfo";
import { PieceTypes } from "shared/enums";
import { squares } from "./squares";

export const addAlternativeCastlingMoves = (
    piecePlacement: Array<number>,
    legalMoves: number[][],
    selectedIndex: number,
) => {
    if (getPieceType(piecePlacement[selectedIndex]) === PieceTypes.KING) {
        legalMoves.forEach((legalMove) => {
            const [selectedIndex, targetIndex] = legalMove;
            if (targetIndex - selectedIndex === 2) {
                const kingSideRookIndex = selectedIndex + 3;
                squares[kingSideRookIndex].isLegalToMove = true;
            } else if (targetIndex - selectedIndex === -2) {
                const queenSideRookIndex = selectedIndex - 4;
                squares[queenSideRookIndex].isLegalToMove = true;
            }
        });
    }
};
