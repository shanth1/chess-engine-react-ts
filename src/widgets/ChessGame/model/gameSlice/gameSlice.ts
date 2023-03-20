import { getPieceColor } from "./../../lib/gettingPieceInfo/PieceColor";
import { PieceColors, PieceTypes } from "./../../types/enums";
import { createSlice, current } from "@reduxjs/toolkit";
import { CastlingRightsCodes } from "../../types/enums";
import { getCastlingRights } from "./getCastlingRights";
import { getPiecePlacementArrayFromFen } from "./getPiecePlacement";

const initialState = {
    piecePlacement: getPiecePlacementArrayFromFen(
        "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
    ),
    activeColor: PieceColors.WHITE,
    castlingRights: CastlingRightsCodes.NeitherSide,
    enPassant: "-",
    halfMoveClock: 0,
    fullMoveNumber: 0,
};

const gameSlice = createSlice({
    name: "game",
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

            if (getPieceColor(figure) === PieceColors.BLACK)
                state.fullMoveNumber++;
        },
        changeActiveColor: (state) => {
            state.activeColor =
                state.activeColor === PieceColors.WHITE
                    ? PieceColors.BLACK
                    : PieceColors.WHITE;
        },
    },
});

export const { setFenPosition, moveFigure, changeActiveColor } =
    gameSlice.actions;

export const gameSliceReducer = gameSlice.reducer;
