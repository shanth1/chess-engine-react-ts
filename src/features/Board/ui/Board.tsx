import { useState } from "react";
import { Square } from "../components/Square";
import { updateLegalMoves } from "../model/updateLegalMoves";
import styles from "./styles.module.css";
import { getBoardView } from "../lib/boardView";
import { useAppSelector } from "shared/hooks";

export const Board: React.FC = () => {
    const piecePlacement: Array<number> = useAppSelector(
        (state) => state.fen.piecePlacement,
    );
    const castlingRights = useAppSelector((state) => state.fen.castlingRights);
    const colorView = useAppSelector((state) => state.player.colorView);
    const enPassant = useAppSelector((state) => state.fen.enPassant);

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    updateLegalMoves(piecePlacement, selectedIndex, castlingRights, enPassant);

    const boardView = getBoardView(colorView);
    return (
        <div className={styles.board}>
            {boardView.map((square) => {
                square.pieceCode = piecePlacement[square.index];
                return (
                    <Square
                        key={square.index}
                        square={square}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                        piecePlacement={piecePlacement}
                    />
                );
            })}
        </div>
    );
};
