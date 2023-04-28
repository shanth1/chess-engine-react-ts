import { Colors } from "./enums";

export interface ISquare {
    readonly index: number;
    readonly color: Colors;
    readonly name: string;
    isLegal: boolean;
    isAlternativeCastling: boolean;
    isSelected: boolean;
    piece: number;
}

export interface IBoardProps {
    game: TGame;
}
