import { Colors, PieceCodes } from "./enums";

export interface ISquare {
    readonly index: number;
    readonly color: Colors;
    readonly name: string;
    isAvailable: boolean;
    pieceCode: PieceCodes;
}
