import { configureStore } from "@reduxjs/toolkit";
import { fenSliceReducer } from "api/fenSlice";
import { playerSliceReducer } from "api/playerSlice";
import { engineReducer } from "features/Engine/engineSlice";

const store = configureStore({
    reducer: {
        fen: fenSliceReducer,
        player: playerSliceReducer,
        engine: engineReducer,
    },
});

export { store };
