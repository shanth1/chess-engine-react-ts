import { useState } from "react";
import { Square } from "../components/Square";
import { updateLegalMoves } from "../model/updateLegalMoves";
import styles from "./styles.module.css";
import { getBoardView } from "../lib/boardView";
import { useAppDispatch, useAppSelector } from "shared/hooks";
import { ISquare } from "../types/interfaces";
import { makeMove } from "entities/movement";
import { PieceColors } from "shared/enums";
import { getPieceColor } from "shared/pieceInfo";
import { IBoard, updateBoard } from "pages/GamePage/model/gameSlice";

export const Board: React.FC = () => {
    const dispatch = useAppDispatch();
    const board: IBoard = useAppSelector((state) => state.game.board);
    const colorView = useAppSelector((state) => state.player.colorView);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    updateLegalMoves(selectedIndex, board);
    const resolveSquareClick = (square: ISquare) => {
        const { index, isLegal, isSelected, piece }: ISquare = square;
        const pieceColor: PieceColors = getPieceColor(piece);
        const isPlayerTurn: boolean = board.activeColor === pieceColor;
        if (!isPlayerTurn && !isLegal) return;
        setSelectedIndex(isSelected || isLegal ? null : index);

        if (!isLegal || selectedIndex === null) return;
        const boardAfterMove = makeMove(board, selectedIndex, index);
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
