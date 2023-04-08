import { AppDispatch } from "app";
import { getPieceType } from "api/lib/gettingPieceInfo/PieceType";
import { PieceTypes } from "widgets/ChessGame/types/enums";
import { makeDefaultMove } from "./defaultMove";
import { makeKingMove } from "./kingMove";
import { makePawnMove } from "./pawnMove";
import { getTargetIndex } from "../lib/targetIndex";

export const makeMove = (
    dispatch: AppDispatch,
    piecePlacement: Array<number>,
    selectedIndex: number,
    index: number,
    activeColor: number,
) => {
    const targetIndex = getTargetIndex(piecePlacement, index, activeColor);
    const selectedPiece = piecePlacement[selectedIndex];

    switch (getPieceType(selectedPiece)) {
        case PieceTypes.PAWN:
            makePawnMove(dispatch, piecePlacement, selectedIndex, targetIndex);
            break;
        case PieceTypes.KING:
            makeKingMove(dispatch, piecePlacement, selectedIndex, targetIndex);
            break;
        case PieceTypes.ROOK:
        case PieceTypes.BISHOP:
        case PieceTypes.KNIGHT:
        case PieceTypes.QUEEN:
            makeDefaultMove(
                dispatch,
                piecePlacement,
                selectedIndex,
                targetIndex,
            );
            break;
        default:
            alert("wrong piece");
    }
};
