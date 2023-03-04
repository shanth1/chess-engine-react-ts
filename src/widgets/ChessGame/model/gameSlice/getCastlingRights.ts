import { CastlingRightsCodes } from "../../types/enums";

export function getCastlingRights(fenCastlingRights: string): number {
    let castlingRights: number = Number();
    for (let symbol of fenCastlingRights) {
        if (symbol === "K") {
            castlingRights =
                castlingRights | CastlingRightsCodes.WhiteKingNearRookSide;
        } else if (symbol === "Q") {
            castlingRights =
                castlingRights | CastlingRightsCodes.WitheKingQueenSide;
        } else if (symbol === "k") {
            castlingRights =
                castlingRights | CastlingRightsCodes.BlackKingNearRookSide;
        } else if (symbol === "q") {
            castlingRights =
                castlingRights | CastlingRightsCodes.BlackKingQueenSide;
        } else if (symbol === "-") {
            castlingRights = CastlingRightsCodes.NeitherSide;
        } else {
            alert("undefined castling right symbol");
        }
    }
    return castlingRights;
}
