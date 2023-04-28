import { getLegalMoves } from "entities/legalMoves";
import { makeMove } from "entities/movement";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "shared/hooks";
import { PieceColors } from "shared/enums";
import { IBoard, updateBoard } from "pages/GamePage/model/gameSlice";

export const Analysis: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const board: IBoard = useAppSelector((state) => state.game.board);
    const playerColor = useAppSelector((state) => state.player.playerColor);
    const legalMoves: number[][] = [];
    if (board.activeColor !== playerColor) {
        if (board.activeColor === PieceColors.WHITE) {
            board.whitePiecePositions.forEach((pieceIndex) => {
                const legalMovesForPiece: number[][] = getLegalMoves(
                    board,
                    pieceIndex,
                );
                legalMoves.push(...legalMovesForPiece);
            });
        } else {
            board.blackPiecePositions.forEach((pieceIndex) => {
                const legalMovesForPiece: number[][] = getLegalMoves(
                    board,
                    pieceIndex,
                );
                legalMoves.push(...legalMovesForPiece);
            });
        }

        if (legalMoves.length !== 0) {
            const randomMove =
                legalMoves[Math.floor(Math.random() * legalMoves.length)];
            const selectedIndex: number = randomMove[0];
            const targetIndex: number = randomMove[1];
            const boardAfterMove = makeMove(board, selectedIndex, targetIndex);
            dispatch(updateBoard({ board: boardAfterMove }));
        } else {
            alert("checkmate");
        }
    }
    console.log(board.whitePiecePositions);
    console.log(board.blackPiecePositions);

    return <div className={styles.analysis}>Analysis</div>;
};
