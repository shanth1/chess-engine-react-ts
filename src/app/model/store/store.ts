import { configureStore } from "@reduxjs/toolkit";
import { gameSliceReducer } from "widgets/ChessGame/model";

const store = configureStore({
    reducer: {
        game: gameSliceReducer,
    },
});

export { store };
