//? NONE: 0 index
//? KING: 1 index
//? QUEEN: 2 index
//? ROOK: 3 index
//? BISHOP: 4 index
//? KNIGHT: 5 index
//? PAWN: 6 index
import { PieceColors } from "shared/enums";
import { getPieceColor, getPieceType } from "shared/pieceInfo";
import {
    bishopBlackEvaluation,
    bishopWhiteEvaluation,
    kingBlackEvaluation,
    kingWhiteEvaluation,
    knightBlackEvaluation,
    knightWhiteEvaluation,
    pawnBlackEvaluation,
    pawnWhiteEvaluation,
    queenBlackEvaluation,
    queenWhiteEvaluation,
    rookBlackEvaluation,
    rookWhiteEvaluation,
} from "./colorConsideration";

const pieceValues: Array<Array<Array<number>>> = [
    [],
    [kingWhiteEvaluation, kingBlackEvaluation],
    [queenWhiteEvaluation, queenBlackEvaluation],
    [rookWhiteEvaluation, rookBlackEvaluation],
    [bishopWhiteEvaluation, bishopBlackEvaluation],
    [knightWhiteEvaluation, knightBlackEvaluation],
    [pawnWhiteEvaluation, pawnBlackEvaluation],
];

export const getPieceEvaluation = (piecePlacement: Array<number>): number => {
    let pieceEvaluation: number = 0;
    for (let index in piecePlacement) {
        const piece = piecePlacement[index];
        if (!piece) continue;
        const colorIndex: number =
            getPieceColor(piece) === PieceColors.WHITE ? 0 : 1;
        const colorConsideration =
            getPieceColor(piece) === PieceColors.WHITE ? 1 : -1;
        pieceEvaluation +=
            pieceValues[getPieceType(piece)][colorIndex][index] *
            colorConsideration;
    }

    return pieceEvaluation;
};
