import { makeDefaultMove } from "./model/defaultMove";
import { getPieceType } from "shared/pieceInfo";
import { PieceTypes } from "shared/enums";
import { resolveCastling } from "./model/castling";
import { resolveEnPassant } from "./model/enPassant";
import { resolvePawnPromotion } from "./model/pawnPromotion";

export const makeMove = (
    board: IBoard,
    selectedIndex: number,
    targetIndex: number,
): IBoard => {
    let boardAfterMove: IBoard = {
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
    const selectedPiece = board.position[selectedIndex];
    switch (getPieceType(selectedPiece)) {
        case PieceTypes.PAWN:
            resolveEnPassant(boardAfterMove, selectedIndex, targetIndex);
            resolvePawnPromotion(boardAfterMove, selectedIndex, targetIndex);
            boardAfterMove = makeDefaultMove(
                boardAfterMove,
                selectedIndex,
                targetIndex,
            );
            break;
        case PieceTypes.KING:
            resolveCastling(boardAfterMove, selectedIndex, targetIndex);
            boardAfterMove = makeDefaultMove(
                boardAfterMove,
                selectedIndex,
                targetIndex,
            );
            break;
        case PieceTypes.ROOK:
        case PieceTypes.BISHOP:
        case PieceTypes.KNIGHT:
        case PieceTypes.QUEEN:
            boardAfterMove = makeDefaultMove(
                boardAfterMove,
                selectedIndex,
                targetIndex,
            );
            break;
        default:
            alert("wrong piece");
    }
    return boardAfterMove;
};
