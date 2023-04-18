import { PieceColors } from "shared/enums";
import { getPieceColor, getPieceType } from "shared/pieceInfo";

//? NONE: 0 index
//? KING: 1 index
//? QUEEN: 2 index
//? ROOK: 3 index
//? BISHOP: 4 index
//? KNIGHT: 5 index
//? PAWN: 6 index
const pieceValues: ReadonlyArray<number> = [0, 0, 900, 500, 300, 300, 100];

export const getMaterialCounting = (piecePlacement: Array<number>): number => {
    let materialCounting = 0;
    for (let index in piecePlacement) {
        if (!piecePlacement[index]) continue;
        const piece = piecePlacement[index];
        if (getPieceColor(piece) === PieceColors.WHITE) {
            materialCounting += pieceValues[getPieceType(piece)];
        } else if (getPieceColor(piece) === PieceColors.BLACK) {
            materialCounting -= pieceValues[getPieceType(piece)];
        } else {
            alert("unknown piece color");
        }
    }
    return materialCounting / 100;
};
