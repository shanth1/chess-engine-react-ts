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

    const selectedPieceCode = getConjunction(
        piecePlacement[selectedSquareIndex],
        pieceBitMask,
    );
    const selectedColorCode = getConjunction(
        piecePlacement[selectedSquareIndex],
        colorBitMask,
    );

    if (selectedPieceCode === PieceCodes.QUEEN) {
        console.log("queen");
    } else {
        console.log("not queen");
    }

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
