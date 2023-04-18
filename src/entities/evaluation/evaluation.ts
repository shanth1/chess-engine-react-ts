import { getMaterialCounting } from "./materialCounting";

export const getEvaluation = (piecePlacement: Array<number>): number => {
    return getMaterialCounting(piecePlacement);
};
