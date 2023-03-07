import { Piece } from "../../Piece/ui/Piece";
import { ISquareProps } from "../types/props";
import styles from "./styles.module.css";

export const Square: React.FC<ISquareProps> = ({
    index,
    color,
    piece,
    selected,
    available,
    onClick,
}: ISquareProps) => {
    return (
        <div
            className={[
                styles.square,
                styles[color],
                piece ? styles.clickable : "",
                available ? styles.clickable : "",
                selected ? styles.selected : "",
            ].join(" ")}
            onClick={() => {
                if (piece) onClick(index);
            }}
        >
            {available && <div className={styles.available} />}
            {!!piece && <Piece pieceCode={piece} />}
        </div>
    );
};
