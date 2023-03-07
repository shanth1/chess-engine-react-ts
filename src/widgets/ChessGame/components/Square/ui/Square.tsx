import { Piece } from "../../Piece/ui/Piece";
import { ISquareProps } from "../types/props";
import styles from "./styles.module.css";

export const Square: React.FC<ISquareProps> = ({
    index,
    color,
    piece,
    selectedSquare,
    available,
    onClick,
    targetMove,
}: ISquareProps) => {
    const isSelected = index === selectedSquare?.index && !!piece;

    return (
        <div
            className={[
                styles.square,
                styles[color],
                piece ? styles.clickable : "",
                available ? styles.clickable : "",
                isSelected ? styles.selected : "",
            ].join(" ")}
            onClick={() => {
                if (isSelected) return;
                if (piece) onClick(index);
                if (available && selectedSquare) targetMove(index);
            }}
        >
            {available && <div className={styles.available} />}
            {!!piece && <Piece pieceCode={piece} />}
        </div>
    );
};
