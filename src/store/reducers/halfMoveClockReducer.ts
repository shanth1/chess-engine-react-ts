import { SET_HALF_MOVE_CLOCK } from "./../actionTypes";
import { IStateHalfMoveClock, IActionHalfMoveClock } from "./../Interfaces";

export function enPassantReducer(
    state: IStateHalfMoveClock,
    action: IActionHalfMoveClock,
): IStateHalfMoveClock {
    switch (action.type) {
        case SET_HALF_MOVE_CLOCK:
            const halfMoveClock: number = Number(action.halfMoveClockFen);
            if (isNaN(halfMoveClock)) {
                alert("incorrect halfMoveClock: not a Number input");
            }
            return {
                halfMoveClock: halfMoveClock,
            };

        default:
            return state;
    }
}
