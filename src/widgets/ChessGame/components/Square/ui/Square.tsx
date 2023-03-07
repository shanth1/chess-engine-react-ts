import { Piece } from "../../Piece/ui/Piece";
import { ISquareProps } from "../types/props";
import styles from "./styles.module.css";

export const Square: React.FC<ISquareProps> = ({
    index,
    color,
    piece,
    selected,
    onClick,
}: ISquareProps) => {
    return (
        <div
            className={[
                styles.square,
                styles[color],
                piece ? styles.includes_piece : "",
                selected ? styles.selected : "",
            ].join(" ")}
            onClick={() => {
                onClick(index);
            }}
        >
            {!!piece && <Piece pieceCode={piece} />}
        </div>
    );
};
