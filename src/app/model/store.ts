import { configureStore } from "@reduxjs/toolkit";
import { gameSliceReducers } from "entities/gameSlice";
import { playerSliceReducer } from "entities/playerSlice";

const store = configureStore({
    reducer: {
        player: playerSliceReducer,
        game: gameSliceReducers,
    },
});

export { store };
