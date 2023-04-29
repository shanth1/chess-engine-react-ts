import { CastlingRights, PieceColors } from "shared/enums";

interface IHistorySlice {
    move: Array<number>;
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
    capturedPiece: number;
}

export interface IGameState {
    board: IBoard;
    history: Array<IHistorySlice>;
    capturedWhitePieces: Array<number>;
    capturedBlackPieces: Array<number>;
}
