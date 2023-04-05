import { AppDispatch } from "app";
import { getPieceType } from "api/lib/gettingPieceInfo/PieceType";
import { moveFigure } from "api/model";
import { PieceTypes } from "widgets/ChessGame/types/enums";
import { squares } from "../../Board/model/squares";

export const resolveCastling = (
    dispatch: AppDispatch,
    selectedSquareIndex: number,
    targetIndex: number,
) => {
    if (isCastling(selectedSquareIndex, targetIndex)) {
        moveRookWhileCastling(dispatch, selectedSquareIndex, targetIndex);
    }
};

const isCastling = (selectedIndex: number, targetIndex: number): boolean => {
    return Math.abs(selectedIndex - targetIndex) === 2 ? true : false;
};

const moveRookWhileCastling = (
    dispatch: AppDispatch,
    selectedSquareIndex: number,
    targetIndex: number,
): void => {
    if (
        getPieceType(squares[selectedSquareIndex].pieceCode) ===
            PieceTypes.KING &&
        Math.abs(selectedSquareIndex - targetIndex) >= 2 &&
        Math.abs(selectedSquareIndex - targetIndex) <= 4
    ) {
        const rookStartIndex =
            targetIndex % 8 >= 6
                ? selectedSquareIndex + 3
                : selectedSquareIndex - 4;
        const rookTargetIndex =
            targetIndex % 8 >= 6
                ? selectedSquareIndex + 1
                : selectedSquareIndex - 1;

        dispatch(
            moveFigure({
                startIndex: rookStartIndex,
                targetIndex: rookTargetIndex,
            }),
        );
    }
};
