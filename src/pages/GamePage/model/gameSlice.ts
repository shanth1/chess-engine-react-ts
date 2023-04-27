import { createSlice } from "@reduxjs/toolkit";
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
    whitePieces: Array<number>;
    blackPieces: Array<number>;
}

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

const board: IBoard = {
    position: Array(64),
    activeColor: PieceColors.WHITE,
    castlingRights: CastlingRights.BothSides,
    enPassant: "-",
    halfMoveClock: 0,
    fullMoveNumber: 0,
    whitePieces: [],
    blackPieces: [],
};

interface IGameState {
    board: IBoard;
    history: Array<IHistorySlice>;
    capturedWhitePieces: Array<number>;
    capturedBlackPieces: Array<number>;
}

const initialState: IGameState = {
    board: board,
    history: [],
    capturedWhitePieces: [],
    capturedBlackPieces: [],
};

const gameSlice = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {},
});

export const gameSliceActions = gameSlice.actions;
export const gameSliceReducers = gameSlice.reducer;
