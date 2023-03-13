import { precomputedKingMoves } from "widgets/ChessGame/lib/precomputedData/kingMoves";
import { colorBitMask } from "widgets/ChessGame/lib/bitMasks";
import { ColorCodes, PieceCodes } from "widgets/ChessGame/types/enums";

export const getKingMoves = (
    piecePlacement: Array<PieceCodes>,
    selectedSquareIndex: number,
    activeColor: ColorCodes,
) => {
    const legalMoves: Array<number> = [];

    const directionNumber = 8;
    for (let direction = 0; direction < directionNumber; direction++) {
        const offset = precomputedKingMoves[selectedSquareIndex][direction];
        if (offset === 0) continue;
        const targetSquareIndex = selectedSquareIndex + offset;
        if (piecePlacement[targetSquareIndex]) {
            const piece = piecePlacement[targetSquareIndex];
            const pieceColor = piece & colorBitMask;
            if (pieceColor === activeColor) continue;
            legalMoves.push(targetSquareIndex);
        } else legalMoves.push(targetSquareIndex);
    }

    return legalMoves;
};