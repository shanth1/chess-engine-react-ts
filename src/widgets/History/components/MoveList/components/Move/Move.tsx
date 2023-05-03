import { getFileName } from "shared/boardInfo";
import { PieceColors } from "shared/enums";
import { getPieceName } from "./pieceName";
import styles from "./styles.module.css";

interface IMoveProps {
    board: IBoard;
}

export const Move: React.FC<IMoveProps> = ({ board }) => {
    const {
        move,
        activeColor,
        moveType,
        isCheck,
        isCheckmate,
        isPromotion,
        position,
    } = board;
    const pieceName = move ? getPieceName(position[move[1]]) : "";
    const targetSquare = move
        ? getFileName(move[1]) + Math.floor((64 - move[1]) / 8 + 1)
        : "";
    let moveName = "";
    switch (moveType) {
        case "capture":
            const file = move && pieceName === "" ? getFileName(move[0]) : "";
            moveName = pieceName + file + "×" + targetSquare;
            break;
        case "O-O":
        case "O-O-O":
            moveName = moveType;
            break;
        default:
            moveName = pieceName + targetSquare;
            break;
    }

    moveName = isCheck && !isCheckmate ? moveName + "+" : moveName;
    moveName = isCheckmate ? moveName + "#" : moveName;
    moveName = isPromotion
        ? moveName[1] + moveName[2] + "=" + moveName[0]
        : moveName;

    const colorStyle =
        activeColor === PieceColors.BLACK
            ? styles.white_move
            : styles.black_move;
    return (
        <div className={[styles.move_container, colorStyle].join(" ")}>
            {moveName}
        </div>
    );
};
