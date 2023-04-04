import { getLegalMoves } from "widgets/ChessGame/model/legalMoves/legalMoves";
import { addAlternativeCastlingMoves } from "./alternativeCastlingMove";
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

    addAlternativeCastlingMoves(
        piecePlacement,
        legalMoves,
        selectedSquareIndex,
    );

    legalMoves.forEach((index) => {
        squares[index].isLegalToMove = true;
    });
};
