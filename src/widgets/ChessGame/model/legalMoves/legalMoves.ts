import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";
import { getPieceType } from "widgets/ChessGame/lib/gettingPieceInfo/PieceType";
import { PieceTypes } from "widgets/ChessGame/types/enums";
import { getPseudoLegalMoves } from "../pseudoLegalMoves/pseudoLegalMoves";

export const getLegalMoves = (
    piecePlacement: Array<number>,
    selectedSquareIndex: number,
    castlingRights: number,
    enPassant: string,
): Array<number> => {
    const legalMoves: Array<number> = [];

    const pseudoLegalMoves: Array<number> = getPseudoLegalMoves(
        piecePlacement,
        selectedSquareIndex,
        castlingRights,
        enPassant,
    );

    for (
        let pseudoLegalMove = 0;
        pseudoLegalMove < pseudoLegalMoves.length;
        pseudoLegalMove++
    ) {
        const targetIndex = pseudoLegalMoves[pseudoLegalMove];
        const piecePlacementAfterMove = piecePlacement.slice();

        if (
            getPieceType(piecePlacement[selectedSquareIndex]) ===
                PieceTypes.KING &&
            Math.abs(targetIndex - selectedSquareIndex) === 2
        ) {
            const intermediateCastlingMove =
                targetIndex - selectedSquareIndex > 0
                    ? targetIndex - 1
                    : targetIndex + 1;
            if (!legalMoves.includes(intermediateCastlingMove)) break;
        }
        const selectedPiece = piecePlacement[selectedSquareIndex];
        piecePlacementAfterMove[selectedSquareIndex] = PieceTypes.NONE;
        piecePlacementAfterMove[targetIndex] = selectedPiece;

        let isLegal = true;

        for (let squareIndex = 0; squareIndex < 64; squareIndex++) {
            if (!piecePlacementAfterMove[squareIndex]) continue;

            const friendlyColor = getPieceColor(
                piecePlacement[selectedSquareIndex],
            );
            const pieceColor = getPieceColor(
                piecePlacementAfterMove[squareIndex],
            );
            if (pieceColor === friendlyColor) continue;
            const enemyPseudoLegalMoves = getPseudoLegalMoves(
                piecePlacementAfterMove,
                squareIndex,
                castlingRights,
                enPassant,
            );

            for (let index = 0; index < enemyPseudoLegalMoves.length; index++) {
                const enemyTargetIndex = enemyPseudoLegalMoves[index];

                if (!piecePlacementAfterMove[enemyTargetIndex]) continue;
                const pieceUnderAttack =
                    piecePlacementAfterMove[enemyTargetIndex];

                if (
                    getPieceColor(pieceUnderAttack) === friendlyColor &&
                    getPieceType(pieceUnderAttack) === PieceTypes.KING
                ) {
                    isLegal = false;
                    break;
                }
            }
        }

        if (isLegal) legalMoves.push(targetIndex);
    }

    return legalMoves;
};
