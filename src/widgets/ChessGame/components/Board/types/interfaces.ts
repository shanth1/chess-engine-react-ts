import { Colors } from "./enums";

export interface ISquare {
    readonly index: number;
    readonly color: Colors;
    readonly name: string;
    renderIndex: number;
    isLegal: boolean;
    isAlternativeCastling: boolean;
    isSelected: boolean;
    piece: number;
    isStart: boolean;
    isTarget: boolean;
}

export interface IBoardProps {
    game: TGame;
}
