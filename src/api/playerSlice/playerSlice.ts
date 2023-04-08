import { createSlice } from "@reduxjs/toolkit";
import { PieceColors } from "api/pieceInfo";

const initialState = {
    playerColor: PieceColors.WHITE,
    colorView: PieceColors.WHITE,
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
    },
});

export const { setPlayerColor, changeColorView } = playerSlice.actions;

export const playerSliceReducer = playerSlice.reducer;
