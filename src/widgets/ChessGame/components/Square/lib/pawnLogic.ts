import { AppDispatch } from "app";
import { promotesPawn } from "widgets/ChessGame/model";
import { isPawnPromote } from "../model/checkPawnPromote";
import { makeDefaultMove } from "../model/defaultMove";
import { enPassantCapture } from "../model/enPassantCapture";
import { pawnDoubleMove } from "../model/pawnDoubleMove";

export const makePawnMove = (
    dispatch: AppDispatch,
    selectedSquareIndex: number,
    targetIndex: number,
) => {
    enPassantCapture(dispatch, selectedSquareIndex, targetIndex);
    pawnDoubleMove(dispatch, selectedSquareIndex, targetIndex);
    if (isPawnPromote(selectedSquareIndex, targetIndex)) {
        dispatch(promotesPawn({ index: targetIndex }));
    }
    makeDefaultMove(dispatch, selectedSquareIndex, targetIndex);
};
