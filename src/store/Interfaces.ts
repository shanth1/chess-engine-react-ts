import { Colors } from "../models/_enums";

interface IAction {
    type: string;
}

export interface IActionPiecePlacement extends IAction {
    piecePlacementFen: string;
}

export interface IActionActiveColor extends IAction {
    activeColorFen: string;
}

export interface IActionCastlingRight extends IAction {
    castlingRightsFen: string;
}

export interface IActionEnPassant extends IAction {
    enPassantFen: string;
}

export interface IActionHalfMoveClock extends IAction {
    halfMoveClockFen: string;
}

export interface IStatePiecePlacement {
    piecePlacement: Array<number>;
}

export interface IStateActiveColor {
    activeColor: Colors;
}

export interface IStateCastlingRights {
    castlingRights: number;
}

export interface IStateEnPassant {
    enPassant: string;
}

export interface IStateHalfMoveClock {
    halfMoveClock: number;
}
