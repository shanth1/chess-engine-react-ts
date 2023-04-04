import { AppDispatch } from "app";
import { makeDefaultMove } from "../model/defaultMove";
import { resolveEnPassant } from "../model/enPassant";
import { resolvePawnPromotion } from "../model/pawnPromotion";

export const makePawnMove = (
    dispatch: AppDispatch,
    selectedSquareIndex: number,
    targetIndex: number,
) => {
    resolveEnPassant(dispatch, selectedSquareIndex, targetIndex);
    resolvePawnPromotion(dispatch, selectedSquareIndex, targetIndex);
    makeDefaultMove(dispatch, selectedSquareIndex, targetIndex);
};
