import React from "react";
import { PieceColors, PieceTypes } from "shared/enums";
import { getPieceType } from "shared/pieceInfo";
import styles from "./styles.module.css";

const getCaptureText = (
    playerCaptureList: number[],
    enemyCaptureList: number[],
): string => {
    let captureListText: string = "";
    playerCaptureList.forEach((playerPiece) => {
        const index = enemyCaptureList
            .map((piece) => getPieceType(piece))
            .indexOf(getPieceType(playerPiece));

        if (index >= 0) {
            enemyCaptureList.splice(index, 1);
        } else {
            switch (getPieceType(playerPiece)) {
                case PieceTypes.QUEEN:
                    captureListText += "♛ ";
                    break;
                case PieceTypes.ROOK:
                    captureListText += "♜ ";
                    break;
                case PieceTypes.KNIGHT:
                    captureListText += "♞ ";
                    break;
                case PieceTypes.BISHOP:
                    captureListText += "♝ ";
                    break;
                case PieceTypes.PAWN:
                    captureListText += "♟︎ ";
                    break;
                default:
                    alert("unknown piece type in getCaptureText");
                    break;
            }
        }
    });
    return captureListText;
};

interface IPlayerProps {
    enemyCaptureList: number[];
    playerCaptureList: number[];
    color: number;
    isUp: boolean;
    name: string;
}

export const Player: React.FC<IPlayerProps> = ({
    name,
    color,
    isUp,
    playerCaptureList,
    enemyCaptureList,
}) => {
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
                    {getCaptureText(playerCaptureList, enemyCaptureList)}
                </div>
            </div>
        </div>
    );
};
