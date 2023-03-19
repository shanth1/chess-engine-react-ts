import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";
import { getPieceType } from "widgets/ChessGame/lib/gettingPieceInfo/PieceType";
import { PieceTypes } from "widgets/ChessGame/types/enums";
import { getPseudoLegalMoves } from "../pseudoLegalMoves/pseudoLegalMoves";

export const getLegalMoves = (
    piecePlacement: Array<number>,
    selectedSquareIndex: number,
): Array<number> => {
    const legalMoves: Array<number> = [];

    const pseudoLegalMoves: Array<number> = getPseudoLegalMoves(
        piecePlacement,
        selectedSquareIndex,
    );

    pseudoLegalMoves.forEach((targetIndex) => {
        const activeColor = getPieceColor(piecePlacement[selectedSquareIndex]);
        const piecePlacementAfterMove = piecePlacement.slice();
        const selectedPiece = piecePlacement[selectedSquareIndex];
        piecePlacementAfterMove[selectedSquareIndex] = PieceTypes.NONE;
        piecePlacementAfterMove[targetIndex] = selectedPiece;

        let isLegal = true;

        for (let squareIndex = 0; squareIndex < 64; squareIndex++) {
            if (!piecePlacementAfterMove[squareIndex]) continue;
            const pieceColor = getPieceColor(
                piecePlacementAfterMove[squareIndex],
            );
            if (pieceColor === activeColor) continue;
            const enemyPseudoLegalMoves = getPseudoLegalMoves(
                piecePlacementAfterMove,
                squareIndex,
            );
            for (let index = 0; index < enemyPseudoLegalMoves.length; index++) {
                const enemyTargetIndex = enemyPseudoLegalMoves[index];

                if (!piecePlacementAfterMove[enemyTargetIndex]) continue;
                const pieceType = getPieceType(
                    piecePlacementAfterMove[enemyTargetIndex],
                );
                const pieceColor = getPieceColor(
                    piecePlacementAfterMove[enemyTargetIndex],
                );

                if (
                    pieceColor === activeColor &&
                    pieceType === PieceTypes.KING
                ) {
                    isLegal = false;
                    break;
                }
            }
        }

        if (isLegal) legalMoves.push(targetIndex);
    });

    return legalMoves;
};
