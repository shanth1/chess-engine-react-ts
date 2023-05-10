import React from "react";
import { PieceColors } from "shared/enums";
import { Status } from "./components/Status/Status";
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

    const isWhite = color === PieceColors.WHITE;
    const colorStyle = isWhite ? styles.white : styles.black;
    const playerStyle = [styles.player, colorStyle].join(" ");
    return (
        <div className={playerStyle}>
            <Status color={color} />
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
