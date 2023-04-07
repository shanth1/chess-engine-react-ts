import { getPieceColor } from "api/lib/gettingPieceInfo/PieceColor";
import { getPseudoLegalMoves } from "../pseudoLegalMoves/pseudoLegalMoves";
import { checkCastlingType } from "./castlingType";
import { checkAttackOnKing } from "./kingUnderAttack";
import { getPassedKingMove } from "./passedKingMove";
import { makeTestMove } from "./testMove";

export const checkPseudoLegalMove = (
    piecePlacement: Array<number>,
    pseudoLegalMove: number,
    legalMoves: Array<number>,
    selectedIndex: number,
    castlingRights: number,
    enPassant: string,
): boolean => {
    const targetIndex = pseudoLegalMove;
    const selectedPiece = piecePlacement[selectedIndex];

    const isCastlingMove = checkCastlingType(
        selectedPiece,
        targetIndex,
        selectedIndex,
    );

    if (isCastlingMove) {
        const passedKingMove = getPassedKingMove(selectedIndex, targetIndex);
        if (!legalMoves.includes(passedKingMove)) return false;
    }

    let isLegal = true;
    const piecePlacementAfterMove = makeTestMove(
        piecePlacement,
        selectedIndex,
        targetIndex,
    );

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

        const isKingUnderAttack: boolean = checkAttackOnKing(
            piecePlacementAfterMove,
            piecePlacementAfterMove[squareIndex],
            enemyPseudoLegalMoves,
        );

        if (isKingUnderAttack) {
            isLegal = false;
            break;
        }
    }

    return isLegal ? true : false;
};
