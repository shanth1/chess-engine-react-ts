import { ColorBinaryCodes, PieceBinaryCodes } from "./../models/_enums";
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

function getPieceBinaryCodeFromFenSymbol(symbol: string): number {
    const pieceBinaryCode =
        symbol === "k"
            ? PieceBinaryCodes.KING
            : symbol === "q"
            ? PieceBinaryCodes.QUEEN
            : symbol === "r"
            ? PieceBinaryCodes.ROOK
            : symbol === "b"
            ? PieceBinaryCodes.BISHOP
            : symbol === "n"
            ? PieceBinaryCodes.KNIGHT
            : symbol === "p"
            ? PieceBinaryCodes.PAWN
            : PieceBinaryCodes.NONE;
    return pieceBinaryCode;
}

function setPiecePlacement(fenPiecePlacement: string) {
    const piecePlacement: Array<number> = new Array(64);

    let file: number = 0;
    let rank: number = 0;

    for (let symbol of fenPiecePlacement) {
        if (symbol === "/") {
            file = 0;
            rank++;
        } else {
            if (!!Number(symbol)) {
                file += Number(symbol);
            } else {
                const pieceColor =
                    symbol === symbol.toUpperCase()
                        ? ColorBinaryCodes.WHITE
                        : ColorBinaryCodes.BLACK;

                const pieceType = getPieceBinaryCodeFromFenSymbol(
                    symbol.toLowerCase(),
                );
                piecePlacement[rank * 8 + file] = pieceColor | pieceType;
                file++;
            }
        }
    }
    gameState.piecePlacement = piecePlacement;
}

export function setGameFromFen(fen: string): void {
    setPiecePlacement(fen.split(" ")[0]);
}
