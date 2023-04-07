import { AppDispatch } from "app";
import { resolveCastling } from "./castling";
import { makeDefaultMove } from "./defaultMove";

export const makeKingMove = (
    dispatch: AppDispatch,
    piecePlacement: Array<number>,
    selectedIndex: number,
    targetIndex: number,
) => {
    resolveCastling(dispatch, piecePlacement, selectedIndex, targetIndex);
    makeDefaultMove(dispatch, piecePlacement, selectedIndex, targetIndex);
};
