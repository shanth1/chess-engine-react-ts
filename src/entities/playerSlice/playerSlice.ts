import { createSlice } from "@reduxjs/toolkit";
import { PieceColors } from "shared/enums";

const initialState = {
    playerColor: PieceColors.WHITE,
    colorView: PieceColors.WHITE,
    pieceVisibility: true,
};

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        setPlayerColor: (state, action) => {
            state.playerColor = action.payload.playerColor;
        },
        changeColorView: (state) => {
            state.colorView =
                state.colorView === PieceColors.WHITE
                    ? PieceColors.BLACK
                    : PieceColors.WHITE;
        },
        changePieceVisibility: (state) => {
            state.pieceVisibility = !state.pieceVisibility;
        },
    },
});

export const { setPlayerColor, changeColorView, changePieceVisibility } =
    playerSlice.actions;

export const playerSliceReducer = playerSlice.reducer;
