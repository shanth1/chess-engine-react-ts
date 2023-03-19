import { PieceTypes } from "../../types/enums";
import { getPieceType } from "../../lib/gettingPieceInfo/PieceType";
import {
    directionOffsets,
    precomputedSlidingMoves,
} from "widgets/ChessGame/lib/precomputedData/slidingMoves";
import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";

export const getSlidingMoves = (
    piecePlacement: Array<number>,
    selectedSquareIndex: number,
): Array<number> => {
    const legalMoves: Array<number> = [];

    const selectedPiece = getPieceType(piecePlacement[selectedSquareIndex]);
    const activeColor = getPieceColor(piecePlacement[selectedSquareIndex]);

    const startDirectionIndex = selectedPiece === PieceTypes.BISHOP ? 4 : 0;
    const endDirectionIndex = selectedPiece === PieceTypes.ROOK ? 4 : 8;

    for (
        let directionIndex: number = startDirectionIndex;
        directionIndex < endDirectionIndex;
        directionIndex++
    ) {
        const numSquareToEdge =
            precomputedSlidingMoves[selectedSquareIndex][directionIndex];

        for (
            let squareCounter: number = 0;
            squareCounter < numSquareToEdge;
            squareCounter++
        ) {
            let targetIndex: number =
                selectedSquareIndex +
                directionOffsets[directionIndex] * (squareCounter + 1);

            if (piecePlacement[targetIndex]) {
                const pieceColor = getPieceColor(piecePlacement[targetIndex]);
                if (pieceColor === activeColor) break;
                legalMoves.push(targetIndex);
                break;
            }
            legalMoves.push(targetIndex);
        }
    }
    return legalMoves;
};
