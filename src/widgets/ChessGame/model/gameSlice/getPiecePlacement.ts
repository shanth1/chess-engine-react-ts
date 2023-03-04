import { ColorCodes, PieceCodes } from "../../types/enums";

function getPieceBinaryCodeFromFenSymbol(symbol: string): number {
    const pieceBinaryCode =
        symbol === "k"
            ? PieceCodes.KING
            : symbol === "q"
            ? PieceCodes.QUEEN
            : symbol === "r"
            ? PieceCodes.ROOK
            : symbol === "b"
            ? PieceCodes.BISHOP
            : symbol === "n"
            ? PieceCodes.KNIGHT
            : symbol === "p"
            ? PieceCodes.PAWN
            : PieceCodes.NONE;
    return pieceBinaryCode;
}

export function getPiecePlacementArrayFromFen(fen: string): Array<number> {
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
                        ? ColorCodes.WHITE
                        : ColorCodes.BLACK;

                const pieceType = getPieceBinaryCodeFromFenSymbol(
                    symbol.toLowerCase(),
                );
                piecePlacement[rank * 8 + file] = pieceColor | pieceType;
                file++;
            }
        }
    }

    return piecePlacement;
}
