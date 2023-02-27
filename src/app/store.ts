import { configureStore } from "@reduxjs/toolkit";
import piecePlacementReducer from "./slices/piecePlacement/piecePlacementSlice";

export const store = configureStore({
    reducer: {
        piecePlacement: piecePlacementReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
