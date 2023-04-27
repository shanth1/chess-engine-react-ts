import { makeDefaultMove } from "./model/defaultMove";
import { makeKingMove } from "./model/kingMove";
import { makePawnMove } from "./model/pawnMove";
import { getPieceType } from "shared/pieceInfo";
import { PieceTypes } from "shared/enums";

export const makeMove = (
    dispatch: AppDispatch,
    position: Array<number>,
    selectedIndex: number,
    targetIndex: number,
) => {
    const selectedPiece = position[selectedIndex];
    switch (getPieceType(selectedPiece)) {
        case PieceTypes.PAWN:
            makePawnMove(dispatch, position, selectedIndex, targetIndex);
            break;
        case PieceTypes.KING:
            makeKingMove(dispatch, position, selectedIndex, targetIndex);
            break;
        case PieceTypes.ROOK:
        case PieceTypes.BISHOP:
        case PieceTypes.KNIGHT:
        case PieceTypes.QUEEN:
            makeDefaultMove(dispatch, position, selectedIndex, targetIndex);
            break;
        default:
            alert("wrong piece");
    }
};
