import { store } from "app/model/store";
import { Game } from "pages/GamePage/Game";

declare global {
    type AppDispatch = typeof store.dispatch;
    type RootState = ReturnType<typeof store.getState>;
    type TGame = Game;
    type TColor = "white" | "black";
}
