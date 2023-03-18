import { PieceColors } from "widgets/ChessGame/types/enums";
import { createSlice } from "@reduxjs/toolkit";

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
