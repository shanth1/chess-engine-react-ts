import { configureStore } from "@reduxjs/toolkit";
import { gameSliceReducer, playerSliceReducer } from "widgets/ChessGame/model";

const store = configureStore({
    reducer: {
        game: gameSliceReducer,
        player: playerSliceReducer,
    },
});

export { store };
