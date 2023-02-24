import { SET_EN_PASSANT } from "./../actionTypes";
import { IActionEnPassant } from "./../Interfaces";

export function setEnPassantActionCreator(
    enPassantFen: string,
): IActionEnPassant {
    return {
        type: SET_EN_PASSANT,
        enPassantFen: enPassantFen,
    };
}
