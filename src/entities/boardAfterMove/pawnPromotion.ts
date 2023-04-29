import { PieceColors, PieceTypes } from "shared/enums";
import { getPieceCode } from "shared/pieceInfo";

export const resolvePawnPromotion = (board: IBoard, targetIndex: number) => {
    const targetRank = Math.floor(targetIndex / 8);
    if (targetRank !== 0 && targetRank !== 7) return;
    const queenColor =
        board.activeColor === PieceColors.WHITE
            ? PieceColors.BLACK
            : PieceColors.WHITE;
    const newQueen = getPieceCode(PieceTypes.QUEEN, queenColor);
    board.position[targetIndex] = newQueen;
    board.isPromotion = true;
};
