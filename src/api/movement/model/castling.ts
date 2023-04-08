import { AppDispatch } from "app";
import { PieceTypes } from "widgets/ChessGame/types/enums";
import { moveFigure } from "api/fenSlice";
import { getPieceType } from "api/pieceInfo";

export const resolveCastling = (
    dispatch: AppDispatch,
    piecePlacement: Array<number>,
    selectedIndex: number,
    targetIndex: number,
) => {
    if (isCastling(selectedIndex, targetIndex)) {
        moveRookWhileCastling(
            dispatch,
            piecePlacement,
            selectedIndex,
            targetIndex,
        );
    }
};

const isCastling = (selectedIndex: number, targetIndex: number): boolean => {
    return Math.abs(selectedIndex - targetIndex) === 2 ? true : false;
};

const moveRookWhileCastling = (
    dispatch: AppDispatch,
    piecePlacement: Array<number>,
    selectedIndex: number,
    targetIndex: number,
): void => {
    if (
        getPieceType(piecePlacement[selectedIndex]) === PieceTypes.KING &&
        Math.abs(selectedIndex - targetIndex) >= 2 &&
        Math.abs(selectedIndex - targetIndex) <= 4
    ) {
        const rookStartIndex =
            targetIndex % 8 >= 6 ? selectedIndex + 3 : selectedIndex - 4;
        const rookTargetIndex =
            targetIndex % 8 >= 6 ? selectedIndex + 1 : selectedIndex - 1;

        dispatch(
            moveFigure({
                startIndex: rookStartIndex,
                targetIndex: rookTargetIndex,
            }),
        );
    }
};
