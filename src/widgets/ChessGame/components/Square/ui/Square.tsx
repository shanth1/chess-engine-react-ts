import { useAppDispatch, useAppSelector } from "app";
import { colorBitMask } from "widgets/ChessGame/lib/bitMasks";
import { getConjunction } from "widgets/ChessGame/lib/booleanOperations";
import { changeActiveColor, moveFigure } from "widgets/ChessGame/model";
import { ColorCodes } from "widgets/ChessGame/types/enums";
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

    const activeColor: ColorCodes = useAppSelector(
        (state) => state.game.activeColor,
    );

    const isSelected: boolean = index === selectedSquareIndex;

    const onClickHandler = () => {
        const pieceColor: ColorCodes = getConjunction(pieceCode, colorBitMask);

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
