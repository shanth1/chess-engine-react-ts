import { getPieceType } from "./../../lib/gettingPieceInfo/PieceType";
import { Index } from "widgets/ChessGame/types/types";
import { colorBitMask } from "widgets/ChessGame/lib/bitMasks";
import { getConjunction } from "widgets/ChessGame/lib/booleanOperations";
import {
    directionOffsets,
    precomputedSlidingMoves,
} from "widgets/ChessGame/lib/precomputedData/slidingMoves";
import { PieceCodes } from "widgets/ChessGame/types/enums";
import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";

export const getSlidingMoves = (
    piecePlacement: Array<PieceCodes>,
    selectedSquareIndex: number,
): Array<Index> => {
    const legalMoves: Array<number> = [];

    const selectedPiece = getPieceType(piecePlacement[selectedSquareIndex]);
    const activeColor = getPieceColor(piecePlacement[selectedSquareIndex]);

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
