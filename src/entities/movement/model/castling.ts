import { getPieceColor, getPieceType } from "shared/pieceInfo";
import { PieceColors, PieceTypes } from "shared/enums";
import { IBoard } from "pages/GamePage/model/gameSlice";

export const resolveCastling = (
    board: IBoard,
    selectedIndex: number,
    targetIndex: number,
) => {
    if (isCastling(selectedIndex, targetIndex)) {
        moveRookWhileCastling(board, selectedIndex, targetIndex);
    }
};

const isCastling = (selectedIndex: number, targetIndex: number): boolean => {
    return Math.abs(selectedIndex - targetIndex) === 2 ? true : false;
};

const moveRookWhileCastling = (
    board: IBoard,
    selectedIndex: number,
    targetIndex: number,
): void => {
    if (
        getPieceType(board.position[selectedIndex]) === PieceTypes.KING &&
        Math.abs(selectedIndex - targetIndex) >= 2 &&
        Math.abs(selectedIndex - targetIndex) <= 4
    ) {
        const rookStartIndex =
            targetIndex % 8 >= 6 ? selectedIndex + 3 : selectedIndex - 4;
        const rookTargetIndex =
            targetIndex % 8 >= 6 ? selectedIndex + 1 : selectedIndex - 1;

        const rook = board.position[rookStartIndex];

        if (getPieceColor(rook) === PieceColors.WHITE) {
            const index = board.whitePiecePositions.indexOf(rookStartIndex);
            board.whitePiecePositions[index] = rookTargetIndex;
        } else {
            const index = board.blackPiecePositions.indexOf(rookStartIndex);
            board.blackPiecePositions[index] = rookTargetIndex;
        }

        board.position[rookStartIndex] = PieceTypes.NONE;
        board.position[rookTargetIndex] = rook;
    }
};
