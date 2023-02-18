import { SET_FULL_MOVE_NUMBER } from "./../actionTypes";
import { IActionFullMoveNumber, IStateFullMoveNumber } from "./../Interfaces";

export function enPassantReducer(
    state: IStateFullMoveNumber,
    action: IActionFullMoveNumber,
): IStateFullMoveNumber {
    switch (action.type) {
        case SET_FULL_MOVE_NUMBER:
            const fullMoveNumber: number = Number(action.fullMoveNumberFen);
            if (isNaN(fullMoveNumber)) {
                alert("incorrect fullMoveNumber: not a Number input");
            }
            return {
                fullMoveNumber: fullMoveNumber,
            };

        default:
            return state;
    }
}
