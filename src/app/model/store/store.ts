import { configureStore } from "@reduxjs/toolkit";
import { fenSliceReducer } from "api/fenSlice";
import { playerSliceReducer } from "api/model/playerSlice/playerSlice";

const store = configureStore({
    reducer: {
        fen: fenSliceReducer,
        player: playerSliceReducer,
    },
});

export { store };
