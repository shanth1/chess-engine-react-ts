import { IBoard } from "pages/GamePage/board";
import { checkPseudoLegalMove } from "./lib/checkPseudoLegalMove";
import { getPseudoLegalMoves } from "./model/pseudoLegalMoves/pseudoLegalMoves";

export const getLegalMoves = (
    board: IBoard,
    selectedIndex: number,
): number[][] => {
    const legalMoves: number[][] = [];

    const pseudoLegalMoves: number[][] = getPseudoLegalMoves(
        board,
        selectedIndex,
    );

    for (let moveIndex in pseudoLegalMoves) {
        const pseudoLegalMove: number[] = pseudoLegalMoves[moveIndex];

        if (checkPseudoLegalMove(board, pseudoLegalMove, legalMoves)) {
            legalMoves.push(pseudoLegalMove);
        }
    }

    return legalMoves;
};
