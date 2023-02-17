import { SET_ACTIVE_COLOR } from "./../actionTypes";
import { IActionActiveColor } from "./../Interfaces";

export function setActiveColorActionCreator(
    activeColorFen: string,
): IActionActiveColor {
    return {
        type: SET_ACTIVE_COLOR,
        activeColorFen: activeColorFen,
    };
}
