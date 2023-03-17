import { PieceTypes } from "./../../types/enums";
import { getPieceType } from "./../../lib/gettingPieceInfo/PieceType";
import { getKnightMoves } from "./knightMoves";
import { getSlidingMoves } from "./slidingMoves";
import { getKingMoves } from "./kingMoves";
import { getPawnMoves } from "./pawnMoves";

export const getLegalMoves = (
    piecePlacement: Array<number>,
    selectedSquareIndex: number | null,
): Array<number> => {
    let legalMoves: Array<number> = [];

    if (selectedSquareIndex === null) return legalMoves;
    if (!piecePlacement[selectedSquareIndex]) return legalMoves;

    const selectedPieceType = getPieceType(piecePlacement[selectedSquareIndex]);

    switch (selectedPieceType) {
        case PieceTypes.QUEEN:
        case PieceTypes.ROOK:
        case PieceTypes.BISHOP:
            legalMoves = getSlidingMoves(piecePlacement, selectedSquareIndex);
            break;
        case PieceTypes.KNIGHT:
            legalMoves = getKnightMoves(piecePlacement, selectedSquareIndex);
            break;
        case PieceTypes.KING:
            legalMoves = getKingMoves(piecePlacement, selectedSquareIndex);
            break;

        case PieceTypes.PAWN:
            legalMoves = getPawnMoves(piecePlacement, selectedSquareIndex);
            break;
    }

    return legalMoves;
};
