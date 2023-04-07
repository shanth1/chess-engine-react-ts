import { getLegalMoves } from "api/legalMoves";
import { getPieceColor } from "api/lib/gettingPieceInfo/PieceColor";
import { makeMove } from "api/model";
import { AppDispatch, useAppDispatch, useAppSelector } from "app";
import styles from "./styles.module.css";

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

    const legalMoves: Array<Array<number>> = [];

    if (activeColor !== playerColor) {
        for (
            let selectedIndex = 0;
            selectedIndex < piecePlacement.length;
            selectedIndex++
        ) {
            const piece = piecePlacement[selectedIndex];
            if (!piece) continue;
            if (getPieceColor(piece) === playerColor) continue;
            const targetsForSelected: Array<number> = getLegalMoves(
                piecePlacement,
                selectedIndex,
                castlingRights,
                enPassant,
            );

            targetsForSelected.forEach((targetIndex) => {
                legalMoves.push([selectedIndex, targetIndex]);
            });
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
