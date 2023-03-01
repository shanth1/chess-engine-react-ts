import { createSlice } from "@reduxjs/toolkit";
import { Colors, CastlingRightsCodes } from "../../../models/_enums";
import { RootState } from "../../store";
import { getPiecePlacementArrayFromFen } from "./setPiecePlacement";

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
            state.piecePlacement = getPiecePlacementArrayFromFen(
                action.payload.fen.split(" ")[0],
            );
        },
    },
});

export const { setFenPosition } = gameSlice.actions;

export const game = (state: RootState) => state.game;

export default gameSlice.reducer;
