import { createSlice } from "@reduxjs/toolkit";
import { IStatePiecePlacement } from "../../../store/Interfaces";
import { getPiecePlacementArrayFromFen } from "./setPiecePlacement";

const initialState: IStatePiecePlacement = {
    piecePlacement: new Array(64),
};

const piecePlacementSlice = createSlice({
    name: "piecePlacement",
    initialState,
    reducers: {
        setPiecePlacement(state, action) {
            state.piecePlacement = getPiecePlacementArrayFromFen(
                action.payload,
            );
        },
    },
});

export const { setPiecePlacement } = piecePlacementSlice.actions;

export default piecePlacementSlice.reducer;
