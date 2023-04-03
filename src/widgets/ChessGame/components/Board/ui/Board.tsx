import { useAppSelector } from "app/model";
import { useState } from "react";
import { getPieceType } from "widgets/ChessGame/lib/gettingPieceInfo/PieceType";
import { getLegalMoves } from "widgets/ChessGame/model/legalMoves/legalMoves";
import { PieceColors, PieceTypes } from "widgets/ChessGame/types/enums";
import { Square } from "../../Square";
import { squares } from "../model/squares";
import styles from "./styles.module.css";

const updateLegalMoves = (
    piecePlacement: Array<number>,
    selectedSquareIndex: number | null,
    castlingRights: number,
    enPassant: string,
): void => {
    squares.forEach((square) => {
        square.isLegalToMove = false;
    });

    if (selectedSquareIndex === null) return;

    const legalMoves: Array<number> = getLegalMoves(
        piecePlacement,
        selectedSquareIndex,
        castlingRights,
        enPassant,
    );

    if (getPieceType(piecePlacement[selectedSquareIndex]) === PieceTypes.KING) {
        legalMoves.forEach((legalMove) => {
            if (legalMove - selectedSquareIndex === 2) {
                const kingSideRookIndex = selectedSquareIndex + 3;
                squares[kingSideRookIndex].isLegalToMove = true;
            } else if (legalMove - selectedSquareIndex === -2) {
                const queenSideRookIndex = selectedSquareIndex - 4;
                squares[queenSideRookIndex].isLegalToMove = true;
            }
        });
    }

    legalMoves.forEach((index) => {
        squares[index].isLegalToMove = true;
    });
};

export const Board: React.FC = () => {
    const piecePlacement: Array<number> = useAppSelector(
        (state) => state.fen.piecePlacement,
    );
    const castlingRights = useAppSelector((state) => state.fen.castlingRights);
    const colorView = useAppSelector((state) => state.player.colorView);
    const enPassant = useAppSelector((state) => state.fen.enPassant);

    const [selectedSquareIndex, setSelectedSquareIndex] = useState<
        number | null
    >(null);

    updateLegalMoves(
        piecePlacement,
        selectedSquareIndex,
        castlingRights,
        enPassant,
    );

    const boardView =
        colorView === PieceColors.WHITE ? squares : squares.slice().reverse();

    return (
        <div className={styles.board}>
            {boardView.map((square) => {
                square.pieceCode = piecePlacement[square.index];
                return (
                    <Square
                        key={square.index}
                        square={square}
                        selectedSquareIndex={selectedSquareIndex}
                        setSelectedSquareIndex={setSelectedSquareIndex}
                    />
                );
            })}
        </div>
    );
};
