import { AppDispatch } from "app";
import { makeDefaultMove } from "../model/defaultMove";
import { resolveEnPassant } from "../model/enPassant";
import { resolvePawnPromotion } from "../model/pawnPromotion";

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
