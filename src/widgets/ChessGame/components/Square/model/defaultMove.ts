import { AppDispatch } from "app";
import { getPieceType } from "api/lib/gettingPieceInfo/PieceType";
import { changeActiveColor, moveFigure, updateCastlingRights } from "api/model";
import { PieceTypes } from "widgets/ChessGame/types/enums";
import { squares } from "../../Board/model/squares";

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
