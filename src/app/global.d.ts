import { store } from "app/model/store";
import { Game } from "pages/GamePage/Game";

declare global {
    type AppDispatch = typeof store.dispatch;
    type RootState = ReturnType<typeof store.getState>;
    type TGame = Game;
    type TColor = "white" | "black";

    interface IBoard {
        position: Array<number>;
        activeColor: PieceColors;
        castlingRights:
            | CastlingRights.BlackKingSide
            | CastlingRights.BlackQueenSide
            | CastlingRights.BothSides
            | CastlingRights.NeitherSide
            | CastlingRights.WhiteKingSide
            | CastlingRights.WitheQueenSide;
        enPassant: string;
        halfMoveClock: number;
        fullMoveNumber: number;
        whitePiecePositions: Array<number>;
        blackPiecePositions: Array<number>;
        capturedWhitePieces: Array<number>;
        capturedBlackPieces: Array<number>;
    }
}
