import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEngineData } from "../engineData/engineData";

interface IEngine {
    status: "analysis" | "completed" | "off";
    bestMove: number[] | null;
    staticEvaluation: number;
    depthEvaluation: number;
    searchCount: number;
    analysisTime: number;
}

type THistory = Array<number[]>;

interface IEngineSlice extends IEngine {
    history: THistory;
}

const initialState: IEngineSlice = {
    status: "off",
    bestMove: null,
    staticEvaluation: 0,
    depthEvaluation: 0,
    searchCount: 0,
    analysisTime: 0,
    history: [],
};

interface IStartEngineData {
    board: IBoard;
    depth: number;
}

export const startEngineAsync = createAsyncThunk(
    "engine/startEngineAsync",
    async ({ board, depth }: IStartEngineData, { dispatch }) => {
        debugger;
        const engineData = await getEngineData(board, depth);
        // dispatch(turnOffEngine());

        return engineData;
    },
);

const engineSlice = createSlice({
    name: "engine",
    initialState,
    reducers: {
        turnOffEngine: (state) => {
            debugger;
            state.status = "off";
            state.bestMove = null;
        },
    },
    extraReducers(builder) {
        builder.addCase(startEngineAsync.pending, (state) => {
            debugger;
            state.status = "analysis";
        });
        builder.addCase(startEngineAsync.fulfilled, (state, action) => {
            debugger;
            state.bestMove = action.payload.bestMove;
            state.depthEvaluation = action.payload.bestEvaluation;
            state.status = "completed";
        });
    },
});

export const { turnOffEngine } = engineSlice.actions;
export const engineSliceReducer = engineSlice.reducer;
