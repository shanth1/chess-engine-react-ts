import { AppDispatch } from "app";
import { getPieceType } from "api/lib/gettingPieceInfo/PieceType";
import { PieceTypes } from "widgets/ChessGame/types/enums";
import { squares } from "../../Board/model/squares";
import { makeDefaultMove } from "../model/defaultMove";
import { makeKingMove } from "./kingMove";
import { makePawnMove } from "./pawnMove";
import { getTargetIndex } from "./targetIndex";

export const makeMove = (
    dispatch: AppDispatch,
    selectedSquareIndex: number,
    index: number,
    activeColor: number,
) => {
    const targetIndex = getTargetIndex(squares, index, activeColor);
    const selectedPiece = squares[selectedSquareIndex].pieceCode;

    switch (getPieceType(selectedPiece)) {
        case PieceTypes.PAWN:
            makePawnMove(dispatch, selectedSquareIndex, targetIndex);
            break;
        case PieceTypes.KING:
            makeKingMove(dispatch, selectedSquareIndex, targetIndex);
            break;
        case PieceTypes.ROOK:
        case PieceTypes.BISHOP:
        case PieceTypes.KNIGHT:
        case PieceTypes.QUEEN:
            makeDefaultMove(dispatch, selectedSquareIndex, targetIndex);
            break;
        default:
            alert("wrong piece");
    }
};
