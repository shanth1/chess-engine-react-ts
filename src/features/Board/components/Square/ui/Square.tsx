import { useAppDispatch, useAppSelector } from "shared/hooks";
import { PieceColors } from "shared/enums";
import { Piece } from "../../Piece/ui/Piece";
import { getClickHandler } from "../lib/clickHandler";
import { ISquareProps } from "../types/interfaces";
import { getSquareStyle } from "./lib/squareStyle";
import styles from "./styles.module.css";

export const Square: React.FC<ISquareProps> = ({
    square,
    selectedIndex,
    setSelectedIndex,
    piecePlacement,
}) => {
    const { index, pieceCode, isLegalToMove } = square;
    const dispatch: AppDispatch = useAppDispatch();
    const activeColor: PieceColors = useAppSelector(
        (state) => state.fen.activeColor,
    );

    const isSelected: boolean = index === selectedIndex;
    const squareStyle: string = getSquareStyle(square, isSelected);

    return (
        <div
            className={squareStyle}
            onClick={getClickHandler(
                dispatch,
                square,
                piecePlacement,
                activeColor,
                isSelected,
                selectedIndex,
                setSelectedIndex,
            )}
        >
            {isLegalToMove && <div className={styles.legal} />}
            {!!pieceCode && <Piece pieceCode={pieceCode} />}
        </div>
    );
};
