import { getLegalMoves } from "entities/legalMoves";
import { makeMove } from "entities/movement";
import styles from "./styles.module.css";
import { getPieceColor } from "shared/pieceInfo";
import { useAppDispatch, useAppSelector } from "shared/hooks";

export const Analysis: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const piecePlacement: Array<number> = useAppSelector(
        (state) => state.fen.piecePlacement,
    );
    const castlingRights = useAppSelector((state) => state.fen.castlingRights);
    const enPassant = useAppSelector((state) => state.fen.enPassant);
    const playerColor: number = useAppSelector(
        (state) => state.player.playerColor,
    );
    const activeColor: number = useAppSelector(
        (state) => state.fen.activeColor,
    );

    const legalMoves: number[][] = [];

    if (activeColor !== playerColor) {
        for (
            let selectedIndex = 0;
            selectedIndex < piecePlacement.length;
            selectedIndex++
        ) {
            const piece = piecePlacement[selectedIndex];
            if (!piece) continue;
            if (getPieceColor(piece) === playerColor) continue;
            const legalMovesForPiece: number[][] = getLegalMoves(
                piecePlacement,
                selectedIndex,
                castlingRights,
                enPassant,
            );

            legalMoves.push(...legalMovesForPiece);
        }
        if (legalMoves.length !== 0) {
            const randomMove =
                legalMoves[Math.floor(Math.random() * legalMoves.length)];
            const selectedIndex: number = randomMove[0];
            const targetIndex: number = randomMove[1];
            makeMove(
                dispatch,
                piecePlacement,
                selectedIndex,
                targetIndex,
                activeColor,
            );
        }
    }

    return <div className={styles.analysis}>Analysis</div>;
};
