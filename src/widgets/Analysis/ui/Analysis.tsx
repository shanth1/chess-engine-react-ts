import { updateBoard } from "entities/gameSlice";
import { makeMove } from "featuresComplex/makeMove";
import { PieceColors } from "shared/enums";
import { useAppDispatch, useAppSelector } from "shared/hooks";
import { getBestMove } from "../model/bestMove";
import styles from "./styles.module.css";
export const Analysis: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const board = useAppSelector((state) => state.game.board);

    // const playerColor = useAppSelector((state) => state.player.playerColor);
    const isEngineWhite = false;
    const isEngineBlack = true;

    if (board.fullMoveNumber < 10) {
        if (board.activeColor === PieceColors.WHITE && isEngineWhite) {
            setTimeout(() => {
                const bestMove = getBestMove(board);
                if (!bestMove) return;
                const boardAfterMove = makeMove(
                    board,
                    bestMove[0],
                    bestMove[1],
                );
                dispatch(updateBoard({ board: boardAfterMove }));
            });
        } else if (board.activeColor === PieceColors.BLACK && isEngineBlack) {
            setTimeout(() => {
                const bestMove = getBestMove(board);
                if (!bestMove) return;
                const boardAfterMove = makeMove(
                    board,
                    bestMove[0],
                    bestMove[1],
                );
                dispatch(updateBoard({ board: boardAfterMove }));
            });
        }
    }

    return <div className={styles.analysis}>Analysis</div>;
};
