import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";
import { getPieceType } from "widgets/ChessGame/lib/gettingPieceInfo/PieceType";
import { PieceColors, PieceTypes } from "widgets/ChessGame/types/enums";
import { squares } from "../../Board/model/squares";

export const isPawnPromote = (
    selectedSquareIndex: number,
    targetIndex: number,
): boolean => {
    return (getPieceType(squares[selectedSquareIndex].pieceCode) ===
        PieceTypes.PAWN &&
        getPieceColor(squares[selectedSquareIndex].pieceCode) ===
            PieceColors.WHITE &&
        Math.floor(targetIndex / 8) === 0) ||
        (getPieceType(squares[selectedSquareIndex].pieceCode) ===
            PieceTypes.PAWN &&
            getPieceColor(squares[selectedSquareIndex].pieceCode) ===
                PieceColors.BLACK &&
            Math.floor(targetIndex / 8) === 7)
        ? true
        : false;
};
