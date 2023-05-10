import React from "react";
import { PieceColors } from "shared/enums";
import { useAppSelector } from "shared/hooks";
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
    const status = useAppSelector((state) => state.engine.status);
    const activeColor = useAppSelector((state) => state.game.board.activeColor);

    const relativeCaptures = getRelativeCaptures(playerCaptures, enemyCaptures);
    relativeCaptures.sort((a, b) => a - b);
    const captureSymbols = getCaptureSymbols(relativeCaptures);

    const isWhite = color === PieceColors.WHITE;
    const colorStyle = isWhite ? styles.white : styles.black;
    const activeStyle = [styles.active].join(" ");

    const borderColorStyle = isWhite ? styles.borderWhite : styles.borderBlack;
    const containerStyle = [styles.container, borderColorStyle].join(" ");
    const spinnerStyle = [styles.spinner, borderColorStyle].join(" ");
    return (
        <div className={[styles.player, colorStyle].join(" ")}>
            <div className={styles.status}>
                {(activeColor !== color || status === "off") && (
                    <div className={containerStyle}></div>
                )}
                {activeColor === color && status === "analysis" && (
                    <div className={spinnerStyle}></div>
                )}
                {activeColor === color && <div className={activeStyle}></div>}
            </div>
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
