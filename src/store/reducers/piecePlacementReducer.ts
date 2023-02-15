import { SET_PIECE_PLACEMENT } from "../actionTypes";
import { IActionPiecePlacement, IStatePiecePlacement } from "../Interfaces";
import { getPiecePlacementArrayFromFen } from "../utils/piecePlacementFenToArray";

const initialState: IStatePiecePlacement = {
    piecePlacement: new Array(64),
};

export function piecePlacementReducer(
    state: IStatePiecePlacement = initialState,
    action: IActionPiecePlacement,
): IStatePiecePlacement {
    switch (action.type) {
        case SET_PIECE_PLACEMENT:
            return {
                piecePlacement: getPiecePlacementArrayFromFen(
                    action.piecePlacementFen,
                ),
            };
        default:
            return state;
    }
}
