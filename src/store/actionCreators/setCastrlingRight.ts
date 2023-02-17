import { IActionCastlingRight } from "./../Interfaces";
import { SET_CASTLING_RIGHT } from "./../actionTypes";

export function setCastlingRightsActionCreator(
    castlingRightsFen: string,
): IActionCastlingRight {
    return {
        type: SET_CASTLING_RIGHT,
        castlingRightsFen: castlingRightsFen,
    };
}
