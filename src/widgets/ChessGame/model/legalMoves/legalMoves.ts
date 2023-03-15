import { getKnightMoves } from "./knightMoves";
import { getSlidingMoves } from "./slidingMoves";
import { pieceBitMask } from "./../../lib/bitMasks";
import { colorBitMask } from "widgets/ChessGame/lib/bitMasks";
import { getConjunction } from "widgets/ChessGame/lib/booleanOperations";
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

    const selectedPiece = getConjunction(
        piecePlacement[selectedSquareIndex],
        pieceBitMask,
    );
    const activeColor = getConjunction(
        piecePlacement[selectedSquareIndex],
        colorBitMask,
    );

    switch (selectedPiece) {
        case PieceCodes.QUEEN:
        case PieceCodes.ROOK:
        case PieceCodes.BISHOP:
            legalMoves.push(
                ...getSlidingMoves(
                    piecePlacement,
                    selectedSquareIndex,
                    selectedPiece,
                    activeColor,
                ),
            );
            break;
        case PieceCodes.KNIGHT:
            legalMoves.push(
                ...getKnightMoves(
                    piecePlacement,
                    selectedSquareIndex,
                    activeColor,
                ),
            );
            break;
        case PieceCodes.KING:
            legalMoves.push(
                ...getKingMoves(
                    piecePlacement,
                    selectedSquareIndex,
                    activeColor,
                ),
            );
            break;

        case PieceCodes.PAWN:
            legalMoves.push(
                ...getPawnMoves(
                    piecePlacement,
                    selectedSquareIndex,
                    activeColor,
                ),
            );
            break;
    }

    return legalMoves;
};
