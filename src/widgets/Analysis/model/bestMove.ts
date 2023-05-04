import { getBoardAfterMove } from "entities/boardAfterMove";
import { getAllLegalMoves } from "features/legalMoves";
import { PieceColors } from "shared/enums";
import { minimax_ab } from "./search";

export const getBestMove = (board: IBoard): number[] | null => {
    window.searchCount = 0;

    const allLegalMoves: number[][] = getAllLegalMoves(
        board,
        board.activeColor,
    );

    if (!allLegalMoves.length) return null;

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
