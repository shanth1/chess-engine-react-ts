import { getPieceColor, getPieceType } from "shared/pieceInfo";
import { PieceTypes } from "shared/enums";
import {
    directionOffsets,
    precomputedSlidingMoves,
} from "./precomputedData/slidingMoves";

export const getSlidingMoves = (
    position: Array<number>,
    selectedIndex: number,
): Array<Array<number>> => {
    const legalMoves: Array<Array<number>> = [];

    const selectedPiece = getPieceType(position[selectedIndex]);
    const activeColor = getPieceColor(position[selectedIndex]);

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

            if (position[targetIndex]) {
                const pieceColor = getPieceColor(position[targetIndex]);
                if (pieceColor === activeColor) break;
                legalMoves.push([selectedIndex, targetIndex]);
                break;
            }
            legalMoves.push([selectedIndex, targetIndex]);
        }
    }
    return legalMoves;
};
