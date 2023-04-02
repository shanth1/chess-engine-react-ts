import { AppDispatch } from "app";
import { squares } from "widgets/ChessGame/components/Board/model/squares";
import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";
import { getPieceType } from "widgets/ChessGame/lib/gettingPieceInfo/PieceType";
import { deletePiece } from "widgets/ChessGame/model";
import { PieceColors, PieceTypes } from "widgets/ChessGame/types/enums";

export const enPassantCapture = (
    dispatch: AppDispatch,
    selectedSquareIndex: number,
    targetIndex: number,
): void => {
    if (
        getPieceType(squares[selectedSquareIndex].pieceCode) ===
            PieceTypes.PAWN &&
        Math.abs(selectedSquareIndex - targetIndex) % 8 !== 0 &&
        !squares[targetIndex].pieceCode
    ) {
        const captureIndex =
            getPieceColor(squares[selectedSquareIndex].pieceCode) ===
            PieceColors.WHITE
                ? targetIndex + 8
                : targetIndex - 8;
        dispatch(deletePiece({ index: captureIndex }));
    }
};
