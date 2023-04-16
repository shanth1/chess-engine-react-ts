import { getPieceColor, getPieceType } from "shared/pieceInfo";
import { PieceTypes } from "shared/enums";

export const checkAttackOnKing = (
    piecePlacement: Array<number>,
    selectedPiece: number,
    legalMoves: Array<number>,
): boolean => {
    const pieceColor = getPieceColor(selectedPiece);
    let isAttackOnKing = false;
    for (let index = 0; index < legalMoves.length; index++) {
        const targetIndex = legalMoves[index];

        if (!piecePlacement[targetIndex]) continue;
        const pieceUnderAttack = piecePlacement[targetIndex];

        if (
            getPieceColor(pieceUnderAttack) !== pieceColor &&
            getPieceType(pieceUnderAttack) === PieceTypes.KING
        ) {
            isAttackOnKing = true;
            break;
        }
    }
    return isAttackOnKing;
};
