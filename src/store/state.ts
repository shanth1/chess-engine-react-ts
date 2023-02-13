import { Colors } from "../models/_enums";

interface IGameState {
    piecePlacement: Array<number>;
    activeColor: Colors;
    castlingRights: number;
    enPassant: boolean;
    halfMoveClock: number;
    fullMoveNumber: number;
}

export const gameState: IGameState = {
    piecePlacement: [],
    activeColor: Colors.WHITE,
    castlingRights: 1,
    enPassant: false,
    halfMoveClock: 0,
    fullMoveNumber: 0,
};

export function setGameFromFen(fen: string): void {
    console.log(fen.split(" "));
}
