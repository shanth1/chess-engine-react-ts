import {
    directionOffsets,
    precomputedSlidingMoves,
} from "widgets/ChessGame/lib/precomputedData/precomputedSlidingMoves";
import { pieceBitMask } from "./../../lib/bitMasks";
import { colorBitMask } from "widgets/ChessGame/lib/bitMasks";
import { getConjunction } from "widgets/ChessGame/lib/booleanOperations";
import { PieceCodes } from "widgets/ChessGame/types/enums";
import { Index } from "widgets/ChessGame/types/types";

export const getLegalMoves = (
    piecePlacement: Array<PieceCodes>,
    selectedSquareIndex: Index | null,
): Array<Index> => {
    const legalMoves: Array<Index> = [];

    if (selectedSquareIndex === null) return legalMoves;
    if (!piecePlacement[selectedSquareIndex]) return legalMoves;

    const selectedPieceCode = getConjunction(
        piecePlacement[selectedSquareIndex],
        pieceBitMask,
    );
    const activeColorCode = getConjunction(
        piecePlacement[selectedSquareIndex],
        colorBitMask,
    );

    if (
        selectedPieceCode === PieceCodes.QUEEN ||
        selectedPieceCode === PieceCodes.ROOK ||
        selectedPieceCode === PieceCodes.BISHOP
    ) {
        const startDirectionIndex =
            selectedPieceCode === PieceCodes.BISHOP ? 4 : 0;
        const endDirectionIndex = selectedPieceCode === PieceCodes.ROOK ? 4 : 8;

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
                    if (pieceColorCode === activeColorCode) break;
                    legalMoves.push(targetIndex);
                    break;
                }
                legalMoves.push(targetIndex);
            }
        }
    } else {
        for (let index = 0; index < piecePlacement.length; index++) {
            const pieceCode = piecePlacement[index];
            if (pieceCode) {
                const colorCode = getConjunction(pieceCode, colorBitMask);
                if (activeColorCode === colorCode) continue;
                legalMoves.push(index);
            } else {
                legalMoves.push(index);
            }
        }
    }

    return legalMoves;
};
