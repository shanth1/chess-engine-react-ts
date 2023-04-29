import { Piece } from "../../Piece/ui/Piece";
import { ISquareProps } from "../types/interfaces";
import { getSquareStyle } from "./lib/squareStyle";
import styles from "./styles.module.css";

export const Square: React.FC<ISquareProps> = ({
    square,
    resolveSquareClick,
}) => {
    const { piece, isLegal } = square;
    const squareStyle: string = getSquareStyle(square);
    return (
        <div className={squareStyle} onClick={() => resolveSquareClick(square)}>
            {isLegal && <div className={styles.legal} />}
            {!!piece && <Piece piece={piece} />}
        </div>
    );
};
