import React from "react";
import { PieceColors } from "shared/enums";
import { getCaptureSymbols } from "./lib/captureSymbols";
import { getRelativeCaptures } from "./lib/relativeCaptures";
import { IPlayerProps } from "./props";
import styles from "./styles.module.css";

export const Player: React.FC<IPlayerProps> = ({
    name,
    color,
    isUp,
    materialAdvantage,
    playerCaptures,
    enemyCaptures,
}) => {
    const relativeCaptures = getRelativeCaptures(playerCaptures, enemyCaptures);
    relativeCaptures.sort((a, b) => a - b);
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
