import { ISquare } from "widgets/ChessGame/components/Board/types/interfaces";
import styles from "../styles.module.css";

export const getSquareStyle = ({
    color,
    piece,
    isLegal,
    isSelected,
}: ISquare) => {
    return [
        styles.square,
        styles[color],
        piece ? styles.clickable : "",
        isLegal ? styles.clickable : "",
        isSelected ? styles.selected : "",
    ].join(" ");
};
