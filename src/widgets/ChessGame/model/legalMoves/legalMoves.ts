import { getPieceType } from "./../../lib/gettingPieceInfo/PieceType";
import { getKnightMoves } from "./knightMoves";
import { getSlidingMoves } from "./slidingMoves";
import { PieceCodes } from "widgets/ChessGame/types/enums";
import { Index } from "widgets/ChessGame/types/types";
import { getKingMoves } from "./kingMoves";
import { getPawnMoves } from "./pawnMoves";

export const getLegalMoves = (
    piecePlacement: Array<PieceCodes>,
    selectedSquareIndex: Index | null,
): Array<Index> => {
    let legalMoves: Array<Index> = [];

    if (selectedSquareIndex === null) return legalMoves;
    if (!piecePlacement[selectedSquareIndex]) return legalMoves;

    const selectedPieceType = getPieceType(piecePlacement[selectedSquareIndex]);

    switch (selectedPieceType) {
        case PieceCodes.QUEEN:
        case PieceCodes.ROOK:
        case PieceCodes.BISHOP:
            legalMoves = getSlidingMoves(piecePlacement, selectedSquareIndex);
            break;
        case PieceCodes.KNIGHT:
            legalMoves = getKnightMoves(piecePlacement, selectedSquareIndex);
            break;
        case PieceCodes.KING:
            legalMoves = getKingMoves(piecePlacement, selectedSquareIndex);
            break;

        case PieceCodes.PAWN:
            legalMoves = getPawnMoves(piecePlacement, selectedSquareIndex);
            break;
    }

    return legalMoves;
};
