import { getBoardAfterMove } from "entities/boardAfterMove";
import { getAllLegalMoves } from "features/legalMoves";
import { PieceColors } from "shared/enums";
import { minimax_ab } from "./search";

export const getBestMove = (board: IBoard): number[] | null => {
    window.searchCount = 0;
    const allLegalMoves: number[][] = getAllLegalMoves(board);
    if (!allLegalMoves.length) return null;

    let bestMove = allLegalMoves[0];
    const isWhiteActive = board.activeColor === PieceColors.WHITE;
    let alpha = -Infinity;
    let beta = Infinity;

    for (let index in allLegalMoves) {
        const move = allLegalMoves[index];
        const newBoard = getBoardAfterMove(board, move);
        const newLegalMoves = getAllLegalMoves(newBoard);
        const evaluation = minimax_ab(newBoard, newLegalMoves, 2, alpha, beta);

        if (isWhiteActive && evaluation > alpha) {
            alpha = evaluation;
            bestMove = move;
        }
        if (!isWhiteActive && evaluation < beta) {
            beta = evaluation;
            bestMove = move;
        }
    }

    console.log("search count:", window.searchCount);
    return bestMove;
};
