import { getLegalMoves } from "features/legalMoves";
import { addAlternativeCastlingMoves } from "./alternativeCastlingMove";
import { squares } from "./squares";

export const updateLegalMoves = (
    selectedIndex: number | null,
    board: IBoard,
): void => {
    squares.forEach((square) => {
        square.isLegal = false;
    });

    if (selectedIndex === null) return;

    const legalMoves: number[][] = getLegalMoves(board, selectedIndex);

    addAlternativeCastlingMoves(board.position[selectedIndex], legalMoves);

    legalMoves.forEach((move) => {
        squares[move[1]].isLegal = true;
    });
};
