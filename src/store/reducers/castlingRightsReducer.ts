import { CastlingRightsCodes } from "./../../models/_enums";
import { SET_CASTLING_RIGHT } from "./../actionTypes";
import { IStateCastlingRights, IActionCastlingRight } from "./../Interfaces";

function getCastlingRights(fenCastlingRights: string): number {
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
export function castCastlingRightsReducer(
    state: IStateCastlingRights,
    action: IActionCastlingRight,
): IStateCastlingRights {
    switch (action.type) {
        case SET_CASTLING_RIGHT:
            return {
                castlingRights: getCastlingRights(action.castlingRightsFen),
            };
        default:
            return state;
    }
}
