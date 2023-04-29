import { ISquare } from "widgets/ChessGame/components/Board/types/interfaces";

export interface ISquareProps {
    square: ISquare;
    resolveSquareClick: (square: ISquare) => void;
}
