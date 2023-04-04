import { getLegalMoves } from "widgets/ChessGame/model/legalMoves/legalMoves";
import { addAlternativeCastlingMoves } from "./alternativeCastlingMove";
import { squares } from "./squares";

export const updateLegalMoves = (
    piecePlacement: Array<number>,
    selectedIndex: number | null,
    castlingRights: number,
    enPassant: string,
): void => {
    squares.forEach((square) => {
        square.isLegalToMove = false;
    });

    if (selectedIndex === null) return;

    const legalMoves: Array<number> = getLegalMoves(
        piecePlacement,
        selectedIndex,
        castlingRights,
        enPassant,
    );

    addAlternativeCastlingMoves(piecePlacement, legalMoves, selectedIndex);

    legalMoves.forEach((index) => {
        squares[index].isLegalToMove = true;
    });
};
