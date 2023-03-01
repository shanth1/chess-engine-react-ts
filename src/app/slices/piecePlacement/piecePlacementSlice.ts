import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { getPiecePlacementArrayFromFen } from "./setPiecePlacement";

const initialState = {
    piecePlacementArray: new Array(64),
};

const piecePlacementSlice = createSlice({
    name: "piecePlacement",
    initialState,
    reducers: {
        setPiecePlacement: (state, action) => {
            state.piecePlacementArray = getPiecePlacementArrayFromFen(
                action.payload,
            );
        },
    },
});

export const { setPiecePlacement } = piecePlacementSlice.actions;

export const piecePlacement = (state: RootState) => state.piecePlacement;

export default piecePlacementSlice.reducer;
