import { CastlingRights, PieceColors } from "shared/enums";

export interface IBoard {
    position: Array<number>;
    activeColor: PieceColors;
    castlingRights:
        | CastlingRights.BlackKingSide
        | CastlingRights.BlackQueenSide
        | CastlingRights.BothSides
        | CastlingRights.NeitherSide
        | CastlingRights.WhiteKingSide
        | CastlingRights.WitheQueenSide;
    enPassant: string;
    halfMoveClock: number;
    fullMoveNumber: number;
}

export const board: IBoard = {
    position: Array(64),
    activeColor: PieceColors.WHITE,
    castlingRights: CastlingRights.BothSides,
    enPassant: "-",
    halfMoveClock: 0,
    fullMoveNumber: 0,
};
