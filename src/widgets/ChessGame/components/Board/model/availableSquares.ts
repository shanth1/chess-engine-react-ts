import { getConjunction } from "./../../../lib/booleanOperations";
import { colorBitMask } from "widgets/ChessGame/lib/bitMasks";
import { ISquare } from "widgets/ChessGame/types/interfaces";

export const getAvailableSquares = (
    squares: Array<ISquare>,
    selectedSquare: ISquare | null,
) => {
    if (!selectedSquare) {
        squares.forEach((square) => {
            square.isAvailable = false;
        });
    } else {
        squares.forEach((square) => {
            if (
                getConjunction(square.pieceCode, colorBitMask) !==
                    getConjunction(selectedSquare.pieceCode, colorBitMask) &&
                selectedSquare.pieceCode
            ) {
                square.isAvailable = true;
            } else {
                square.isAvailable = false;
            }
        });
    }
};
