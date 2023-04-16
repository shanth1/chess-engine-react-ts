import { makeDefaultMove } from "./defaultMove";
import { resolveEnPassant } from "./enPassant";
import { resolvePawnPromotion } from "./pawnPromotion";

export const makePawnMove = (
    dispatch: AppDispatch,
    piecePlacement: Array<number>,
    selectedIndex: number,
    targetIndex: number,
) => {
    resolveEnPassant(dispatch, piecePlacement, selectedIndex, targetIndex);
    resolvePawnPromotion(dispatch, piecePlacement, selectedIndex, targetIndex);
    makeDefaultMove(dispatch, piecePlacement, selectedIndex, targetIndex);
};
