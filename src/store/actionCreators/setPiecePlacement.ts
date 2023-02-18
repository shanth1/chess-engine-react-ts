import { SET_PIECE_PLACEMENT } from "../actionTypes";
import { IActionPiecePlacement } from "../Interfaces";

export function setPiecePlacementActionCreator(
    piecePlacementFen: string,
): IActionPiecePlacement {
    return {
        type: SET_PIECE_PLACEMENT,
        piecePlacementFen: piecePlacementFen,
    };
}
