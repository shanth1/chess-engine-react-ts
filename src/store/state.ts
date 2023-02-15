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

function setActiveColor(fenActiveColor: string): void {
    gameState.activeColor =
        fenActiveColor.toLowerCase() === "w" ? Colors.WHITE : Colors.BLACK;
}

function setCastlingRights(fenCastlingRights: string): void {
    for (let symbol of fenCastlingRights) {
        if (symbol === "K") {
            gameState.castlingRights =
                gameState.castlingRights |
                CastlingRightsCodes.WhiteKingNearRookSide;
        } else if (symbol === "Q") {
            gameState.castlingRights =
                gameState.castlingRights |
                CastlingRightsCodes.WitheKingQueenSide;
        } else if (symbol === "k") {
            gameState.castlingRights =
                gameState.castlingRights |
                CastlingRightsCodes.BlackKingNearRookSide;
        } else if (symbol === "q") {
            gameState.castlingRights =
                gameState.castlingRights |
                CastlingRightsCodes.BlackKingQueenSide;
        } else if (symbol === "-") {
            gameState.castlingRights = CastlingRightsCodes.NeitherSide;
        } else {
            alert("undefined castling right symbol");
        }
    }
}

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
    setActiveColor(fen.split(" ")[1]);
    setCastlingRights(fen.split(" ")[2]);
    setEnPassant(fen.split(" ")[3]);
    setHalfMoveClock(fen.split(" ")[4]);
    setFullMoveNumber(fen.split(" ")[5]);
}
