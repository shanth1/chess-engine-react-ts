import { colorBitMask } from "widgets/ChessGame/lib/bitMasks";
import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";
import { precomputedKnightMoves } from "widgets/ChessGame/lib/precomputedData/knightMoves";
import { PieceCodes } from "widgets/ChessGame/types/enums";

export const getKnightMoves = (
    piecePlacement: Array<PieceCodes>,
    selectedSquareIndex: number,
) => {
    const legalMoves: Array<number> = [];

    const activeColor = getPieceColor(piecePlacement[selectedSquareIndex]);
    const directionNumber = 8;
    for (let direction = 0; direction < directionNumber; direction++) {
        const offset = precomputedKnightMoves[selectedSquareIndex][direction];
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
