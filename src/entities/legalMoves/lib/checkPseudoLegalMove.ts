import { getPieceColor } from "shared/pieceInfo";
import { getPassedKingMove } from "../model/passedKingMove";
import { getPseudoLegalMoves } from "../model/pseudoLegalMoves/pseudoLegalMoves";
import { checkCastlingType } from "./castlingType";
import { checkAttackOnKing } from "./kingUnderAttack";
import { makeTestMove } from "./testMove";

export const checkPseudoLegalMove = (
    piecePlacement: Array<number>,
    pseudoLegalMove: number[],
    legalMoves: number[][],
    castlingRights: number,
    enPassant: string,
): boolean => {
    const [selectedIndex, targetIndex] = pseudoLegalMove;
    const selectedPiece = piecePlacement[selectedIndex];

    const isCastlingMove = checkCastlingType(
        selectedPiece,
        targetIndex,
        selectedIndex,
    );

    if (isCastlingMove) {
        const passedKingMove = getPassedKingMove(selectedIndex, targetIndex);
        let isLegal = false;
        legalMoves.forEach((legalMove) => {
            if (legalMove[1] === passedKingMove) {
                isLegal = true;
            }
        });
        if (!isLegal) return false;
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

        const enemyPseudoLegalMoves: number[][] = getPseudoLegalMoves(
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
