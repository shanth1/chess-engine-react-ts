import { createSlice, current } from "@reduxjs/toolkit";
import { RootState } from "app";
import { CastlingRightsCodes, PieceCodes, ColorCodes } from "../../types/enums";
import { getCastlingRights } from "./getCastlingRights";
import { getPiecePlacementArrayFromFen } from "./getPiecePlacement";

const initialState = {
    piecePlacement: new Array(64),
    activeColor: ColorCodes.WHITE,
    castlingRights: CastlingRightsCodes.NeitherSide,
    enPassant: "-",
    halfMoveClock: 0,
    fullMoveNumber: 0,
};

const gameSlice = createSlice({
    name: "piecePlacement",
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
                activeColorFen === "w" ? ColorCodes.WHITE : ColorCodes.BLACK;
            state.castlingRights = getCastlingRights(castlingRightsFen);
            state.enPassant = enPassantFen;
            state.halfMoveClock = Number(halfMoveClockFen);
            state.fullMoveNumber = Number(fullMoveNumberFen);
        },
        moveFigure: (state, action) => {
            const piecePlacement = [...current(state.piecePlacement)];
            const figure = piecePlacement[action.payload.startIndex];

            piecePlacement[action.payload.startIndex] = PieceCodes.NONE;
            piecePlacement[action.payload.targetIndex] = figure;

            state.piecePlacement = piecePlacement;
        },
    },
});

export const { setFenPosition, moveFigure } = gameSlice.actions;

export const game = (state: RootState) => state.game;

export const gameSliceReducer = gameSlice.reducer;
