import { squares } from "features/Board/model/squares";
import {
    changeActiveColor,
    moveFigure,
    updateCastlingRights,
} from "api/fenSlice";
import { getPieceType } from "shared/pieceInfo";
import { PieceTypes } from "shared/types";

export const makeDefaultMove = (
    dispatch: AppDispatch,
    piecePlacement: Array<number>,
    selectedIndex: number,
    targetIndex: number,
) => {
    dispatch(
        moveFigure({
            startIndex: selectedIndex,
            targetIndex: targetIndex,
        }),
    );
    dispatch(changeActiveColor());

    const selectedPiece = getPieceType(piecePlacement[selectedIndex]);
    if (
        selectedPiece === PieceTypes.KING ||
        selectedPiece === PieceTypes.ROOK
    ) {
        dispatch(
            updateCastlingRights({
                squareName: squares[selectedIndex].name,
            }),
        );
    }
};
