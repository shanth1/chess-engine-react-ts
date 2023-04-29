import { getPieceColor } from "shared/pieceInfo";
import { precomputedKnightMoves } from "./precomputedData/knightMoves";

export const getKnightMoves = (
    piecePlacement: Array<number>,
    selectedIndex: number,
): Array<Array<number>> => {
    const legalMoves: Array<Array<number>> = [];

    const activeColor = getPieceColor(piecePlacement[selectedIndex]);
    const directionNumber = 8;
    for (let direction = 0; direction < directionNumber; direction++) {
        const offset = precomputedKnightMoves[selectedIndex][direction];
        if (offset === 0) continue;
        const targetIndex = selectedIndex + offset;
        if (piecePlacement[targetIndex]) {
            const pieceColor = getPieceColor(piecePlacement[targetIndex]);
            if (pieceColor === activeColor) continue;
            legalMoves.push([selectedIndex, targetIndex]);
        } else legalMoves.push([selectedIndex, targetIndex]);
    }

    return legalMoves;
};
