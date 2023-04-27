import { ISquare } from "features/Board/types/interfaces";

export interface ISquareProps {
    square: ISquare;
    resolveSquareClick: (square: ISquare) => void;
}
