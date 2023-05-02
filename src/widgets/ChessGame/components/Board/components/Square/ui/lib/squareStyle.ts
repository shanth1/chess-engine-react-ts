import { ISquare } from "widgets/ChessGame/components/Board/types/interfaces";
import styles from "../styles.module.css";

export const getSquareStyle = ({
    color,
    piece,
    isLegal,
    isSelected,
    isStart,
    isTarget,
}: ISquare) => {
    return [
        styles.square,
        styles[color],
        piece ? styles.clickable : "",
        isLegal ? styles.clickable : "",
        isLegal ? styles.legal : "",
        isSelected ? styles.selected : "",
        isStart && !isLegal ? styles.start : "",
        isTarget ? styles.target : "",
        piece && isLegal ? styles.legalPiece : "",
    ].join(" ");
};
