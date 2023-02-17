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

export interface IStatePiecePlacement {
    piecePlacement: Array<number>;
}

export interface IStateActiveColor {
    activeColor: Colors;
}

export interface IStateActiveColor {
    activeColor: Colors;
}

export interface IStateCastlingRights {
    castlingRights: number;
}
