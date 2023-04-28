import { makeMove } from "entities/movement";
import { IBoard } from "pages/GamePage/model/gameSlice";
import { PieceColors } from "shared/enums";
import { getPieceColor } from "shared/pieceInfo";
import { getPassedKingMove } from "../model/passedKingMove";
import { getPseudoLegalMoves } from "../model/pseudoLegalMoves/pseudoLegalMoves";
import { checkCastlingType } from "./castlingType";
import { checkAttackOnKing } from "./kingUnderAttack";

export const checkPseudoLegalMove = (
    board: IBoard,
    pseudoLegalMove: number[],
    legalMoves: number[][],
): boolean => {
    const [selectedIndex, targetIndex] = pseudoLegalMove;
    const selectedPiece = board.position[selectedIndex];

    const isCastlingMove = checkCastlingType(
        selectedPiece,
        targetIndex,
        selectedIndex,
    );

    if (isCastlingMove) {
        const passedKingMove = getPassedKingMove(selectedIndex, targetIndex);
        let isPassedMoveLegal = false;
        legalMoves.forEach((legalMove) => {
            if (legalMove[1] === passedKingMove) {
                isPassedMoveLegal = true;
            }
        });
        if (!isPassedMoveLegal) return false;
    }

    let isLegal = true;
    const boardAfterMove: IBoard = makeMove(board, selectedIndex, targetIndex);

    if (getPieceColor(selectedPiece) === PieceColors.WHITE) {
        for (let index in board.blackPiecePositions) {
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
        for (let index in board.whitePiecePositions) {
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
