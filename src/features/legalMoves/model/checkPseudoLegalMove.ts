import { PieceColors, PieceTypes } from "shared/enums";
import { getPieceColor, getPieceType } from "shared/pieceInfo";
import { getPassedKingMove } from "./passedKingMove";
import { getPseudoLegalMoves } from "../../../entities/pseudoLegalMoves/pseudoLegalMoves";
import { getBoardAfterMove } from "entities/boardAfterMove";
import { checkAttackOnKing } from "entities/checkAttackOnKing";

const checkKingUnderAttack = (board: IBoard, kingIndex: number) => {
    const kingColor = getPieceColor(board.position[kingIndex]);
    for (let index = 0; index < board.position.length; index++) {
        if (!board.position[index]) continue;
        if (getPieceColor(board.position[index]) === kingColor) continue;
        const enemyMoves = getPseudoLegalMoves(board, index);
        if (checkAttackOnKing(board.position, index, enemyMoves)) return true;
    }
    return false;
};

export const checkPseudoLegalMove = (
    board: IBoard,
    pseudoLegalMove: number[],
    legalMoves: number[][],
): boolean => {
    const selectedPiece = board.position[pseudoLegalMove[0]];
    const isKing = getPieceType(selectedPiece) === PieceTypes.KING;
    const boardAfterMove: IBoard = getBoardAfterMove(board, pseudoLegalMove);
    if (isKing) {
        const isKingUnderAttack = checkKingUnderAttack(
            board,
            pseudoLegalMove[0],
        );
        if (
            (isKingUnderAttack && boardAfterMove.moveType === "O-O") ||
            (isKingUnderAttack && boardAfterMove.moveType === "O-O-O")
        ) {
            return false;
        }
    }

    let isLegal = true;

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
    debugger;
    return isLegal ? true : false;
};
