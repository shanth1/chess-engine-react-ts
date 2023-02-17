import { SET_EN_PASSANT } from "./../actionTypes";
import { IStateEnPassant, IActionEnPassant } from "./../Interfaces";
export function enPassantReducer(
    state: IStateEnPassant,
    action: IActionEnPassant,
): IStateEnPassant {
    switch (action.type) {
        case SET_EN_PASSANT:
            return {
                enPassant: action.enPassantFen,
            };
        default:
            return state;
    }
}
