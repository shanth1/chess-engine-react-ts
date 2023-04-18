import { createSlice } from "@reduxjs/toolkit";
import { getEvaluation } from "entities/evaluation";

const initialState = {
    evaluation: 0,
};

const engineSlice = createSlice({
    name: "engine",
    initialState: initialState,
    reducers: {
        updateEvaluation: (state, action) => {
            const piecePlacement = action.payload.piecePlacement;
            state.evaluation = getEvaluation(piecePlacement);
        },
    },
});

export const { updateEvaluation } = engineSlice.actions;
export const engineReducer = engineSlice.reducer;
