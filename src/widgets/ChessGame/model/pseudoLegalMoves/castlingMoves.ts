import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";
import { precomputedKingMoves } from "widgets/ChessGame/lib/precomputedData/kingMoves";
import { PieceColors } from "widgets/ChessGame/types/enums";

export const getCastlingMoves = (
    piecePlacement: Array<number>,
    selectedSquareIndex: number,
): Array<number> => {
    const pseudoLegalMoves: Array<number> = [];

    const friendlyColor = getPieceColor(piecePlacement[selectedSquareIndex]);

    if (
        (selectedSquareIndex === 60 && friendlyColor === PieceColors.WHITE) ||
        (selectedSquareIndex === 4 && friendlyColor === PieceColors.BLACK)
    ) {
        direction: for (let direction = 2; direction <= 3; direction++) {
            const offset = precomputedKingMoves[selectedSquareIndex][direction];
            let targetSquareIndex = selectedSquareIndex + offset;
            while (
                !(targetSquareIndex % 8 === 0 || targetSquareIndex % 8 === 7)
            ) {
                if (piecePlacement[targetSquareIndex]) continue direction;
                targetSquareIndex += offset;
            }
            pseudoLegalMoves.push(selectedSquareIndex + 2 * offset);
        }
    }
    return pseudoLegalMoves;
};
