import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";
import { precomputedKnightMoves } from "widgets/ChessGame/lib/precomputedData/knightMoves";

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
