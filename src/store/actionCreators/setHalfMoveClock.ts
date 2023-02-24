import { SET_HALF_MOVE_CLOCK } from "./../actionTypes";
import { IActionHalfMoveClock } from "./../Interfaces";

export function setHalfMoveClockActionCreator(
    halfMoveClockFen: string,
): IActionHalfMoveClock {
    return {
        type: SET_HALF_MOVE_CLOCK,
        halfMoveClockFen: halfMoveClockFen,
    };
}
