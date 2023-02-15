interface IAction {
    type: string;
}

export interface IActionPiecePlacement extends IAction {
    piecePlacementFen: string;
}

export interface IStatePiecePlacement {
    piecePlacement: Array<number>;
}
