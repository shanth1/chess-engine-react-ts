import { updateBoard } from "entities/gameSlice";
import { makeMove } from "featuresComplex/makeMove";
import { PieceColors } from "shared/enums";
import { useAppDispatch, useAppSelector } from "shared/hooks";
import { getEngineData } from "../model/engineData";
import { getEvaluation } from "../model/evaluation/evaluation";
import styles from "./styles.module.css";

let depthEvaluation = 0;
let evaluationNumber = 0;

export const Engine: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const board = useAppSelector((state) => state.game.board);
    const staticEvaluation = getEvaluation(board.position);
    // const playerColor = useAppSelector((state) => state.player.playerColor);
    const isEngineWhite = true;
    const isEngineBlack = true;

    const startEngine = (depth: number) => {
        const { bestMove, bestEvaluation, searchCount } = getEngineData(
            board,
            depth,
        );
        depthEvaluation = bestEvaluation;
        evaluationNumber = searchCount;
        if (!bestMove) return;
        const boardAfterMove = makeMove(board, bestMove[0], bestMove[1]);
        dispatch(updateBoard({ board: boardAfterMove }));
    };

    if (board.fullMoveNumber < 10) {
        if (board.activeColor === PieceColors.WHITE && isEngineWhite) {
            setTimeout(() => {
                startEngine(2);
            });
        } else if (board.activeColor === PieceColors.BLACK && isEngineBlack) {
            setTimeout(() => {
                startEngine(2);
            });
        }
    }
    return (
        <div className={styles.analysis}>
            <div>Static evaluation: {staticEvaluation.toFixed(1)}</div>
            <div>Depth evaluation: {depthEvaluation.toFixed(1)}</div>
            <div>Search count: {evaluationNumber}</div>
        </div>
    );
};
