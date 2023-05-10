import { getBoardAfterMove } from "entities/boardAfterMove";
import { getAllLegalMoves } from "features/legalMoves";
import { PieceColors } from "shared/enums";
import { minimax_ab } from "./search";

interface IEngineReturn {
    bestMove: number[] | null;
    bestEvaluation: number;
    searchCount: number;
}
export const getEngineData = async (
    board: IBoard,
    depth: number,
): Promise<IEngineReturn> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            window.searchCount = 0;
            const isWhiteActive = board.activeColor === PieceColors.WHITE;
            const allLegalMoves: number[][] = getAllLegalMoves(board);
            let bestEvaluation = 0;
            if (!allLegalMoves.length) {
                const colorConsideration = isWhiteActive ? -1 : 1;
                bestEvaluation = board.isCheck
                    ? colorConsideration * Infinity
                    : 0;
                resolve({
                    bestMove: null,
                    bestEvaluation: bestEvaluation,
                    searchCount: window.searchCount,
                });
            }
            let bestMove = allLegalMoves[0];

            let alpha = -Infinity;
            let beta = Infinity;

            for (let index in allLegalMoves) {
                const move = allLegalMoves[index];
                const newBoard = getBoardAfterMove(board, move);
                const newLegalMoves = getAllLegalMoves(newBoard);
                const evaluation = minimax_ab(
                    newBoard,
                    newLegalMoves,
                    depth,
                    alpha,
                    beta,
                );

                if (isWhiteActive && evaluation > alpha) {
                    bestEvaluation = evaluation;
                    alpha = evaluation;
                    bestMove = move;
                }
                if (!isWhiteActive && evaluation < beta) {
                    bestEvaluation = evaluation;
                    beta = evaluation;
                    bestMove = move;
                }
            }

            resolve({
                bestMove: bestMove,
                bestEvaluation: bestEvaluation,
                searchCount: window.searchCount,
            });
        });
    });
};
