import { getBoardAfterMove } from "entities/boardAfterMove";
import { getEvaluation } from "featuresComplex/engine/model/evaluation";
import { getAllLegalMoves } from "features/legalMoves";
import { PieceColors } from "shared/enums";

export const minimax_ab = (
    board: IBoard,
    legalMoves: number[][],
    depth: number,
    alpha: number,
    beta: number,
): number => {
    if (depth === 0) {
        window.searchCount += 1;
        return getEvaluation(board.position);
    }

    if (board.activeColor === PieceColors.WHITE) {
        let bestEvaluation = -Infinity;
        for (let index in legalMoves) {
            const move = legalMoves[index];
            const newBoard = getBoardAfterMove(board, move);
            const newLegalMoves = getAllLegalMoves(
                newBoard,
                newBoard.activeColor,
            );
            const evaluation = minimax_ab(
                newBoard,
                newLegalMoves,
                depth - 1,
                alpha,
                beta,
            );
            bestEvaluation = Math.max(evaluation, bestEvaluation);
            alpha = Math.max(alpha, evaluation);
            if (beta <= alpha) break;
        }
        return bestEvaluation;
    } else {
        let bestEvaluation = Infinity;
        for (let index in legalMoves) {
            const move = legalMoves[index];
            const newBoard = getBoardAfterMove(board, move);
            const newLegalMoves = getAllLegalMoves(
                newBoard,
                newBoard.activeColor,
            );
            const evaluation = minimax_ab(
                newBoard,
                newLegalMoves,
                depth - 1,
                alpha,
                beta,
            );
            bestEvaluation = Math.min(evaluation, bestEvaluation);
            beta = Math.min(beta, evaluation);
            if (beta <= alpha) break;
        }
        return bestEvaluation;
    }
};
