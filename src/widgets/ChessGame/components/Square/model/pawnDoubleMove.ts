import { AppDispatch } from "app";
import { getPieceType } from "widgets/ChessGame/lib/gettingPieceInfo/PieceType";
import { getFileName } from "widgets/ChessGame/lib/indexToNameConverter/fileNames";
import { updateEnPassant } from "widgets/ChessGame/model";
import { PieceTypes } from "widgets/ChessGame/types/enums";
import { squares } from "../../Board/model/squares";

export const pawnDoubleMove = (
    dispatch: AppDispatch,
    selectedSquareIndex: number,
    targetIndex: number,
): void => {
    if (
        getPieceType(squares[selectedSquareIndex].pieceCode) ===
            PieceTypes.PAWN &&
        Math.abs(selectedSquareIndex - targetIndex) === 16
    ) {
        const fileName = getFileName(targetIndex);
        dispatch(updateEnPassant({ enPassant: fileName }));
    } else {
        dispatch(updateEnPassant({ enPassant: "-" }));
    }
};
