import { getLegalMoves } from "entities/legalMoves";
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

    const legalMoves: number[][] = getLegalMoves(
        piecePlacement,
        selectedIndex,
        castlingRights,
        enPassant,
    );

    addAlternativeCastlingMoves(piecePlacement, legalMoves, selectedIndex);

    legalMoves.forEach((move) => {
        squares[move[1]].isLegalToMove = true;
    });
};
