import { precomputedKingMoves } from "api/precomputedData";
import { getPieceColor } from "shared";

export const getKingMoves = (
    piecePlacement: Array<number>,
    selectedIndex: number,
): Array<number> => {
    const pseudoLegalMoves: Array<number> = [];

    const friendlyColor = getPieceColor(piecePlacement[selectedIndex]);

    const directionNumber = 8;
    for (let direction = 0; direction < directionNumber; direction++) {
        const offset = precomputedKingMoves[selectedIndex][direction];
        if (offset === 0) continue;
        const targetSquareIndex = selectedIndex + offset;
        if (piecePlacement[targetSquareIndex]) {
            const targetPieceColor = getPieceColor(
                piecePlacement[targetSquareIndex],
            );
            if (targetPieceColor === friendlyColor) continue;
            pseudoLegalMoves.push(targetSquareIndex);
        } else pseudoLegalMoves.push(targetSquareIndex);
    }

    return pseudoLegalMoves;
};
