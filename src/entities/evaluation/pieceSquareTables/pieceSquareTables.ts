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

//? NONE: 0 index
//? KING: 1 index
//? QUEEN: 2 index
//? ROOK: 3 index
//? BISHOP: 4 index
//? KNIGHT: 5 index
//? PAWN: 6 index
type PieceSquareTable = Array<number>;
const pieceValues: Array<Array<PieceSquareTable>> = [
    [], // for NONE piece type
    [kingWhiteEvaluation, kingBlackEvaluation],
    [queenWhiteEvaluation, queenBlackEvaluation],
    [rookWhiteEvaluation, rookBlackEvaluation],
    [bishopWhiteEvaluation, bishopBlackEvaluation],
    [knightWhiteEvaluation, knightBlackEvaluation],
    [pawnWhiteEvaluation, pawnBlackEvaluation],
];

export const getPieceSquareEvaluation = (
    piecePlacement: Array<number>,
): number => {
    let pieceSquareEvaluation: number = 0;
    for (let squareIndex in piecePlacement) {
        if (!piecePlacement[squareIndex]) continue;
        const pieceType: number = getPieceType(piecePlacement[squareIndex]);
        const pieceColor: number = getPieceColor(piecePlacement[squareIndex]);

        if (pieceColor === PieceColors.WHITE) {
            pieceSquareEvaluation += pieceValues[pieceType][0][squareIndex];
        } else if (pieceColor === PieceColors.BLACK) {
            pieceSquareEvaluation -= pieceValues[pieceType][1][squareIndex];
        } else {
            alert("unknown piece color");
        }
    }
    return pieceSquareEvaluation / 10;
};
