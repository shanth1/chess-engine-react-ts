import { CastlingRightsCodes, ColorCodes, Colors, PieceCodes } from "./enums";

export interface ISquare {
    readonly index: number;
    readonly color: Colors;
    readonly name: string;
    isAvailable: boolean;
    pieceCode: PieceCodes;
}

export interface IGameSlice {
    piecePlacement: Array<PieceCodes>;
    activeColor: ColorCodes;
    castlingRights: CastlingRightsCodes;
    enPassant: string;
    halfMoveClock: number;
    fullMoveNumber: number;
}
