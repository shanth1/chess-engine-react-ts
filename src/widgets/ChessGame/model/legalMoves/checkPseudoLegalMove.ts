import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";
import { getPseudoLegalMoves } from "../pseudoLegalMoves/pseudoLegalMoves";
import { checkAttackOnKing } from "./kingUnderAttack";
import { makeTestMove } from "./testMove";

export const checkPseudoLegalMove = (
    piecePlacement: Array<number>,
    pseudoLegalMove: number,
    selectedIndex: number,
    castlingRights: number,
    enPassant: string,
): boolean => {
    const targetIndex = pseudoLegalMove;

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
