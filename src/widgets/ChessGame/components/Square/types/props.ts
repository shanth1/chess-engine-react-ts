import { Colors, PieceCodes } from "widgets/ChessGame/types/enums";
import { ISquare } from "../../Board";

export interface ISquareProps {
    index: number;
    color: Colors;
    piece: PieceCodes;
    selectedSquare: ISquare | null;
    available: boolean;
    onClick: (index: number) => void;
    targetMove: (index: number) => void;
}
