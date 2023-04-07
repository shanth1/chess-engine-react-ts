import { ISquare } from "widgets/ChessGame/types/interfaces";

export interface ISquareProps {
    square: ISquare;
    selectedIndex: number | null;
    setSelectedIndex: (selectedSquareIndex: number | null) => void;
    piecePlacement: Array<number>;
}
