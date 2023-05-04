import { updateBoard } from "entities/gameSlice";
import { makeMove } from "featuresComplex/makeMove";
import { useAppDispatch, useAppSelector } from "shared/hooks";
import { getBestMove } from "../model/bestMove";
import styles from "./styles.module.css";
export const Analysis: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const board = useAppSelector((state) => state.game.board);
    const playerColor = useAppSelector((state) => state.player.playerColor);

    if (board.activeColor !== playerColor) {
        setTimeout(() => {
            const bestMove = getBestMove(board);
            if (!bestMove) return;
            const boardAfterMove = makeMove(board, bestMove[0], bestMove[1]);
            dispatch(updateBoard({ board: boardAfterMove }));
        });
    }

    return <div className={styles.analysis}>Analysis</div>;
};
