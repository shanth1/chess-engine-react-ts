import React from "react";
import { PieceColors, PieceTypes } from "shared/enums";
import { getPieceType } from "shared/pieceInfo";
import styles from "./styles.module.css";

const getRelativeCaptures = (
    playerCaptures: number[],
    enemyCaptures: number[],
): number[] => {
    const enemyCapturesCopy = enemyCaptures.slice();
    let relativeCaptures: number[] = [];
    playerCaptures.forEach((playerPiece) => {
        const index = enemyCapturesCopy
            .map((piece) => getPieceType(piece))
            .indexOf(getPieceType(playerPiece));

        if (index >= 0) {
            enemyCapturesCopy.splice(index, 1);
        } else {
            relativeCaptures.push(playerPiece);
        }
    });
    return relativeCaptures;
};

const getCaptureSymbols = (relativeCaptures: number[]) => {
    return relativeCaptures.reduce((previousValue, currentValue) => {
        switch (getPieceType(currentValue)) {
            case PieceTypes.QUEEN:
                return previousValue + "♛ ";
            case PieceTypes.ROOK:
                return previousValue + "♜ ";
            case PieceTypes.KNIGHT:
                return previousValue + "♞ ";
            case PieceTypes.BISHOP:
                return previousValue + "♝ ";
            case PieceTypes.PAWN:
                return previousValue + "♟︎ ";
            default:
                alert("unknown piece type in getCaptureText");
                return previousValue + "";
        }
    }, "");
};

interface IPlayerProps {
    enemyCaptures: number[];
    playerCaptures: number[];
    materialAdvantage: number;
    color: number;
    isUp: boolean;
    name: string;
}

export const Player: React.FC<IPlayerProps> = ({
    name,
    color,
    isUp,
    materialAdvantage,
    playerCaptures,
    enemyCaptures,
}) => {
    const relativeCaptures = getRelativeCaptures(playerCaptures, enemyCaptures);
    const captureSymbols = getCaptureSymbols(relativeCaptures);
    return (
        <div
            className={[
                styles.player,
                color === PieceColors.WHITE ? styles.white : styles.black,
            ].join(" ")}
        >
            <div className={styles.status}>status</div>
            <div
                className={[styles.content, isUp ? styles.isUp : ""].join(" ")}
            >
                <div className={styles.element}>{name}</div>
                <div className={styles.element}>
                    {captureSymbols}
                    {materialAdvantage > 0 ? `+${materialAdvantage}` : ""}
                </div>
            </div>
        </div>
    );
};
