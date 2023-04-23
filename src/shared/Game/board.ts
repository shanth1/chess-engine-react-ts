import { CastlingRights } from "shared/enums";

export interface IBoard {
    position: Array<number>;
    activeColor: "white" | "black";
    castlingRights:
        | CastlingRights.BlackKingSide
        | CastlingRights.BlackQueenSide
        | CastlingRights.BothSides
        | CastlingRights.NeitherSide
        | CastlingRights.WhiteKingSide
        | CastlingRights.WitheQueenSide;
    enPassant: "-" | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
    halfMoveClock: number;
    fullMoveNumber: number;
}

export const board: IBoard = {
    position: [
        11, 0, 12, 10, 9, 12, 13, 11, 14, 14, 14, 0, 14, 14, 14, 14, 0, 0, 13,
        0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 22, 21, 0, 0, 22, 22, 22, 22, 20, 22, 22, 22, 19, 21, 20, 18, 17, 0,
        0, 19,
    ],
    activeColor: "white",
    castlingRights: CastlingRights.BothSides,
    enPassant: "-",
    halfMoveClock: 0,
    fullMoveNumber: 0,
};
