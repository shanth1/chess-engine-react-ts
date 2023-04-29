import { getPieceColor, getPieceType } from "shared/pieceInfo";
import { PieceColors, PieceTypes } from "shared/enums";
import { getFileName } from "shared/boardInfo";

export const resolveEnPassant = (
    board: IBoard,
    selectedIndex: number,
    targetIndex: number,
) => {
    if (checkEnPassantCapture(board.position, selectedIndex, targetIndex)) {
        const captureIndex =
            getPieceColor(board.position[selectedIndex]) === PieceColors.WHITE
                ? targetIndex + 8
                : targetIndex - 8;

        if (getPieceColor(board.position[captureIndex]) === PieceColors.WHITE) {
            const index = board.whitePiecePositions.indexOf(targetIndex);
            if (index > 0) board.whitePiecePositions.splice(index, 1);
            board.capturedWhitePieces.push(board.position[captureIndex]);
        } else {
            const index = board.blackPiecePositions.indexOf(targetIndex);
            if (index > 0) board.blackPiecePositions.splice(index, 1);
            board.capturedBlackPieces.push(board.position[captureIndex]);
        }
        board.position[captureIndex] = PieceTypes.NONE;
    }

    if (checkDoubleMove(board.position, selectedIndex, targetIndex)) {
        const fileName = getFileName(targetIndex);
        board.enPassant = fileName;
    } else {
        board.enPassant = "-";
    }
};

const checkEnPassantCapture = (
    piecePlacement: Array<number>,
    selectedIndex: number,
    targetIndex: number,
): boolean => {
    return getPieceType(piecePlacement[selectedIndex]) === PieceTypes.PAWN &&
        Math.abs(selectedIndex - targetIndex) % 8 !== 0 &&
        !piecePlacement[targetIndex]
        ? true
        : false;
};

const checkDoubleMove = (
    piecePlacement: Array<number>,
    selectedIndex: number,
    targetIndex: number,
) => {
    return getPieceType(piecePlacement[selectedIndex]) === PieceTypes.PAWN &&
        Math.abs(selectedIndex - targetIndex) === 16
        ? true
        : false;
};
