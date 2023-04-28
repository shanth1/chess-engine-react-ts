import { IBoard } from "pages/GamePage/model/gameSlice";
import { PieceColors, PieceTypes } from "shared/enums";
import { getPieceCode, getPieceColor, getPieceType } from "shared/pieceInfo";

export const resolvePawnPromotion = (
    board: IBoard,
    selectedIndex: number,
    targetIndex: number,
) => {
    if (!checkPawnPromotion(board.position, selectedIndex, targetIndex)) return;
    const newQueen = getPieceCode(PieceTypes.QUEEN, board.activeColor);
    board.position[selectedIndex] = newQueen;
};

const checkPawnPromotion = (
    piecePlacement: Array<number>,
    selectedIndex: number,
    targetIndex: number,
): boolean => {
    return (getPieceType(piecePlacement[selectedIndex]) === PieceTypes.PAWN &&
        getPieceColor(piecePlacement[selectedIndex]) === PieceColors.WHITE &&
        Math.floor(targetIndex / 8) === 0) ||
        (getPieceType(piecePlacement[selectedIndex]) === PieceTypes.PAWN &&
            getPieceColor(piecePlacement[selectedIndex]) ===
                PieceColors.BLACK &&
            Math.floor(targetIndex / 8) === 7)
        ? true
        : false;
};
