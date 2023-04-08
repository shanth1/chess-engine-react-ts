import { configureStore } from "@reduxjs/toolkit";
import { fenSliceReducer } from "api/fenSlice";
import { playerSliceReducer } from "api/playerSlice";

const store = configureStore({
    reducer: {
        fen: fenSliceReducer,
        player: playerSliceReducer,
    },
});

export { store };
