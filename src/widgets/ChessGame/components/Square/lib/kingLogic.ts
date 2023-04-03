import { AppDispatch } from "app";
import { makeDefaultMove } from "../model/defaultMove";
import { moveRook } from "../model/moveRook";

export const makeKingMove = (
    dispatch: AppDispatch,
    selectedSquareIndex: number,
    targetIndex: number,
) => {
    moveRook(dispatch, selectedSquareIndex, targetIndex);
    makeDefaultMove(dispatch, selectedSquareIndex, targetIndex);
};
