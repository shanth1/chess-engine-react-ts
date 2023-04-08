import { createSlice, current } from "@reduxjs/toolkit";
import { getPiecePlacementArrayFromFen } from "../lib/piecePlacement";
import { getCastlingRights } from "../lib/castlingRights";
import {
    CastlingRights,
    PieceColors,
    PieceTypes,
} from "widgets/ChessGame/types/enums";
import { getPieceCode } from "api/pieceInfo/model/pieceCode";

const initialState = {
    piecePlacement: getPiecePlacementArrayFromFen(
        "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
    ),
    activeColor: PieceColors.WHITE,
    castlingRights: getCastlingRights("KQkq"),
    enPassant: "-",
    halfMoveClock: 0,
    fullMoveNumber: 0,
};

const fenSlice = createSlice({
    name: "fen",
    initialState,
    reducers: {
        setFenPosition: (state, action) => {
            const piecePlacementFen = action.payload.fen.split(" ")[0];
            const activeColorFen = action.payload.fen.split(" ")[1];
            const castlingRightsFen = action.payload.fen.split(" ")[2];
            const enPassantFen = action.payload.fen.split(" ")[3];
            const halfMoveClockFen = action.payload.fen.split(" ")[4];
            const fullMoveNumberFen = action.payload.fen.split(" ")[5];

            state.piecePlacement =
                getPiecePlacementArrayFromFen(piecePlacementFen);
            state.activeColor =
                activeColorFen === "w" ? PieceColors.WHITE : PieceColors.BLACK;
            state.castlingRights = getCastlingRights(castlingRightsFen);
            state.enPassant = enPassantFen;
            state.halfMoveClock = Number(halfMoveClockFen);
            state.fullMoveNumber = Number(fullMoveNumberFen);
        },
        moveFigure: (state, action) => {
            const piecePlacement = [...current(state.piecePlacement)];
            const figure = piecePlacement[action.payload.startIndex];

            piecePlacement[action.payload.startIndex] = PieceTypes.NONE;
            piecePlacement[action.payload.targetIndex] = figure;

            state.piecePlacement = piecePlacement;
        },
        deletePiece: (state, action) => {
            const piecePlacement = [...current(state.piecePlacement)];
            piecePlacement[action.payload.index] = PieceTypes.NONE;
            state.piecePlacement = piecePlacement;
        },
        updateCastlingRights: (state, action) => {
            const squareName = action.payload.squareName;
            if (squareName === "e1") {
                state.castlingRights =
                    state.castlingRights &
                    ~CastlingRights.WhiteKingSide &
                    ~CastlingRights.WitheQueenSide;
            } else if (squareName === "h1") {
                state.castlingRights =
                    state.castlingRights & ~CastlingRights.WhiteKingSide;
            } else if (squareName === "a1") {
                state.castlingRights =
                    state.castlingRights & ~CastlingRights.WitheQueenSide;
            } else if (squareName === "e8") {
                state.castlingRights =
                    state.castlingRights &
                    ~CastlingRights.BlackKingSide &
                    ~CastlingRights.BlackQueenSide;
            } else if (squareName === "h8") {
                state.castlingRights =
                    state.castlingRights & ~CastlingRights.BlackKingSide;
            } else if (squareName === "a8") {
                state.castlingRights =
                    state.castlingRights & ~CastlingRights.BlackQueenSide;
            }
        },
        updateEnPassant: (state, action) => {
            state.enPassant = action.payload.enPassant;
        },
        promotesPawn: (state, action) => {
            const pieceCode = getPieceCode(PieceTypes.QUEEN, state.activeColor);
            state.piecePlacement[action.payload.index] = pieceCode;
        },
        changeActiveColor: (state) => {
            state.activeColor =
                state.activeColor === PieceColors.WHITE
                    ? PieceColors.BLACK
                    : PieceColors.WHITE;
        },
    },
});

export const fenSliceActions = fenSlice.actions;
export const fenSliceReducer = fenSlice.reducer;
