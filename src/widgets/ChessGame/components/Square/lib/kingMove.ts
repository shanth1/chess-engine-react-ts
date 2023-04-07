import { AppDispatch } from "app";
import { resolveCastling } from "../model/castling";
import { makeDefaultMove } from "../model/defaultMove";

export const makeKingMove = (
    dispatch: AppDispatch,
    piecePlacement: Array<number>,
    selectedIndex: number,
    targetIndex: number,
) => {
    resolveCastling(dispatch, piecePlacement, selectedIndex, targetIndex);
    makeDefaultMove(dispatch, piecePlacement, selectedIndex, targetIndex);
};
