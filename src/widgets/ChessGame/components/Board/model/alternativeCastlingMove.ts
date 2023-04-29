import { PieceTypes } from "shared/enums";
import { getPieceType } from "shared/pieceInfo";
import { squares } from "./squares";

export const addAlternativeCastlingMoves = (
    selectedPiece: number,
    legalMoves: number[][],
) => {
    const pieceType = getPieceType(selectedPiece);
    if (pieceType !== PieceTypes.KING) return;
    legalMoves.forEach((legalMove) => {
        const [selectedIndex, targetIndex] = legalMove;
        if (targetIndex - selectedIndex === 2) {
            const kingSideRookIndex = selectedIndex + 3;
            squares[kingSideRookIndex].isLegal = true;
            squares[kingSideRookIndex].isAlternativeCastling = true;
        } else if (targetIndex - selectedIndex === -2) {
            const queenSideRookIndex = selectedIndex - 4;
            squares[queenSideRookIndex].isLegal = true;
            squares[queenSideRookIndex].isAlternativeCastling = true;
        }
    });
};
