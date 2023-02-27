import { configureStore } from "@reduxjs/toolkit";
import piecePlacementReducer from "./slices/piecePlacement/piecePlacementSlice";

export default configureStore({
    reducer: {
        piecePlacement: piecePlacementReducer,
    },
});
