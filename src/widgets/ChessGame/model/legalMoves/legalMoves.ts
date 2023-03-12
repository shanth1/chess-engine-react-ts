import { getSlidingMoves } from "./slidingMoves";
import { pieceBitMask } from "./../../lib/bitMasks";
import { colorBitMask } from "widgets/ChessGame/lib/bitMasks";
import { getConjunction } from "widgets/ChessGame/lib/booleanOperations";
import { PieceCodes } from "widgets/ChessGame/types/enums";
import { Index } from "widgets/ChessGame/types/types";

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

    if (
        selectedPiece === PieceCodes.QUEEN ||
        selectedPiece === PieceCodes.ROOK ||
        selectedPiece === PieceCodes.BISHOP
    ) {
        legalMoves.push(
            ...getSlidingMoves(
                piecePlacement,
                selectedSquareIndex,
                selectedPiece,
                activeColor,
            ),
        );
    } else {
        for (let index = 0; index < piecePlacement.length; index++) {
            const pieceCode = piecePlacement[index];
            if (pieceCode) {
                const colorCode = getConjunction(pieceCode, colorBitMask);
                if (activeColor === colorCode) continue;
                legalMoves.push(index);
            } else {
                legalMoves.push(index);
            }
        }
    }

    return legalMoves;
};
