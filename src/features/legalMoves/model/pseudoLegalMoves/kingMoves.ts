import { getPieceColor } from "shared/pieceInfo";
import { precomputedKingMoves } from "../../lib/precomputedData/kingMoves";

export const getKingMoves = (
    piecePlacement: Array<number>,
    selectedIndex: number,
): Array<Array<number>> => {
    const pseudoLegalMoves: Array<Array<number>> = [];

    const friendlyColor = getPieceColor(piecePlacement[selectedIndex]);

    const directionNumber = 8;
    for (let direction = 0; direction < directionNumber; direction++) {
        const offset = precomputedKingMoves[selectedIndex][direction];
        if (offset === 0) continue;
        const targetIndex = selectedIndex + offset;
        if (piecePlacement[targetIndex]) {
            const targetPieceColor = getPieceColor(piecePlacement[targetIndex]);
            if (targetPieceColor === friendlyColor) continue;
            pseudoLegalMoves.push([selectedIndex, targetIndex]);
        } else pseudoLegalMoves.push([selectedIndex, targetIndex]);
    }

    return pseudoLegalMoves;
};
