import { createSlice } from "@reduxjs/toolkit";
import { CastlingRights, PieceColors } from "shared/enums";
import { getPieceColor } from "shared/pieceInfo";
import { getCastlingRights } from "./castlingRights";
import { getPositionFromFen } from "./position";

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
    whitePiecePositions: Array<number>;
    blackPiecePositions: Array<number>;
    capturedWhitePieces: Array<number>;
    capturedBlackPieces: Array<number>;
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
    whitePiecePositions: [],
    blackPiecePositions: [],
    capturedWhitePieces: [],
    capturedBlackPieces: [],
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
    reducers: {
        loafFen: (state, action) => {
            const position = action.payload.fen.split(" ")[0];
            const activeColorFen = action.payload.fen.split(" ")[1];
            const castlingRightsFen = action.payload.fen.split(" ")[2];
            const enPassantFen = action.payload.fen.split(" ")[3];
            const halfMoveClockFen = action.payload.fen.split(" ")[4];
            const fullMoveNumberFen = action.payload.fen.split(" ")[5];

            state.board.position = getPositionFromFen(position);
            state.board.activeColor =
                activeColorFen === "w" ? PieceColors.WHITE : PieceColors.BLACK;
            state.board.castlingRights = getCastlingRights(castlingRightsFen);
            state.board.enPassant = enPassantFen;
            state.board.halfMoveClock = Number(halfMoveClockFen);
            state.board.fullMoveNumber = Number(fullMoveNumberFen);

            state.board.whitePiecePositions = [];
            state.board.blackPiecePositions = [];
            for (let index = 0; index < state.board.position.length; index++) {
                if (!state.board.position[index]) continue;
                if (
                    getPieceColor(state.board.position[index]) ===
                    PieceColors.WHITE
                ) {
                    state.board.whitePiecePositions.push(index);
                } else {
                    state.board.blackPiecePositions.push(index);
                }
            }
        },
        updateBoard: (state, action) => {
            state.board = action.payload.board;
        },
    },
});

export const { loafFen, updateBoard } = gameSlice.actions;
export const gameSliceReducers = gameSlice.reducer;
