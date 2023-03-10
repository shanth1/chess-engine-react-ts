import { useAppDispatch, useAppSelector } from "app/model";
import { useState } from "react";
import { moveFigure } from "widgets/ChessGame/model";
import { PieceCodes } from "widgets/ChessGame/types/enums";
import { ISquare } from "widgets/ChessGame/types/interfaces";
import { Square } from "../../Square";
import { squares } from "../lib/squares";
import { getAvailableSquares } from "../model/availableSquares";
import styles from "./styles.module.css";

export const Board: React.FC = () => {
    const piecePlacement: Array<PieceCodes> = useAppSelector(
        (state) => state.game.piecePlacement,
    );

    const dispatch = useAppDispatch();

    const [selectedSquare, setSelectedSquare] = useState<ISquare | null>(null);

    const selectStartSquare = (selectedSquareIndex: number) => {
        getAvailableSquares(squares, squares[selectedSquareIndex]);
        setSelectedSquare(squares[selectedSquareIndex]);
    };

    const selectTargetSquare = (selectedSquareIndex: number) => {
        console.log(
            selectedSquare?.name,
            "to",
            squares[selectedSquareIndex].name,
        );

        if (selectedSquare) {
            dispatch(
                moveFigure({
                    startIndex: selectedSquare.index,
                    targetIndex: selectedSquareIndex,
                }),
            );
        }

        unselectSquare();
    };

    const unselectSquare = () => {
        setSelectedSquare(null);
        getAvailableSquares(squares, null);
    };

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
                        selectedSquare={selectedSquare}
                        isAvailable={square.isAvailable}
                        selectStartSquare={selectStartSquare}
                        selectTargetSquare={selectTargetSquare}
                        unselectSquare={unselectSquare}
                    />
                );
            })}
        </div>
    );
};
