import { getPieceColor } from "api/pieceInfo";
import { precomputedKnightMoves } from "api/precomputedData";

export const getKnightMoves = (
    piecePlacement: Array<number>,
    selectedIndex: number,
): Array<number> => {
    const legalMoves: Array<number> = [];

    const activeColor = getPieceColor(piecePlacement[selectedIndex]);
    const directionNumber = 8;
    for (let direction = 0; direction < directionNumber; direction++) {
        const offset = precomputedKnightMoves[selectedIndex][direction];
        if (offset === 0) continue;
        const targetSquareIndex = selectedIndex + offset;
        if (piecePlacement[targetSquareIndex]) {
            const pieceColor = getPieceColor(piecePlacement[targetSquareIndex]);
            if (pieceColor === activeColor) continue;
            legalMoves.push(targetSquareIndex);
        } else legalMoves.push(targetSquareIndex);
    }

    return legalMoves;
};
