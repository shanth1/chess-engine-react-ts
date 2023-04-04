import { useAppSelector } from "app/model";
import { useState } from "react";
import { PieceColors } from "widgets/ChessGame/types/enums";
import { Square } from "../../Square";
import { updateLegalMoves } from "../model/updateLegalMoves";
import { squares } from "../model/squares";
import styles from "./styles.module.css";

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
