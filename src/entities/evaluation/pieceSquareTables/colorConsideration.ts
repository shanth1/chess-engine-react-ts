import {
    bishopEvaluation,
    kingEvaluation,
    knightEvaluation,
    pawnEvaluation,
    queenEvaluation,
    rookEvaluation,
} from "./config";

const pawnWhiteEvaluation: Array<number> = [];
const pawnBlackEvaluation: Array<number> = [];
const knightWhiteEvaluation: Array<number> = [];
const knightBlackEvaluation: Array<number> = [];
const bishopWhiteEvaluation: Array<number> = [];
const bishopBlackEvaluation: Array<number> = [];
const rookWhiteEvaluation: Array<number> = [];
const rookBlackEvaluation: Array<number> = [];
const queenWhiteEvaluation: Array<number> = [];
const queenBlackEvaluation: Array<number> = [];
const kingWhiteEvaluation: Array<number> = [];
const kingBlackEvaluation: Array<number> = [];

//* pawn
//? white
pawnEvaluation.forEach((rank) => {
    pawnWhiteEvaluation.push(...rank);
});
//?black
pawnEvaluation
    .slice()
    .reverse()
    .forEach((rank) => {
        pawnBlackEvaluation.push(...rank);
    });

//*knight
//?white
knightEvaluation.forEach((rank) => {
    knightWhiteEvaluation.push(...rank);
});
//?black
knightEvaluation
    .slice()
    .reverse()
    .forEach((rank) => {
        knightBlackEvaluation.push(...rank);
    });

//*bishop
//?white
bishopEvaluation.forEach((rank) => {
    bishopWhiteEvaluation.push(...rank);
});
//?black
bishopEvaluation
    .slice()
    .reverse()
    .forEach((rank) => {
        bishopBlackEvaluation.push(...rank);
    });

//*rook
//?white
rookEvaluation.forEach((rank) => {
    rookWhiteEvaluation.push(...rank);
});
//?black
rookEvaluation
    .slice()
    .reverse()
    .forEach((rank) => {
        rookBlackEvaluation.push(...rank);
    });

//*queen
//?white
queenEvaluation.forEach((rank) => {
    queenWhiteEvaluation.push(...rank);
});
//?black
queenEvaluation
    .slice()
    .reverse()
    .forEach((rank) => {
        queenBlackEvaluation.push(...rank);
    });

//*king
//?white
kingEvaluation.forEach((rank) => {
    kingWhiteEvaluation.push(...rank);
});
//?black
kingEvaluation
    .slice()
    .reverse()
    .forEach((rank) => {
        kingBlackEvaluation.push(...rank);
    });

export {
    pawnWhiteEvaluation,
    pawnBlackEvaluation,
    knightWhiteEvaluation,
    knightBlackEvaluation,
    bishopWhiteEvaluation,
    bishopBlackEvaluation,
    rookWhiteEvaluation,
    rookBlackEvaluation,
    queenWhiteEvaluation,
    queenBlackEvaluation,
    kingWhiteEvaluation,
    kingBlackEvaluation,
};
