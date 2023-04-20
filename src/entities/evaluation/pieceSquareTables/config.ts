const PA = 50; // positive A
const PB = 30; // positive B
const PC = 30; // positive C
const PD = 20; // positive C
const PE = 10; // positive C
const ZZ = 0; // zero
const NE = -10; // negative C
const ND = -20; // negative B
const NC = -30; // negative A
const NB = -40; // negative A
const NA = -50; // negative A

export const pawnEvaluation: Array<Array<number>> = [
    [ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ],
    [PA, PA, PA, PA, PA, PA, PA, PA],
    [PB, PB, PB, PB, PB, PB, PB, PB],
    [PC, PC, PC, PB, PA, PC, PC, PC],
    [PD, PE, PC, PB, PA, PD, PE, PD],
    [PE, PE, PE, PC, PD, PD, PD, PD],
    [PD, PD, PE, NE, ND, PD, PC, PD],
    [ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ],
];

export const knightEvaluation: Array<Array<number>> = [
    [NA, NB, NC, ND, ND, NC, NB, NA],
    [NB, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, NB],
    [NC, ZZ, ZZ, PD, PD, ZZ, ZZ, NC],
    [ND, ZZ, PC, PA, PB, PD, ZZ, ND],
    [ND, ZZ, PC, PB, PB, PD, ZZ, ND],
    [NC, ZZ, PB, PD, PD, PA, ZZ, NC],
    [NB, NC, ND, PC, PD, NA, NC, NB],
    [NA, NB, NC, ND, ND, NC, NB, NA],
];

export const bishopEvaluation: Array<Array<number>> = [
    [NA, NB, ND, ND, ND, ND, ND, NA],
    [NC, PC, ZZ, ZZ, ZZ, ZZ, ZZ, ND],
    [PE, ZZ, ZZ, PE, ZZ, PE, ZZ, NE],
    [NE, PD, PE, PE, PE, ZZ, PB, NE],
    [PE, ZZ, PC, PC, PC, PE, ZZ, NE],
    [NE, ZZ, PE, PD, PC, PE, ZZ, NE],
    [NB, ZZ, ZZ, PE, PD, ZZ, PE, NE],
    [NA, NB, NC, ND, NE, NC, NB, NA],
];

export const rookEvaluation: Array<Array<number>> = [
    [PA, PA, PA, PA, PA, PA, PA, PA],
    [PA, PB, PB, PB, PB, PB, PB, PB],
    [PC, PC, PC, PC, PC, PC, PC, PC],
    [ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ],
    [ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ],
    [ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ],
    [ZZ, ZZ, PB, PC, PC, PB, ZZ, ZZ],
    [ND, NA, NC, PA, PA, PA, NA, NC],
];

export const queenEvaluation: Array<Array<number>> = [
    [NC, ZZ, ZZ, ZZ, ZZ, NE, NB, NA],
    [NE, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ND],
    [NE, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ],
    [NE, ZZ, ZZ, ZZ, PE, ZZ, ZZ, ZZ],
    [NE, ZZ, ZZ, PE, PD, PD, ZZ, ZZ],
    [NE, ZZ, ZZ, PE, PD, PC, ZZ, ZZ],
    [NE, ZZ, PD, PD, PB, PE, ZZ, NE],
    [NA, NC, ND, NE, ZZ, ND, NC, NA],
];

export const kingEvaluation: Array<Array<number>> = [
    [ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ],
    [ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ],
    [ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ],
    [ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ],
    [ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ],
    [ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ, ZZ],
    [ZZ, PE, NE, ND, ND, ND, PD, ZZ],
    [ZZ, PB, PB, NC, NE, NC, PA, ZZ],
];
