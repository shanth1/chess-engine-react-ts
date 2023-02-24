import { SET_FULL_MOVE_NUMBER } from "../actionTypes";
import { IActionFullMoveNumber } from "./../Interfaces";

export function setHalfMoveClockActionCreator(
    fullMoveNumberFen: string,
): IActionFullMoveNumber {
    return {
        type: SET_FULL_MOVE_NUMBER,
        fullMoveNumberFen: fullMoveNumberFen,
    };
}
