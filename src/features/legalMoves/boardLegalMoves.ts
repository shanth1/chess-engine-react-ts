import { getLegalMoves } from "features/legalMoves";
import { PieceColors } from "shared/enums";

export const getAllLegalMoves = (
    board: IBoard,
    color: PieceColors,
): Array<number[]> => {
    const allLegalMoves: Array<number[]> = [];
    const pieces =
        color === PieceColors.WHITE
            ? board.whitePiecePositions
            : board.blackPiecePositions;

    pieces.forEach((pieceIndex) => {
        allLegalMoves.push(...getLegalMoves(board, pieceIndex));
    });
    return allLegalMoves;
};
