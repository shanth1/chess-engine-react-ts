import { getPieceColor } from "api/lib/gettingPieceInfo/PieceColor";
import { getPieceType } from "api/lib/gettingPieceInfo/PieceType";
import { PieceTypes } from "widgets/ChessGame/types/enums";
import { ISquare } from "widgets/ChessGame/types/interfaces";

export const getTargetIndex = (
    squares: Array<ISquare>,
    index: number,
    activeColor: number,
): number => {
    let targetIndex = index;

    if (
        getPieceType(squares[index].pieceCode) === PieceTypes.ROOK &&
        getPieceColor(squares[index].pieceCode) === activeColor
    ) {
        targetIndex = index % 8 === 7 ? index - 1 : index + 2;
    }
    return targetIndex;
};
