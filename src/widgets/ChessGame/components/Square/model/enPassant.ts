import { AppDispatch } from "app";
import { getPieceColor } from "api/lib/gettingPieceInfo/PieceColor";
import { getPieceType } from "api/lib/gettingPieceInfo/PieceType";
import { getFileName } from "api/lib/indexToNameConverter/fileNames";
import { deletePiece, updateEnPassant } from "api/model";
import { PieceColors, PieceTypes } from "widgets/ChessGame/types/enums";
import { squares } from "../../Board/model/squares";

export const resolveEnPassant = (
    dispatch: AppDispatch,
    selectedSquareIndex: number,
    targetIndex: number,
) => {
    if (checkEnPassantCapture(selectedSquareIndex, targetIndex)) {
        const captureIndex =
            getPieceColor(squares[selectedSquareIndex].pieceCode) ===
            PieceColors.WHITE
                ? targetIndex + 8
                : targetIndex - 8;
        dispatch(deletePiece({ index: captureIndex }));
    }

    if (checkDoubleMove(selectedSquareIndex, targetIndex)) {
        const fileName = getFileName(targetIndex);
        dispatch(updateEnPassant({ enPassant: fileName }));
    } else {
        dispatch(updateEnPassant({ enPassant: "-" }));
    }
};

const checkEnPassantCapture = (
    selectedSquareIndex: number,
    targetIndex: number,
): boolean => {
    return getPieceType(squares[selectedSquareIndex].pieceCode) ===
        PieceTypes.PAWN &&
        Math.abs(selectedSquareIndex - targetIndex) % 8 !== 0 &&
        !squares[targetIndex].pieceCode
        ? true
        : false;
};

const checkDoubleMove = (selectedSquareIndex: number, targetIndex: number) => {
    return getPieceType(squares[selectedSquareIndex].pieceCode) ===
        PieceTypes.PAWN && Math.abs(selectedSquareIndex - targetIndex) === 16
        ? true
        : false;
};
