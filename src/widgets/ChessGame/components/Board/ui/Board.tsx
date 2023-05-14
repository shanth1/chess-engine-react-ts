import { useEffect, useState } from "react";
import { Square } from "../components/Square";
import { updateLegalMoves } from "../model/updateLegalMoves";
import styles from "./styles.module.css";
import { getBoardView } from "../lib/boardView";
import { useAppDispatch, useAppSelector } from "shared/hooks";
import { PieceColors, PieceTypes } from "shared/enums";
import { getPieceColor, getPieceType } from "shared/pieceInfo";
import { ISquare } from "../types/interfaces";
import { makeMove } from "featuresComplex/makeMove";
import { updateBoard } from "entities/gameSlice";

export const Board: React.FC = () => {
    const dispatch = useAppDispatch();
    const board: IBoard = useAppSelector((state) => state.game.board);
    const colorView = useAppSelector((state) => state.player.colorView);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    updateLegalMoves(board, selectedIndex);
    let checkIndex: null | number = null;

    useEffect(() => {
        setSelectedIndex(null);
    }, [board]);

    if (board.isCheck) {
        const piecePositions =
            board.activeColor === PieceColors.WHITE
                ? board.whitePiecePositions
                : board.blackPiecePositions;
        piecePositions.forEach((index) => {
            if (getPieceType(board.position[index]) === PieceTypes.KING) {
                checkIndex = index;
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
    let renderIndex = 0;
    return (
        <div className={styles.board}>
            {boardView.map((square) => {
                const piece = board.position[square.index];
                square.isCheck = square.index === checkIndex;
                square.renderIndex = renderIndex;
                square.piece = piece;
                square.isFriendly = getPieceColor(piece) === board.activeColor;
                square.isSelected = selectedIndex === square.index;
                if (board.move) {
                    square.isStart = square.index === board.move[0];
                    square.isTarget = square.index === board.move[1];
                }
                renderIndex++;
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
