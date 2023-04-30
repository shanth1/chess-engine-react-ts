import { PieceColors } from "shared/enums";
import { getPieceColor } from "shared/pieceInfo";
import { getPassedKingMove } from "./passedKingMove";
import { getPseudoLegalMoves } from "../../../entities/pseudoLegalMoves/pseudoLegalMoves";
import { getBoardAfterMove } from "entities/boardAfterMove";
import { checkAttackOnKing } from "entities/checkAttackOnKing";

export const checkPseudoLegalMove = (
    board: IBoard,
    pseudoLegalMove: number[],
    legalMoves: number[][],
): boolean => {
    const selectedPiece = board.position[pseudoLegalMove[0]];

    let isLegal = true;
    const boardAfterMove: IBoard = getBoardAfterMove(board, pseudoLegalMove);

    if (
        boardAfterMove.moveType === "O-O" ||
        boardAfterMove.moveType === "O-O-O"
    ) {
        const passedKingMove = getPassedKingMove(pseudoLegalMove);
        let isPassedMoveLegal = false;
        legalMoves.forEach((legalMove) => {
            if (legalMove[1] === passedKingMove[1]) {
                isPassedMoveLegal = true;
            }
        });
        if (!isPassedMoveLegal) return false;
    }
    if (getPieceColor(selectedPiece) === PieceColors.WHITE) {
        for (let index in boardAfterMove.blackPiecePositions) {
            const enemyIndex = boardAfterMove.blackPiecePositions[index];
            const enemyMoves: number[][] = getPseudoLegalMoves(
                boardAfterMove,
                enemyIndex,
            );
            const enemyPiece = boardAfterMove.position[enemyIndex];
            const isKingUnderAttack: boolean = checkAttackOnKing(
                boardAfterMove.position,
                enemyPiece,
                enemyMoves,
            );
            if (isKingUnderAttack) {
                isLegal = false;
                break;
            }
        }
    } else {
        for (let index in boardAfterMove.whitePiecePositions) {
            const enemyIndex = boardAfterMove.whitePiecePositions[index];
            const enemyMoves: number[][] = getPseudoLegalMoves(
                boardAfterMove,
                enemyIndex,
            );
            const isKingUnderAttack: boolean = checkAttackOnKing(
                boardAfterMove.position,
                enemyIndex,
                enemyMoves,
            );
            if (isKingUnderAttack) {
                isLegal = false;
                break;
            }
        }
    }
    return isLegal ? true : false;
};
