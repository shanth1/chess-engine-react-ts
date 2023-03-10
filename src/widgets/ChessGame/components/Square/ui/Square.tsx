import { useAppDispatch, useAppSelector } from "app";
import { colorBitMask } from "widgets/ChessGame/lib/bitMasks";
import { getConjunction } from "widgets/ChessGame/lib/booleanOperations";
import { changeActiveColor } from "widgets/ChessGame/model";
import { ColorCodes } from "widgets/ChessGame/types/enums";
import { Piece } from "../../Piece/ui/Piece";
import { ISquareProps } from "../types/interfaces";
import styles from "./styles.module.css";

export const Square: React.FC<ISquareProps> = ({
    index,
    color,
    pieceCode,
    selectedSquare,
    isAvailable,
    selectStartSquare,
    selectTargetSquare,
    unselectSquare,
}) => {
    const activeColor: ColorCodes = useAppSelector(
        (state) => state.game.activeColor,
    );

    const dispatch = useAppDispatch();

    const isSelected: boolean = index === selectedSquare?.index && !!pieceCode;

    return (
        <div
            className={[
                styles.square,
                styles[color],
                pieceCode ? styles.clickable : "",
                isAvailable ? styles.clickable : "",
                isSelected ? styles.selected : "",
            ].join(" ")}
            onClick={() => {
                if (
                    !selectedSquare &&
                    activeColor !== getConjunction(pieceCode, colorBitMask)
                )
                    return;
                if (isSelected) {
                    unselectSquare();
                    return;
                }

                if (pieceCode) {
                    selectStartSquare(index);
                }
                if (isAvailable && selectedSquare) {
                    selectTargetSquare(index);
                    dispatch(changeActiveColor());
                }
            }}
        >
            {isAvailable && <div className={styles.available} />}
            {!!pieceCode && <Piece pieceCode={pieceCode} />}
        </div>
    );
};
