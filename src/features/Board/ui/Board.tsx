import { useState } from "react";
import { Square } from "../components/Square";
import { updateLegalMoves } from "../model/updateLegalMoves";
import styles from "./styles.module.css";
import { getBoardView } from "../lib/boardView";
import { useAppDispatch, useAppSelector } from "shared/hooks";
import { IBoardProps, ISquare } from "../types/interfaces";
import { makeMove } from "entities/movement";
import { PieceColors } from "shared/enums";
import { getPieceColor } from "shared/pieceInfo";

export const Board: React.FC<IBoardProps> = ({ game }) => {
    const dispatch = useAppDispatch();
    game.board = {
        position: useAppSelector((state) => state.fen.piecePlacement),
        castlingRights: useAppSelector((state) => state.fen.castlingRights),
        enPassant: useAppSelector((state) => state.fen.enPassant),
        halfMoveClock: 0,
        fullMoveNumber: 0,
        activeColor: useAppSelector((state) => state.fen.activeColor),
    };
    const colorView = useAppSelector((state) => state.player.colorView);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    updateLegalMoves(selectedIndex, game.board);

    const resolveSquareClick = (square: ISquare) => {
        const { index, isLegal, isSelected, piece }: ISquare = square;
        const position = game.board.position;
        const pieceColor: PieceColors = getPieceColor(piece);
        const isPlayerTurn: boolean = game.board.activeColor === pieceColor;

        if (!isPlayerTurn && !isLegal) return;
        setSelectedIndex(isSelected || isLegal ? null : index);

        if (!isLegal || selectedIndex === null) return;
        makeMove(dispatch, position, selectedIndex, index);
    };

    const boardView = getBoardView(colorView);
    return (
        <div className={styles.board}>
            {boardView.map((square) => {
                square.piece = game.board.position[square.index];
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
