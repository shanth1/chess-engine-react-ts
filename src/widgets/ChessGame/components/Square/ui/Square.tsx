import { Piece } from "../../Piece/ui/Piece";
import { ISquareProps } from "../types/interfaces";
import styles from "./styles.module.css";

export const Square: React.FC<ISquareProps> = ({
    index,
    color,
    pieceCode,
    selectedSquare,
    isAvailable,
    selectStartSquare,
    selectTargetSquare,
    unselectSquare,
}) => {
    const isSelected: boolean = index === selectedSquare?.index && !!pieceCode;

    return (
        <div
            className={[
                styles.square,
                styles[color],
                pieceCode ? styles.clickable : "",
                isAvailable ? styles.clickable : "",
                isSelected ? styles.selected : "",
            ].join(" ")}
            onClick={() => {
                if (isSelected) {
                    unselectSquare();
                    return;
                }
                if (pieceCode) selectStartSquare(index);
                if (isAvailable && selectedSquare) selectTargetSquare(index);
            }}
        >
            {isAvailable && <div className={styles.available} />}
            {!!pieceCode && <Piece pieceCode={pieceCode} />}
        </div>
    );
};
