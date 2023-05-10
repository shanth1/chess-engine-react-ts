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
    async ({ board, depth }: IStartEngineData) => {
        const engineData = await getEngineData(board, depth);
        return engineData;
    },
);

const engineSlice = createSlice({
    name: "engine",
    initialState,
    reducers: {
        turnOffEngine: (state) => {
            state.status = "off";
            state.bestMove = null;
        },
    },
    extraReducers(builder) {
        builder.addCase(startEngineAsync.pending, (state) => {
            state.status = "analysis";
        });
        builder.addCase(startEngineAsync.fulfilled, (state, action) => {
            state.bestMove = action.payload.bestMove;
            state.depthEvaluation = action.payload.bestEvaluation;
            state.searchCount = action.payload.searchCount;
            state.status = "completed";
        });
    },
});

export const { turnOffEngine } = engineSlice.actions;
export const engineSliceReducer = engineSlice.reducer;
