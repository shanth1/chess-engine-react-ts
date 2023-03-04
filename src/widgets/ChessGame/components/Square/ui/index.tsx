import { Colors, PieceCodes } from "widgets/ChessGame/types/enums";
import { Piece } from "../../Piece/ui";
import { ISquareProps } from "../types/interfaces";
import styles from "./styles.module.css";

export const Square: React.FC<ISquareProps> = (props) => {
    const color: Colors = props.square.color;
    const piece: PieceCodes | undefined = props.square.piece;
    return (
        <div className={[styles.square, styles[color]].join(" ")}>
            {!!piece && <Piece pieceCode={piece} />}
        </div>
    );
};
