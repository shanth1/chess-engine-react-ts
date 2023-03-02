import { configureStore } from "@reduxjs/toolkit";
// import gameSliceReducer from "./slices/gameSlice/gameSlice";

const store = configureStore({
    reducer: {
        // game: gameSliceReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
