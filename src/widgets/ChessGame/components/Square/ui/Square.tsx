import { useAppDispatch, useAppSelector } from "app";
import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";
import { changeActiveColor, moveFigure } from "widgets/ChessGame/model";
import { PieceColors } from "widgets/ChessGame/types/enums";
import { Piece } from "../../Piece/ui/Piece";
import { ISquareProps } from "../types/interfaces";
import styles from "./styles.module.css";

export const Square: React.FC<ISquareProps> = ({
    index,
    color,
    pieceCode,
    isLegalToMove,
    selectedSquareIndex,
    setSelectedSquareIndex,
}) => {
    const dispatch = useAppDispatch();

    const activeColor: PieceColors = useAppSelector(
        (state) => state.fen.activeColor,
    );

    const isSelected: boolean = index === selectedSquareIndex;

    const onClickHandler = () => {
        const pieceColor: PieceColors = getPieceColor(pieceCode);

        const isPlayerTurn: boolean = activeColor === pieceColor;

        if (!isPlayerTurn && !isLegalToMove) return;

        setSelectedSquareIndex(isSelected || isLegalToMove ? null : index);
        if (isLegalToMove) {
            dispatch(
                moveFigure({
                    startIndex: selectedSquareIndex,
                    targetIndex: index,
                }),
            );
            dispatch(changeActiveColor());
        }
    };

    const squareStyle: string = [
        styles.square,
        styles[color],
        pieceCode ? styles.clickable : "",
        isLegalToMove ? styles.clickable : "",
        isSelected ? styles.selected : "",
    ].join(" ");

    return (
        <div className={squareStyle} onClick={onClickHandler}>
            {isLegalToMove && <div className={styles.legal} />}
            {!!pieceCode && <Piece pieceCode={pieceCode} />}
        </div>
    );
};
