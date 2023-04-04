import { AppDispatch } from "app";
import { resolveCastling } from "../model/castling";
import { makeDefaultMove } from "../model/defaultMove";

export const makeKingMove = (
    dispatch: AppDispatch,
    selectedSquareIndex: number,
    targetIndex: number,
) => {
    resolveCastling(dispatch, selectedSquareIndex, targetIndex);
    makeDefaultMove(dispatch, selectedSquareIndex, targetIndex);
};
