import { AppDispatch } from "app";
import {
    changeActiveColor,
    moveFigure,
    updateCastlingRights,
} from "widgets/ChessGame/model";
import { squares } from "../../Board/model/squares";

export const makeDefaultMove = (
    dispatch: AppDispatch,
    selectedSquareIndex: number,
    targetIndex: number,
) => {
    dispatch(
        moveFigure({
            startIndex: selectedSquareIndex,
            targetIndex: targetIndex,
        }),
    );
    dispatch(changeActiveColor());
    dispatch(
        updateCastlingRights({
            squareName: squares[selectedSquareIndex].name,
        }),
    );
};
