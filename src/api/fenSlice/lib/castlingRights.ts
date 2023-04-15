import { CastlingRights } from "shared";

export function getCastlingRights(fenCastlingRights: string): number {
    let castlingRights: number = Number();
    for (let symbol of fenCastlingRights) {
        if (symbol === "K") {
            castlingRights = castlingRights | CastlingRights.WhiteKingSide;
        } else if (symbol === "Q") {
            castlingRights = castlingRights | CastlingRights.WitheQueenSide;
        } else if (symbol === "k") {
            castlingRights = castlingRights | CastlingRights.BlackKingSide;
        } else if (symbol === "q") {
            castlingRights = castlingRights | CastlingRights.BlackQueenSide;
        } else if (symbol === "-") {
            castlingRights = CastlingRights.NeitherSide;
        } else {
            alert("undefined castling right symbol");
        }
    }
    return castlingRights;
}
