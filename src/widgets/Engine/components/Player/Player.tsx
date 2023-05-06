import React from "react";
import { PieceColors } from "shared/enums";
import styles from "./styles.module.css";

interface IPlayerProps {
    captureList: number[];
    color: number;
    isUp: boolean;
    name: string;
}

export const Player: React.FC<IPlayerProps> = ({
    name,
    color,
    isUp,
    captureList,
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
                <div className={styles.element}>{captureList.join(" ")}</div>
            </div>
        </div>
    );
};
