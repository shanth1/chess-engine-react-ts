import { Colors } from "./enums";

export interface ISquare {
    readonly index: number;
    readonly color: Colors;
    readonly name: string;
    isLegalToMove: boolean;
    pieceCode: number;
}
