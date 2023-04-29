import { PieceTypes } from "shared/enums";
import { getPieceType } from "shared/pieceInfo";
import { resolveCastling } from "./castling";
import { resolveEnPassant } from "./enPassant";
import { movePiece } from "./movePiece";
import { resolvePawnPromotion } from "./pawnPromotion";

export const getBoardAfterMove = (
    board: IBoard,
    move: Array<number>,
): IBoard => {
    const [startIndex, targetIndex] = move;

    let newBoard: IBoard = {
        move: move,
        moveType: null,
        isPromotion: null,
        isCheck: null,
        isCheckmate: null,
        isStalemate: null,
        position: board.position.slice(),
        activeColor: board.activeColor,
        castlingRights: board.castlingRights,
        enPassant: board.enPassant,
        halfMoveClock: board.halfMoveClock,
        fullMoveNumber: board.fullMoveNumber,
        whitePiecePositions: board.whitePiecePositions.slice(),
        blackPiecePositions: board.blackPiecePositions.slice(),
        capturedWhitePieces: board.capturedWhitePieces.slice(),
        capturedBlackPieces: board.capturedBlackPieces.slice(),
    };
    const selectedPiece = board.position[startIndex];
    switch (getPieceType(selectedPiece)) {
        case PieceTypes.PAWN:
            movePiece(newBoard, startIndex, targetIndex);
            resolveEnPassant(newBoard, startIndex, targetIndex);
            resolvePawnPromotion(newBoard, targetIndex);
            break;
        case PieceTypes.KING:
            movePiece(newBoard, startIndex, targetIndex);
            resolveCastling(newBoard, startIndex, targetIndex);
            break;
        case PieceTypes.ROOK:
        case PieceTypes.BISHOP:
        case PieceTypes.KNIGHT:
        case PieceTypes.QUEEN:
            movePiece(newBoard, startIndex, targetIndex);
            break;
        default:
            alert("wrong piece");
    }

    return newBoard;
};
