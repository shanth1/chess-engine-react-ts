import { useAppSelector } from "app/model";
import { useState } from "react";
import { getLegalMoves } from "widgets/ChessGame/model";
import { PieceCodes } from "widgets/ChessGame/types/enums";
import { Index } from "widgets/ChessGame/types/types";
import { Square } from "../../Square";
import { squares } from "../lib/squares";
import styles from "./styles.module.css";

const updateLegalMoves = (
    piecePlacement: Array<PieceCodes>,
    selectedSquareIndex: Index | null,
): void => {
    squares.forEach((square) => {
        square.isLegalToMove = false;
    });

    const legalMoves: Array<Index> = getLegalMoves(
        piecePlacement,
        selectedSquareIndex,
    );

    legalMoves.forEach((index) => {
        squares[index].isLegalToMove = true;
    });
};

export const Board: React.FC = () => {
    const piecePlacement: Array<PieceCodes> = useAppSelector(
        (state) => state.game.piecePlacement,
    );
    const [selectedSquareIndex, setSelectedSquareIndex] =
        useState<Index | null>(null);

    updateLegalMoves(piecePlacement, selectedSquareIndex);

    return (
        <div className={styles.board}>
            {squares.map((square, index) => {
                square.pieceCode = piecePlacement[index];
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
