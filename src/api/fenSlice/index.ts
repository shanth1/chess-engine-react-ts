import { fenSliceActions } from "./model/fenSlice";
export const {
    setFenPosition,
    moveFigure,
    changeActiveColor,
    updateCastlingRights,
    updateEnPassant,
    deletePiece,
    promotesPawn,
} = fenSliceActions;

export { fenSliceReducer } from "./model/fenSlice";
