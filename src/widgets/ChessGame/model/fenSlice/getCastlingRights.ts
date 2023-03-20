import { CastlingRights } from "widgets/ChessGame/types/enums";

export function getCastlingRights(fenCastlingRights: string): number {
    let castlingRights: number = Number();
    for (let symbol of fenCastlingRights) {
        if (symbol === "K") {
            castlingRights = castlingRights | CastlingRights.WhiteKingRookSide;
        } else if (symbol === "Q") {
            castlingRights = castlingRights | CastlingRights.WitheKingQueenSide;
        } else if (symbol === "k") {
            castlingRights = castlingRights | CastlingRights.BlackKingRookSide;
        } else if (symbol === "q") {
            castlingRights = castlingRights | CastlingRights.BlackKingQueenSide;
        } else if (symbol === "-") {
            castlingRights = CastlingRights.NeitherSide;
        } else {
            alert("undefined castling right symbol");
        }
    }
    return castlingRights;
}
