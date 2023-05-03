import { getBoardAfterMove } from "entities/boardAfterMove";
import { getAllLegalMoves } from "features/legalMoves";
import { PieceColors } from "shared/enums";
import { minimax_ab } from "./model/search";

export const getBestMove = (
    board: IBoard,
    allLegalMoves: Array<number[]>,
): number[] => {
    window.searchCount = 0;

    let bestMove = allLegalMoves[0];
    const bestEvaluation = Infinity;
    let beta = bestEvaluation;
    for (let index in allLegalMoves) {
        const move = allLegalMoves[index];
        const newBoard = getBoardAfterMove(board, move);
        const newLegalMoves = getAllLegalMoves(newBoard, PieceColors.WHITE);
        const evaluation = minimax_ab(
            newBoard,
            newLegalMoves,
            2,
            -Infinity,
            beta,
        );
        if (evaluation < beta) {
            beta = evaluation;
            bestMove = move;
        }
    }
    console.log("search count:", window.searchCount);
    return bestMove;
};
