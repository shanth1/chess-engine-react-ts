import { AppDispatch } from "app";
import { getFileName } from "api/boardInfo/fileNames";
import { PieceColors, PieceTypes } from "widgets/ChessGame/types/enums";
import { deletePiece, updateEnPassant } from "api/fenSlice";
import { getPieceColor, getPieceType } from "api/pieceInfo";

export const resolveEnPassant = (
    dispatch: AppDispatch,
    piecePlacement: Array<number>,
    selectedIndex: number,
    targetIndex: number,
) => {
    if (checkEnPassantCapture(piecePlacement, selectedIndex, targetIndex)) {
        const captureIndex =
            getPieceColor(piecePlacement[selectedIndex]) === PieceColors.WHITE
                ? targetIndex + 8
                : targetIndex - 8;
        dispatch(deletePiece({ index: captureIndex }));
    }

    if (checkDoubleMove(piecePlacement, selectedIndex, targetIndex)) {
        const fileName = getFileName(targetIndex);
        dispatch(updateEnPassant({ enPassant: fileName }));
    } else {
        dispatch(updateEnPassant({ enPassant: "-" }));
    }
};

const checkEnPassantCapture = (
    piecePlacement: Array<number>,
    selectedIndex: number,
    targetIndex: number,
): boolean => {
    return getPieceType(piecePlacement[selectedIndex]) === PieceTypes.PAWN &&
        Math.abs(selectedIndex - targetIndex) % 8 !== 0 &&
        !piecePlacement[targetIndex]
        ? true
        : false;
};

const checkDoubleMove = (
    piecePlacement: Array<number>,
    selectedIndex: number,
    targetIndex: number,
) => {
    return getPieceType(piecePlacement[selectedIndex]) === PieceTypes.PAWN &&
        Math.abs(selectedIndex - targetIndex) === 16
        ? true
        : false;
};
