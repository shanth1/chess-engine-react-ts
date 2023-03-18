import { PieceTypes } from "widgets/ChessGame/types/enums";
import { getPieceType } from "./../../lib/gettingPieceInfo/PieceType";
import { precomputedKingMoves } from "widgets/ChessGame/lib/precomputedData/kingMoves";
import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";

export const getKingMoves = (
    piecePlacement: Array<number>,
    selectedSquareIndex: number,
): Array<number> => {
    const legalMoves: Array<number> = [];

    const activeColor = getPieceColor(piecePlacement[selectedSquareIndex]);
    const directionNumber = 8;
    for (let direction = 0; direction < directionNumber; direction++) {
        const offset = precomputedKingMoves[selectedSquareIndex][direction];
        if (offset === 0) continue;
        const targetSquareIndex = selectedSquareIndex + offset;
        if (piecePlacement[targetSquareIndex]) {
            const pieceColor = getPieceColor(piecePlacement[targetSquareIndex]);
            if (pieceColor === activeColor) continue;
            const enemyPieceType = getPieceType(
                piecePlacement[targetSquareIndex],
            );
            if (enemyPieceType === PieceTypes.KING) continue;
            legalMoves.push(targetSquareIndex);
        } else legalMoves.push(targetSquareIndex);
    }

    return legalMoves;
};
