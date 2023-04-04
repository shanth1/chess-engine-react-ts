import { getPieceType } from "widgets/ChessGame/lib/gettingPieceInfo/PieceType";
import { PieceTypes } from "widgets/ChessGame/types/enums";
import { squares } from "./squares";

export const addAlternativeCastlingMoves = (
    piecePlacement: Array<number>,
    legalMoves: Array<number>,
    selectedSquareIndex: number,
) => {
    if (getPieceType(piecePlacement[selectedSquareIndex]) === PieceTypes.KING) {
        legalMoves.forEach((legalMove) => {
            if (legalMove - selectedSquareIndex === 2) {
                const kingSideRookIndex = selectedSquareIndex + 3;
                squares[kingSideRookIndex].isLegalToMove = true;
            } else if (legalMove - selectedSquareIndex === -2) {
                const queenSideRookIndex = selectedSquareIndex - 4;
                squares[queenSideRookIndex].isLegalToMove = true;
            }
        });
    }
};
