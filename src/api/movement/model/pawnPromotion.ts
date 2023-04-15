import { AppDispatch } from "app";
import { promotesPawn } from "api/fenSlice";
import { getPieceColor, getPieceType, PieceColors, PieceTypes } from "shared";

export const resolvePawnPromotion = (
    dispatch: AppDispatch,
    piecePlacement: Array<number>,
    selectedIndex: number,
    targetIndex: number,
) => {
    if (checkPawnPromotion(piecePlacement, selectedIndex, targetIndex)) {
        dispatch(promotesPawn({ index: selectedIndex }));
    }
};

const checkPawnPromotion = (
    piecePlacement: Array<number>,
    selectedIndex: number,
    targetIndex: number,
): boolean => {
    return (getPieceType(piecePlacement[selectedIndex]) === PieceTypes.PAWN &&
        getPieceColor(piecePlacement[selectedIndex]) === PieceColors.WHITE &&
        Math.floor(targetIndex / 8) === 0) ||
        (getPieceType(piecePlacement[selectedIndex]) === PieceTypes.PAWN &&
            getPieceColor(piecePlacement[selectedIndex]) ===
                PieceColors.BLACK &&
            Math.floor(targetIndex / 8) === 7)
        ? true
        : false;
};
