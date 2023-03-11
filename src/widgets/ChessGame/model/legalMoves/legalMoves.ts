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

    const selectedPieceCode = piecePlacement[selectedSquareIndex];
    const selectedColorCode = getConjunction(selectedPieceCode, colorBitMask);

    for (let index = 0; index < piecePlacement.length; index++) {
        const pieceCode = piecePlacement[index];
        if (pieceCode) {
            const colorCode = getConjunction(pieceCode, colorBitMask);
            if (selectedColorCode === colorCode) continue;
            legalMoves.push(index);
        } else {
            legalMoves.push(index);
        }
    }

    return legalMoves;
};
