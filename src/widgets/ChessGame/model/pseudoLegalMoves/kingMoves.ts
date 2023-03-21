import { PieceColors } from "widgets/ChessGame/types/enums";
import { precomputedKingMoves } from "widgets/ChessGame/lib/precomputedData/kingMoves";
import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";

export const getKingMoves = (
    piecePlacement: Array<number>,
    selectedSquareIndex: number,
): Array<number> => {
    const pseudoLegalMoves: Array<number> = [];

    const friendlyColor = getPieceColor(piecePlacement[selectedSquareIndex]);

    const directionNumber = 8;
    for (let direction = 0; direction < directionNumber; direction++) {
        const offset = precomputedKingMoves[selectedSquareIndex][direction];
        if (offset === 0) continue;
        const targetSquareIndex = selectedSquareIndex + offset;
        if (piecePlacement[targetSquareIndex]) {
            const targetPieceColor = getPieceColor(
                piecePlacement[targetSquareIndex],
            );
            if (targetPieceColor === friendlyColor) continue;
            pseudoLegalMoves.push(targetSquareIndex);
        } else pseudoLegalMoves.push(targetSquareIndex);
    }
    if (
        (selectedSquareIndex === 60 && friendlyColor === PieceColors.WHITE) ||
        (selectedSquareIndex === 4 && friendlyColor === PieceColors.BLACK)
    ) {
        for (let direction = 2; direction <= 3; direction++) {
            const offset = precomputedKingMoves[selectedSquareIndex][direction];
            const targetSquareIndex = selectedSquareIndex + 2 * offset;
            if (piecePlacement[targetSquareIndex]) {
                const targetPieceColor = getPieceColor(
                    piecePlacement[targetSquareIndex],
                );
                if (targetPieceColor === friendlyColor) continue;
                pseudoLegalMoves.push(targetSquareIndex);
            } else pseudoLegalMoves.push(targetSquareIndex);
        }
    }

    return pseudoLegalMoves;
};
