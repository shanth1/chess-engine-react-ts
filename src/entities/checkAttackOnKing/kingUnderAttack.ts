import { getPieceColor, getPieceType } from "shared/pieceInfo";
import { PieceTypes } from "shared/enums";

export const checkAttackOnKing = (
    position: Array<number>,
    selectedPiece: number,
    moves: number[][],
): boolean => {
    const pieceColor = getPieceColor(selectedPiece);
    let isAttackOnKing = false;
    for (let index = 0; index < moves.length; index++) {
        const targetIndex = moves[index][1];

        if (!position[targetIndex]) continue;
        const pieceUnderAttack = position[targetIndex];

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
