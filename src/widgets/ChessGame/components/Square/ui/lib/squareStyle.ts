import { ISquare } from "widgets/ChessGame/types/interfaces";
import styles from "../styles.module.css";

export const getSquareStyle = (
    { color, pieceCode, isLegalToMove }: ISquare,
    isSelected: boolean,
) => {
    return [
        styles.square,
        styles[color],
        pieceCode ? styles.clickable : "",
        isLegalToMove ? styles.clickable : "",
        isSelected ? styles.selected : "",
    ].join(" ");
};
