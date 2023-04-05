import { configureStore } from "@reduxjs/toolkit";
import { fenSliceReducer, playerSliceReducer } from "api/model";

const store = configureStore({
    reducer: {
        fen: fenSliceReducer,
        player: playerSliceReducer,
    },
});

export { store };
