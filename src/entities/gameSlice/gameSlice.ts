import { createSlice } from "@reduxjs/toolkit";
import { CastlingRights, PieceColors } from "shared/enums";
import { IGameState } from "./types/interfaces";

const initialBoard: IBoard = {
    move: null,
    moveType: null,
    isPromotion: null,
    isCheck: null,
    isCheckmate: null,
    isStalemate: null,
    position: Array(64),
    activeColor: PieceColors.WHITE,
    castlingRights: CastlingRights.BothSides,
    enPassant: "-",
    halfMoveClock: 0,
    fullMoveNumber: 0,
    whitePiecePositions: [],
    blackPiecePositions: [],
    capturedWhitePieces: [],
    capturedBlackPieces: [],
};

const initialState: IGameState = {
    board: initialBoard,
    history: [initialBoard],
};

const gameSlice = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {
        loafFen: (state, action) => {
            state.board = action.payload.board;
            state.history = [state.board];
        },
        updateBoard: (state, action) => {
            state.board = action.payload.board;
            state.history.push(action.payload.board);
        },
        getPreviousMove: (state) => {
            if (state.history.length >= 2) {
                state.board = state.history[state.history.length - 3];
                state.history.pop();
                state.history.pop();
            }
        },
        getFirstPosition: (state) => {
            state.board = state.history[0];
            state.history = [state.history[0]];
        },
    },
});

export const { loafFen, updateBoard, getPreviousMove, getFirstPosition } =
    gameSlice.actions;
export const gameSliceReducers = gameSlice.reducer;
