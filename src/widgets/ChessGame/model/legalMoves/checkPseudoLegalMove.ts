import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";
import { getPieceType } from "widgets/ChessGame/lib/gettingPieceInfo/PieceType";
import { PieceTypes } from "widgets/ChessGame/types/enums";
import { getPseudoLegalMoves } from "../pseudoLegalMoves/pseudoLegalMoves";

export const checkPseudoLegalMove = (
    piecePlacement: Array<number>,
    pseudoLegalMove: number,
    legalMoves: Array<number>,
    selectedIndex: number,
    castlingRights: number,
    enPassant: string,
): boolean => {
    const targetIndex = pseudoLegalMove;
    const piecePlacementAfterMove = piecePlacement.slice();

    if (
        getPieceType(piecePlacement[selectedIndex]) === PieceTypes.KING &&
        Math.abs(targetIndex - selectedIndex) === 2
    ) {
        const intermediateCastlingMove =
            targetIndex - selectedIndex > 0 ? targetIndex - 1 : targetIndex + 1;
        if (!legalMoves.includes(intermediateCastlingMove)) return false;
    }

    const selectedPiece = piecePlacement[selectedIndex];
    piecePlacementAfterMove[selectedIndex] = PieceTypes.NONE;
    piecePlacementAfterMove[targetIndex] = selectedPiece;

    let isLegal = true;

    for (let squareIndex = 0; squareIndex < 64; squareIndex++) {
        if (!piecePlacementAfterMove[squareIndex]) continue;

        const friendlyColor = getPieceColor(piecePlacement[selectedIndex]);
        const pieceColor = getPieceColor(piecePlacementAfterMove[squareIndex]);
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
            const pieceUnderAttack = piecePlacementAfterMove[enemyTargetIndex];

            if (
                getPieceColor(pieceUnderAttack) === friendlyColor &&
                getPieceType(pieceUnderAttack) === PieceTypes.KING
            ) {
                isLegal = false;
                break;
            }
        }
    }

    return isLegal ? true : false;
};
