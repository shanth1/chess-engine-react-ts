import { store } from "app/model/store";

declare global {
    type AppDispatch = typeof store.dispatch;
    type RootState = ReturnType<typeof store.getState>;
}
