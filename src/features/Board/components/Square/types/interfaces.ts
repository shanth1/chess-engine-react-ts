import { ISquare } from "features/Board/types/interfaces";

export interface ISquareProps {
    square: ISquare;
    selectedIndex: number | null;
    setSelectedIndex: (selectedSquareIndex: number | null) => void;
    piecePlacement: Array<number>;
}
