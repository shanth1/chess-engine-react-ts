import { AppDispatch, useAppDispatch, useAppSelector } from "app";
import { PieceColors } from "widgets/ChessGame/types/enums";
import { Piece } from "../../Piece/ui/Piece";
import { getClickHandler } from "../lib/clickHandler";
import { ISquareProps } from "../types/interfaces";
import { getSquareStyle } from "./lib/squareStyle";
import styles from "./styles.module.css";

export const Square: React.FC<ISquareProps> = ({
    square,
    selectedSquareIndex,
    setSelectedSquareIndex,
}) => {
    const { index, pieceCode, isLegalToMove } = square;
    const dispatch: AppDispatch = useAppDispatch();
    const activeColor: PieceColors = useAppSelector(
        (state) => state.fen.activeColor,
    );

    const isSelected: boolean = index === selectedSquareIndex;
    const squareStyle: string = getSquareStyle(square, isSelected);

    return (
        <div
            className={squareStyle}
            onClick={getClickHandler(
                dispatch,
                activeColor,
                pieceCode,
                isLegalToMove,
                isSelected,
                selectedSquareIndex,
                index,
                setSelectedSquareIndex,
            )}
        >
            {isLegalToMove && <div className={styles.legal} />}
            {!!pieceCode && <Piece pieceCode={pieceCode} />}
        </div>
    );
};
