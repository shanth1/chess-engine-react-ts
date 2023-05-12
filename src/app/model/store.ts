import { configureStore } from "@reduxjs/toolkit";
import { gameSliceReducers } from "entities/gameSlice";
import { playerSliceReducer } from "entities/playerSlice";
import { engineSliceReducer } from "widgets/Engine/model/engineSlice/engineSlice";

const store = configureStore({
    reducer: {
        player: playerSliceReducer,
        game: gameSliceReducers,
        engine: engineSliceReducer,
    },
});

export { store };
