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
    const activeColor = board.activeColor;
    const newBoard = getBoardAfterMove(board, [startIndex, targetIndex]);
    if (activeColor === PieceColors.WHITE) {
        for (let index in newBoard.whitePiecePositions) {
            const pieceIndex = newBoard.whitePiecePositions[index];
            const moves = getPseudoLegalMoves(newBoard, pieceIndex);
            if (checkAttackOnKing(newBoard.position, pieceIndex, moves)) {
                newBoard.isCheck = true;
                break;
            }
        }
        let isAvailableToMove = false;
        for (let index in newBoard.blackPiecePositions) {
            const pieceIndex = newBoard.blackPiecePositions[index];
            const moves = getLegalMoves(newBoard, pieceIndex);
            isAvailableToMove = moves.length ? true : false;
            if (isAvailableToMove) break;
        }

        if (newBoard.isCheck) {
            if (isAvailableToMove) {
                newBoard.isStalemate = true;
            } else {
                newBoard.isCheckmate = true;
            }
        }
    } else {
        for (let index in newBoard.blackPiecePositions) {
            const pieceIndex = newBoard.blackPiecePositions[index];
            const moves = getPseudoLegalMoves(newBoard, pieceIndex);
            if (checkAttackOnKing(newBoard.position, pieceIndex, moves)) {
                newBoard.isCheck = true;
                break;
            }
        }

        let isAvailableToMove = false;
        for (let index in newBoard.whitePiecePositions) {
            const pieceIndex = newBoard.whitePiecePositions[index];
            const moves = getLegalMoves(newBoard, pieceIndex);
            isAvailableToMove = moves.length ? true : false;
            if (isAvailableToMove) break;
        }

        if (newBoard.isCheck) {
            if (isAvailableToMove) {
                newBoard.isStalemate = true;
            } else {
                newBoard.isCheckmate = true;
            }
        }
    }

    return newBoard;
};
