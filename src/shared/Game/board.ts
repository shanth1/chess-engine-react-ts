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
    position: Array(64),
    activeColor: "white",
    castlingRights: CastlingRights.BothSides,
    enPassant: "-",
    halfMoveClock: 0,
    fullMoveNumber: 0,
};
