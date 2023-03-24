import { useAppDispatch, useAppSelector } from "app";
import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";
import { getPieceType } from "widgets/ChessGame/lib/gettingPieceInfo/PieceType";
import {
    changeActiveColor,
    moveFigure,
    updateCastlingRights,
} from "widgets/ChessGame/model";
import { PieceColors, PieceTypes } from "widgets/ChessGame/types/enums";
import { squares } from "../../Board/model/squares";
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

        let targetIndex = index;

        if (!isPlayerTurn && !isLegalToMove) return;
        if (getPieceType(squares[index].pieceCode) === PieceTypes.ROOK) {
            targetIndex = index % 8 === 7 ? index - 1 : index + 2;
        }
        if (isLegalToMove && selectedSquareIndex !== null) {
            dispatch(
                moveFigure({
                    startIndex: selectedSquareIndex,
                    targetIndex: targetIndex,
                }),
            );
            if (
                getPieceType(squares[selectedSquareIndex].pieceCode) ===
                    PieceTypes.KING &&
                Math.abs(selectedSquareIndex - targetIndex) >= 2 &&
                Math.abs(selectedSquareIndex - targetIndex) <= 4
            ) {
                const rookStartIndex =
                    index % 8 >= 6
                        ? selectedSquareIndex + 3
                        : selectedSquareIndex - 4;
                const rookTargetIndex =
                    index % 8 >= 6
                        ? selectedSquareIndex + 1
                        : selectedSquareIndex - 1;

                dispatch(
                    moveFigure({
                        startIndex: rookStartIndex,
                        targetIndex: rookTargetIndex,
                    }),
                );
            }
            dispatch(changeActiveColor());
            dispatch(
                updateCastlingRights({
                    squareName: squares[selectedSquareIndex].name,
                }),
            );
        }

        setSelectedSquareIndex(isSelected || isLegalToMove ? null : index);
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
