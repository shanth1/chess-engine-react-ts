import { getKnightMoves } from "./knightMoves";
import { getSlidingMoves } from "./slidingMoves";
import { getKingMoves } from "./kingMoves";
import { getPawnMoves } from "./pawnMoves";
import { getCastlingMoves } from "./castlingMoves";
import { getPieceType } from "shared/pieceInfo";
import { PieceTypes } from "shared/enums";

export const getPseudoLegalMoves = (
    piecePlacement: Array<number>,
    selectedIndex: number,
    castlingRights: number,
    enPassant: string,
): number[][] => {
    let pseudoLegalMoves: Array<Array<number>> = [];

    const selectedPieceType = getPieceType(piecePlacement[selectedIndex]);

    switch (selectedPieceType) {
        case PieceTypes.QUEEN:
        case PieceTypes.ROOK:
        case PieceTypes.BISHOP:
            pseudoLegalMoves = getSlidingMoves(piecePlacement, selectedIndex);
            break;
        case PieceTypes.KNIGHT:
            pseudoLegalMoves = getKnightMoves(piecePlacement, selectedIndex);
            break;
        case PieceTypes.KING:
            pseudoLegalMoves = getKingMoves(piecePlacement, selectedIndex);
            pseudoLegalMoves.push(
                ...getCastlingMoves(
                    piecePlacement,
                    selectedIndex,
                    castlingRights,
                ),
            );
            break;

        case PieceTypes.PAWN:
            pseudoLegalMoves = getPawnMoves(
                piecePlacement,
                selectedIndex,
                enPassant,
            );
            break;
    }

    return pseudoLegalMoves;
};
