import { getPseudoLegalMoves } from "entities/pseudoLegalMoves";
import { checkPseudoLegalMove } from "./model/checkPseudoLegalMove";

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
