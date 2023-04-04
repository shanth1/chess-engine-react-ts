import { getPieceType } from "widgets/ChessGame/lib/gettingPieceInfo/PieceType";
import { getLegalMoves } from "widgets/ChessGame/model/legalMoves/legalMoves";
import { PieceTypes } from "widgets/ChessGame/types/enums";
import { squares } from "./squares";

export const updateLegalMoves = (
    piecePlacement: Array<number>,
    selectedSquareIndex: number | null,
    castlingRights: number,
    enPassant: string,
): void => {
    squares.forEach((square) => {
        square.isLegalToMove = false;
    });

    if (selectedSquareIndex === null) return;

    const legalMoves: Array<number> = getLegalMoves(
        piecePlacement,
        selectedSquareIndex,
        castlingRights,
        enPassant,
    );

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

    legalMoves.forEach((index) => {
        squares[index].isLegalToMove = true;
    });
};
