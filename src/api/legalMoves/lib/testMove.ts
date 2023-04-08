import { PieceTypes } from "widgets/ChessGame/types/enums";

export const makeTestMove = (
    piecePlacement: Array<number>,
    selectedIndex: number,
    targetIndex: number,
): Array<number> => {
    const selectedPiece = piecePlacement[selectedIndex];
    const newPiecePlacement = piecePlacement.slice();
    newPiecePlacement[selectedIndex] = PieceTypes.NONE;
    newPiecePlacement[targetIndex] = selectedPiece;

    return newPiecePlacement;
};
