import { AppDispatch } from "app";
import { makeDefaultMove } from "../model/defaultMove";
import { moveRookWhileCastling } from "../model/moveRookWhileCastling";

function isCastling(selectedIndex: number, targetIndex: number): boolean {
    return Math.abs(selectedIndex - targetIndex) === 2 ? true : false;
}

export const makeKingMove = (
    dispatch: AppDispatch,
    selectedSquareIndex: number,
    targetIndex: number,
) => {
    if (isCastling(selectedSquareIndex, targetIndex)) {
        moveRookWhileCastling(dispatch, selectedSquareIndex, targetIndex);
    }
    makeDefaultMove(dispatch, selectedSquareIndex, targetIndex);
};
