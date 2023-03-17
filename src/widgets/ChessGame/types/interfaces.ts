import { CastlingRightsCodes, PieceColors, Colors } from "./enums";

export interface ISquare {
    readonly index: number;
    readonly color: Colors;
    readonly name: string;
    isLegalToMove: boolean;
    pieceCode: number;
}

export interface IGameSlice {
    piecePlacement: Array<number>;
    activeColor: PieceColors;
    castlingRights: CastlingRightsCodes;
    enPassant: string;
    halfMoveClock: number;
    fullMoveNumber: number;
}
