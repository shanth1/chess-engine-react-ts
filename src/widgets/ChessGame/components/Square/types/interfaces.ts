import { ISquare } from "widgets/ChessGame/types/interfaces";

export interface ISquareProps {
    square: ISquare;
    selectedSquareIndex: number | null;
    setSelectedSquareIndex: (selectedSquareIndex: number | null) => void;
}
