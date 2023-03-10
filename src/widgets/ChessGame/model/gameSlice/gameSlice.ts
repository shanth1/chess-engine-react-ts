import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app";
import { Colors, CastlingRightsCodes } from "../../types/enums";
import { getCastlingRights } from "./getCastlingRights";
import { getPiecePlacementArrayFromFen } from "./getPiecePlacement";

const initialState = {
    piecePlacement: new Array(64),
    activeColor: Colors.WHITE,
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
                activeColorFen === "w" ? Colors.WHITE : Colors.BLACK;
            state.castlingRights = getCastlingRights(castlingRightsFen);
            state.enPassant = enPassantFen;
            state.halfMoveClock = Number(halfMoveClockFen);
            state.fullMoveNumber = Number(fullMoveNumberFen);
        },
    },
});

export const { setFenPosition } = gameSlice.actions;

export const game = (state: RootState) => state.game;

export const gameSliceReducer = gameSlice.reducer;
