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
    const legalMoves: Array<Index> = [];

    if (selectedSquareIndex === null) return legalMoves;
    if (!piecePlacement[selectedSquareIndex]) return legalMoves;

    const selectedPieceType = getPieceType(piecePlacement[selectedSquareIndex]);

    switch (selectedPieceType) {
        case PieceCodes.QUEEN:
        case PieceCodes.ROOK:
        case PieceCodes.BISHOP:
            legalMoves.push(
                ...getSlidingMoves(piecePlacement, selectedSquareIndex),
            );
            break;
        case PieceCodes.KNIGHT:
            legalMoves.push(
                ...getKnightMoves(piecePlacement, selectedSquareIndex),
            );
            break;
        case PieceCodes.KING:
            legalMoves.push(
                ...getKingMoves(piecePlacement, selectedSquareIndex),
            );
            break;

        case PieceCodes.PAWN:
            legalMoves.push(
                ...getPawnMoves(piecePlacement, selectedSquareIndex),
            );
            break;
    }

    return legalMoves;
};
