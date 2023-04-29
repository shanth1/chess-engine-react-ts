import { getKnightMoves } from "./knightMoves";
import { getSlidingMoves } from "./slidingMoves";
import { getKingMoves } from "./kingMoves";
import { getPawnMoves } from "./pawnMoves";
import { getCastlingMoves } from "./castlingMoves";
import { getPieceType } from "shared/pieceInfo";
import { PieceTypes } from "shared/enums";

export const getPseudoLegalMoves = (
    board: IBoard,
    selectedIndex: number,
): number[][] => {
    let pseudoLegalMoves: Array<Array<number>> = [];

    const selectedPieceType = getPieceType(board.position[selectedIndex]);

    switch (selectedPieceType) {
        case PieceTypes.QUEEN:
        case PieceTypes.ROOK:
        case PieceTypes.BISHOP:
            pseudoLegalMoves = getSlidingMoves(board.position, selectedIndex);
            break;
        case PieceTypes.KNIGHT:
            pseudoLegalMoves = getKnightMoves(board.position, selectedIndex);
            break;
        case PieceTypes.KING:
            pseudoLegalMoves = getKingMoves(board.position, selectedIndex);
            pseudoLegalMoves.push(
                ...getCastlingMoves(
                    board.position,
                    board.castlingRights,
                    selectedIndex,
                ),
            );
            break;

        case PieceTypes.PAWN:
            pseudoLegalMoves = getPawnMoves(
                board.position,
                board.enPassant,
                selectedIndex,
            );
            break;
    }

    return pseudoLegalMoves;
};
