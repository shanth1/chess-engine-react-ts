import { PieceColors, PieceTypes } from "shared/enums";

function getPieceFromSymbol(symbol: string): number {
    const pieceBinaryCode =
        symbol === "k"
            ? PieceTypes.KING
            : symbol === "q"
            ? PieceTypes.QUEEN
            : symbol === "r"
            ? PieceTypes.ROOK
            : symbol === "b"
            ? PieceTypes.BISHOP
            : symbol === "n"
            ? PieceTypes.KNIGHT
            : symbol === "p"
            ? PieceTypes.PAWN
            : PieceTypes.NONE;
    return pieceBinaryCode;
}

export function getPositionFromFen(fen: string): Array<number> {
    const piecePlacement: Array<number> = new Array(64);

    const fenPiecePlacement = fen.split(" ")[0];

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
                        ? PieceColors.WHITE
                        : PieceColors.BLACK;

                const pieceType = getPieceFromSymbol(symbol.toLowerCase());
                piecePlacement[rank * 8 + file] = pieceColor | pieceType;
                file++;
            }
        }
    }

    return piecePlacement;
}
