import { getMaterialCounting } from "./materialCounting/materialCounting";
import { getPieceSquareEvaluation } from "./pieceSquareTables/pieceSquareTables";

export const getEvaluation = (piecePlacement: Array<number>): number => {
    const evaluation: number =
        getMaterialCounting(piecePlacement) +
        getPieceSquareEvaluation(piecePlacement);
    return evaluation;
};
