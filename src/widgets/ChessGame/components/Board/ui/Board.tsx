import { useAppSelector } from "app/model";
import { useState } from "react";
import { getLegalMoves } from "widgets/ChessGame/model";
import { PieceColors } from "widgets/ChessGame/types/enums";
import { Square } from "../../Square";
import { squares } from "../model/squares";
import styles from "./styles.module.css";

const updateLegalMoves = (
    piecePlacement: Array<number>,
    selectedSquareIndex: number | null,
): void => {
    squares.forEach((square) => {
        square.isLegalToMove = false;
    });

    const legalMoves: Array<number> = getLegalMoves(
        piecePlacement,
        selectedSquareIndex,
    );

    legalMoves.forEach((index) => {
        squares[index].isLegalToMove = true;
    });
};

export const Board: React.FC = () => {
    const piecePlacement: Array<number> = useAppSelector(
        (state) => state.game.piecePlacement,
    );

    const colorView = useAppSelector((state) => state.player.colorView);

    const [selectedSquareIndex, setSelectedSquareIndex] = useState<
        number | null
    >(null);

    updateLegalMoves(piecePlacement, selectedSquareIndex);

    const boardView =
        colorView === PieceColors.WHITE ? squares : squares.slice().reverse();

    return (
        <div className={styles.board}>
            {boardView.map((square) => {
                square.pieceCode = piecePlacement[square.index];
                return (
                    <Square
                        key={square.index}
                        index={square.index}
                        color={square.color}
                        pieceCode={square.pieceCode}
                        isLegalToMove={square.isLegalToMove}
                        selectedSquareIndex={selectedSquareIndex}
                        setSelectedSquareIndex={setSelectedSquareIndex}
                    />
                );
            })}
        </div>
    );
};
