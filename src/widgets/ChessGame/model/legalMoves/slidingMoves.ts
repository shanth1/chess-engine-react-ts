import { Index } from "widgets/ChessGame/types/types";
import { ColorCodes } from "./../../types/enums";
import { colorBitMask } from "widgets/ChessGame/lib/bitMasks";
import { getConjunction } from "widgets/ChessGame/lib/booleanOperations";
import {
    directionOffsets,
    precomputedSlidingMoves,
} from "widgets/ChessGame/lib/precomputedData/slidingMoves";
import { PieceCodes } from "widgets/ChessGame/types/enums";

export const getSlidingMoves = (
    piecePlacement: Array<PieceCodes>,
    selectedSquareIndex: number,
    selectedPiece: PieceCodes,
    activeColor: ColorCodes,
): Array<Index> => {
    const legalMoves: Array<number> = [];

    const startDirectionIndex = selectedPiece === PieceCodes.BISHOP ? 4 : 0;
    const endDirectionIndex = selectedPiece === PieceCodes.ROOK ? 4 : 8;

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
                const pieceColorCode = getConjunction(
                    piecePlacement[targetIndex],
                    colorBitMask,
                );
                if (pieceColorCode === activeColor) break;
                legalMoves.push(targetIndex);
                break;
            }
            legalMoves.push(targetIndex);
        }
    }
    return legalMoves;
};
