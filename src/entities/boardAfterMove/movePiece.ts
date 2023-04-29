import { squares } from "widgets/ChessGame/components/Board/model/squares";
import { getPieceColor, getPieceType } from "shared/pieceInfo";
import { CastlingRights, PieceColors, PieceTypes } from "shared/enums";

export const movePiece = (
    board: IBoard,
    selectedIndex: number,
    targetIndex: number,
) => {
    board.moveType = "movement";
    const piece = board.position[selectedIndex];
    const pieceType = getPieceType(piece);
    const targetPiece = board.position[targetIndex];
    if (targetPiece) {
        if (getPieceColor(targetPiece) === PieceColors.WHITE) {
            const index = board.whitePiecePositions.indexOf(targetIndex);
            if (index >= 0) board.whitePiecePositions.splice(index, 1);
            board.capturedWhitePieces.push(targetPiece);
            board.moveType = "capture";
        } else {
            const index = board.blackPiecePositions.indexOf(targetIndex);
            if (index >= 0) board.blackPiecePositions.splice(index, 1);
            board.capturedBlackPieces.push(targetPiece);
            board.moveType = "capture";
        }
    }

    if (getPieceColor(piece) === PieceColors.WHITE) {
        const index = board.whitePiecePositions.indexOf(selectedIndex);
        board.whitePiecePositions[index] = targetIndex;
    } else {
        const index = board.blackPiecePositions.indexOf(selectedIndex);
        board.blackPiecePositions[index] = targetIndex;
    }

    board.position[selectedIndex] = PieceTypes.NONE;
    board.position[targetIndex] = piece;
    board.activeColor =
        board.activeColor === PieceColors.WHITE
            ? PieceColors.BLACK
            : PieceColors.WHITE;

    if (pieceType === PieceTypes.KING || pieceType === PieceTypes.ROOK) {
        const squareName = squares[selectedIndex].name;
        if (squareName === "e1") {
            board.castlingRights =
                board.castlingRights &
                ~CastlingRights.WhiteKingSide &
                ~CastlingRights.WitheQueenSide;
        } else if (squareName === "h1") {
            board.castlingRights =
                board.castlingRights & ~CastlingRights.WhiteKingSide;
        } else if (squareName === "a1") {
            board.castlingRights =
                board.castlingRights & ~CastlingRights.WitheQueenSide;
        } else if (squareName === "e8") {
            board.castlingRights =
                board.castlingRights &
                ~CastlingRights.BlackKingSide &
                ~CastlingRights.BlackQueenSide;
        } else if (squareName === "h8") {
            board.castlingRights =
                board.castlingRights & ~CastlingRights.BlackKingSide;
        } else if (squareName === "a8") {
            board.castlingRights =
                board.castlingRights & ~CastlingRights.BlackQueenSide;
        }
    }
};
