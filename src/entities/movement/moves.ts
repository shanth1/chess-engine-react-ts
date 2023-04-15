import { AppDispatch } from "app";
import { makeDefaultMove } from "./model/defaultMove";
import { makeKingMove } from "./model/kingMove";
import { makePawnMove } from "./model/pawnMove";
import { getTargetIndex } from "./lib/targetIndex";
import { getPieceType } from "shared/pieceInfo";
import { PieceTypes } from "shared/types";

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
