import { CastlingRightsCodes } from "./../models/_enums";
import { Colors } from "../models/_enums";

interface IGameState {
    piecePlacement: Array<number>;
    activeColor: Colors;
    castlingRights: number;
    enPassant: string;
    halfMoveClock: number;
    fullMoveNumber: number;
}

export const gameState: IGameState = {
    piecePlacement: [],
    activeColor: Colors.WHITE,
    castlingRights: CastlingRightsCodes.NeitherSide,
    enPassant: "-",
    halfMoveClock: 0,
    fullMoveNumber: 0,
};

function setEnPassant(fenEnPassant: string): void {
    gameState.enPassant = fenEnPassant;
}

function setHalfMoveClock(fenHalfMoveClock: string): void {
    const halfMoveClock: number = Number(fenHalfMoveClock);
    if (isNaN(halfMoveClock)) {
        alert("incorrect halfMoveClock: not a Number input");
    } else {
        gameState.halfMoveClock = halfMoveClock;
    }
}

function setFullMoveNumber(fenFullMoveNumber: string): void {
    const fullMoveNumber: number = Number(fenFullMoveNumber);
    if (isNaN(fullMoveNumber)) {
        alert("incorrect fullMoveNumber: not a Number input");
    } else {
        gameState.fullMoveNumber = fullMoveNumber;
    }
}

export function setGameFromFen(fen: string): void {
    setEnPassant(fen.split(" ")[3]);
    setHalfMoveClock(fen.split(" ")[4]);
    setFullMoveNumber(fen.split(" ")[5]);
}
