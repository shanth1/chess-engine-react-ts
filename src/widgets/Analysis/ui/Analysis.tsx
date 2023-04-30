import { getLegalMoves } from "features/legalMoves";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "shared/hooks";
import { PieceColors } from "shared/enums";
import { makeMove } from "featuresComplex/makeMove";
import { updateBoard } from "entities/gameSlice";
import { getEvaluation } from "features/evaluation";
import { getBoardAfterMove } from "entities/boardAfterMove";

export const Analysis: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const board: IBoard = useAppSelector((state) => state.game.board);
    const playerColor = useAppSelector((state) => state.player.playerColor);

    if (board.activeColor !== playerColor) {
        const allLegalMoves: number[][] = getAllLegalMoves(
            board,
            board.activeColor,
        );

        if (allLegalMoves.length !== 0) {
            let bestMove = allLegalMoves[0];
            let bestEvaluation = -1000;
            for (let index in allLegalMoves) {
                const move = allLegalMoves[index];
                const newBoard = getBoardAfterMove(board, move);
                const newLegalMoves = getAllLegalMoves(
                    newBoard,
                    PieceColors.WHITE,
                );
                const evaluation = -search(newBoard, newLegalMoves, 2);
                if (evaluation > bestEvaluation) {
                    bestEvaluation = evaluation;
                    bestMove = move;
                }
            }
            const selectedIndex: number = bestMove[0];
            const targetIndex: number = bestMove[1];
            const boardAfterMove = makeMove(board, selectedIndex, targetIndex);
            dispatch(updateBoard({ board: boardAfterMove }));
        }
    }

    return <div className={styles.analysis}>Analysis</div>;
};

const getAllLegalMoves = (
    board: IBoard,
    color: PieceColors,
): Array<number[]> => {
    const allLegalMoves: Array<number[]> = [];
    const pieces =
        color === PieceColors.WHITE
            ? board.whitePiecePositions
            : board.blackPiecePositions;

    pieces.forEach((pieceIndex) => {
        allLegalMoves.push(...getLegalMoves(board, pieceIndex));
    });
    return allLegalMoves;
};

const search = (
    board: IBoard,
    legalMoves: number[][],
    depth: number,
): number => {
    if (depth === 0) {
        return getEvaluation(board.position);
    }

    let bestEvaluation = -1000;
    for (let index in legalMoves) {
        const move = legalMoves[index];
        const newBoard = getBoardAfterMove(board, move);
        const newLegalMoves = getAllLegalMoves(newBoard, newBoard.activeColor);
        const evaluation = search(newBoard, newLegalMoves, depth - 1);
        bestEvaluation = Math.max(evaluation, bestEvaluation);
    }
    return bestEvaluation;
};
