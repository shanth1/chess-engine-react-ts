import { getPieceType, PieceTypes } from "api/pieceInfo";
import { squares } from "./squares";

export const addAlternativeCastlingMoves = (
    piecePlacement: Array<number>,
    legalMoves: Array<number>,
    selectedIndex: number,
) => {
    if (getPieceType(piecePlacement[selectedIndex]) === PieceTypes.KING) {
        legalMoves.forEach((legalMove) => {
            if (legalMove - selectedIndex === 2) {
                const kingSideRookIndex = selectedIndex + 3;
                squares[kingSideRookIndex].isLegalToMove = true;
            } else if (legalMove - selectedIndex === -2) {
                const queenSideRookIndex = selectedIndex - 4;
                squares[queenSideRookIndex].isLegalToMove = true;
            }
        });
    }
};
