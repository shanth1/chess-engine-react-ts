import { configureStore } from "@reduxjs/toolkit";
import { playerSliceReducer } from "api/playerSlice";
import { engineReducer } from "features/Engine/engineSlice";
import { gameSliceReducers } from "pages/GamePage/model/gameSlice";

const store = configureStore({
    reducer: {
        player: playerSliceReducer,
        engine: engineReducer,
        game: gameSliceReducers,
    },
});

export { store };
