import { PieceTypes } from "shared/enums";
import { squares } from "./squares";

export const addAlternativeCastlingMoves = (
    selectedPiece: number,
    legalMoves: number[][],
) => {
    if (selectedPiece !== PieceTypes.KING) return;
    legalMoves.forEach((legalMove) => {
        const [selectedIndex, targetIndex] = legalMove;
        if (targetIndex - selectedIndex === 2) {
            const kingSideRookIndex = selectedIndex + 3;
            squares[kingSideRookIndex].isLegal = true;
        } else if (targetIndex - selectedIndex === -2) {
            const queenSideRookIndex = selectedIndex - 4;
            squares[queenSideRookIndex].isLegal = true;
        }
    });
};
