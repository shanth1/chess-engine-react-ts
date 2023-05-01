import { useState } from "react";
import { Square } from "../components/Square";
import { updateLegalMoves } from "../model/updateLegalMoves";
import styles from "./styles.module.css";
import { getBoardView } from "../lib/boardView";
import { useAppDispatch, useAppSelector } from "shared/hooks";
import { PieceColors } from "shared/enums";
import { getPieceColor } from "shared/pieceInfo";
import { ISquare } from "../types/interfaces";
import { makeMove } from "featuresComplex/makeMove";
import { updateBoard } from "entities/gameSlice";
import { getAllLegalMoves } from "features/legalMoves";
import { getBestMove } from "featuresComplex/engine";

export const Board: React.FC = () => {
    const dispatch = useAppDispatch();
    const board: IBoard = useAppSelector((state) => state.game.board);
    const playerColor = useAppSelector((state) => state.player.playerColor);
    const colorView = useAppSelector((state) => state.player.colorView);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    updateLegalMoves(board, selectedIndex);

    if (board.activeColor !== playerColor) {
        setTimeout(() => {
            const allLegalMoves: number[][] = getAllLegalMoves(
                board,
                board.activeColor,
            );

            if (allLegalMoves.length !== 0) {
                const bestMove = getBestMove(board, allLegalMoves);
                const selectedIndex: number = bestMove[0];
                const targetIndex: number = bestMove[1];
                const boardAfterMove = makeMove(
                    board,
                    selectedIndex,
                    targetIndex,
                );
                dispatch(updateBoard({ board: boardAfterMove }));
            }
        });
    }

    const resolveSquareClick = (square: ISquare) => {
        const {
            index,
            isLegal,
            isSelected,
            isAlternativeCastling,
            piece,
        }: ISquare = square;
        const pieceColor: PieceColors = getPieceColor(piece);
        const isPlayerTurn: boolean = board.activeColor === pieceColor;
        if (!isPlayerTurn && !isLegal) return;
        setSelectedIndex(isSelected || isLegal ? null : index);

        if (!isLegal || selectedIndex === null) return;
        let targetIndex = index;
        if (isAlternativeCastling) {
            targetIndex = index % 8 === 7 ? index - 1 : index + 2;
        }
        const boardAfterMove = makeMove(board, selectedIndex, targetIndex);
        dispatch(updateBoard({ board: boardAfterMove }));
    };

    const boardView = getBoardView(colorView);
    return (
        <div className={styles.board}>
            {boardView.map((square) => {
                square.piece = board.position[square.index];
                square.isSelected = selectedIndex === square.index;
                return (
                    <Square
                        key={square.index}
                        square={square}
                        resolveSquareClick={resolveSquareClick}
                    />
                );
            })}
        </div>
    );
};
