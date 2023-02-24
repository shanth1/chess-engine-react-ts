import { Colors } from "./../../models/_enums";
import { SET_ACTIVE_COLOR } from "./../actionTypes";
import { IStateActiveColor, IActionActiveColor } from "./../Interfaces";

export function activeColorReducer(
    state: IStateActiveColor,
    action: IActionActiveColor,
): IStateActiveColor {
    switch (action.type) {
        case SET_ACTIVE_COLOR:
            return {
                activeColor:
                    action.activeColorFen === "w" ? Colors.WHITE : Colors.BLACK,
            };
        default:
            return state;
    }
}
