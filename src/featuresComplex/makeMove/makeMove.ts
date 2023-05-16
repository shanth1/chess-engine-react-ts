import { getBoardAfterMove } from "entities/boardAfterMove";
import { checkAttackOnKing } from "entities/checkAttackOnKing";
import { getPseudoLegalMoves } from "entities/pseudoLegalMoves";
import { getLegalMoves } from "features/legalMoves";
import { PieceColors } from "shared/enums";

export const makeMove = (
    board: IBoard,
    startIndex: number,
    targetIndex: number,
): IBoard => {
    const newBoard = getBoardAfterMove(board, [startIndex, targetIndex]);

    const piecePositions =
        board.activeColor === PieceColors.WHITE
            ? newBoard.whitePiecePositions
            : newBoard.blackPiecePositions;

    for (let index = 0; index < piecePositions.length; index++) {
        const boardIndex = piecePositions[index];
        const piece = newBoard.position[boardIndex];
        const moves = getPseudoLegalMoves(newBoard, boardIndex);
        if (checkAttackOnKing(newBoard.position, piece, moves)) {
            newBoard.isCheck = true;
            break;
        }
    }

    const enemyPiecePosition =
        board.activeColor === PieceColors.WHITE
            ? newBoard.blackPiecePositions
            : newBoard.whitePiecePositions;

    let isAvailableToMove = false;
    for (let index in enemyPiecePosition) {
        const pieceIndex = enemyPiecePosition[index];
        const moves = getLegalMoves(newBoard, pieceIndex);
        isAvailableToMove = moves.length ? true : false;
        if (isAvailableToMove) break;
    }

    if (!isAvailableToMove) {
        if (newBoard.isCheck) {
            newBoard.isCheckmate = true;
        } else {
            newBoard.isStalemate = true;
        }
    }

    return newBoard;
};
