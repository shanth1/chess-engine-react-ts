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
        setPlayerColor: (state, action) => {},
        setColorView: (state, action) => {},
        changeColorView: (state, action) => {},
    },
});

export const { setPlayerColor, setColorView, changeColorView } =
    playerSlice.actions;

export const playerSliceReducer = playerSlice.reducer;
