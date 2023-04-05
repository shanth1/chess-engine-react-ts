import { PieceTypes } from "../../../widgets/ChessGame/types/enums";
import { getPieceType } from "../../lib/gettingPieceInfo/PieceType";
import {
    directionOffsets,
    precomputedSlidingMoves,
} from "api/lib/precomputedData/slidingMoves";
import { getPieceColor } from "api/lib/gettingPieceInfo/PieceColor";

export const getSlidingMoves = (
    piecePlacement: Array<number>,
    selectedIndex: number,
): Array<number> => {
    const legalMoves: Array<number> = [];

    const selectedPiece = getPieceType(piecePlacement[selectedIndex]);
    const activeColor = getPieceColor(piecePlacement[selectedIndex]);

    const startDirectionIndex = selectedPiece === PieceTypes.BISHOP ? 4 : 0;
    const endDirectionIndex = selectedPiece === PieceTypes.ROOK ? 4 : 8;

    for (
        let directionIndex: number = startDirectionIndex;
        directionIndex < endDirectionIndex;
        directionIndex++
    ) {
        const numSquareToEdge =
            precomputedSlidingMoves[selectedIndex][directionIndex];

        for (
            let squareCounter: number = 0;
            squareCounter < numSquareToEdge;
            squareCounter++
        ) {
            let targetIndex: number =
                selectedIndex +
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
