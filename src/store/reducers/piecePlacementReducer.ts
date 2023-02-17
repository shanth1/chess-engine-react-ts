import { ColorCodes, PieceCodes } from "../../models/_enums";
import { SET_PIECE_PLACEMENT } from "../actionTypes";
import { IActionPiecePlacement, IStatePiecePlacement } from "../Interfaces";

const initialState: IStatePiecePlacement = {
    piecePlacement: new Array(64),
};

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

function getPiecePlacementArrayFromFen(
    fenPiecePlacement: string,
): Array<number> {
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

export function piecePlacementReducer(
    state: IStatePiecePlacement = initialState,
    action: IActionPiecePlacement,
): IStatePiecePlacement {
    switch (action.type) {
        case SET_PIECE_PLACEMENT:
            return {
                piecePlacement: getPiecePlacementArrayFromFen(
                    action.piecePlacementFen,
                ),
            };
        default:
            return state;
    }
}
